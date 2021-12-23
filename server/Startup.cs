using System;
using System.IO;
using System.Text;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Reflection;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

using Microsoft.AspNet.OData.Extensions;
using Microsoft.AspNet.OData;
using Microsoft.AspNet.OData.Builder;

using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.Extensions.Hosting;

using SinDarElaMobile.Data;
using SinDarElaMobile.Models;
using SinDarElaMobile.Authentication;

namespace SinDarElaMobile
{
  public partial class Startup
  {
    public Startup(IConfiguration configuration, IWebHostEnvironment env)
    {
        Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    partial void OnConfigureServices(IServiceCollection services);

    partial void OnConfiguringServices(IServiceCollection services);

    public void ConfigureServices(IServiceCollection services)
    {
      OnConfiguringServices(services);

      services.AddOptions();
      services.AddLogging(logging =>
      {
          logging.AddConsole();
          logging.AddDebug();
      });

      services.AddCors(options =>
      {
          options.AddPolicy(
              "AllowAny",
              x =>
              {
                  x.AllowAnyHeader()
                  .AllowAnyMethod()
                  .SetIsOriginAllowed(isOriginAllowed: _ => true)
                  .AllowCredentials();
              });
      });
      services.AddMvc(options =>
      {
          options.EnableEndpointRouting = false;

          options.OutputFormatters.Add(new SinDarElaMobile.Data.XlsDataContractSerializerOutputFormatter());
          options.FormatterMappings.SetMediaTypeMappingForFormat("xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");

          options.OutputFormatters.Add(new SinDarElaMobile.Data.CsvDataContractSerializerOutputFormatter());
          options.FormatterMappings.SetMediaTypeMappingForFormat("csv", "text/csv");
      }).AddNewtonsoftJson();

      services.AddAuthorization();
      
          services.AddOData();
          services.AddODataQueryFilter();

      services.AddHttpContextAccessor();
      var tokenValidationParameters = new TokenValidationParameters
      {
          ValidateIssuerSigningKey = true,
          IssuerSigningKey = TokenProviderOptions.Key,
          ValidateIssuer = true,
          ValidIssuer = TokenProviderOptions.Issuer,
          ValidateAudience = true,
          ValidAudience = TokenProviderOptions.Audience,
          ValidateLifetime = true,
          ClockSkew = TimeSpan.Zero
      };

      services.AddAuthentication(options =>
      {
          options.DefaultScheme = Microsoft.AspNetCore.Authentication.JwtBearer.JwtBearerDefaults.AuthenticationScheme;
      }).AddJwtBearer(options =>
      {
          options.Audience = TokenProviderOptions.Audience;
          options.ClaimsIssuer = TokenProviderOptions.Issuer;
          options.TokenValidationParameters = tokenValidationParameters;
          options.SaveToken = true;
      });
      services.AddDbContext<ApplicationIdentityDbContext>(options =>
      {
         options.UseMySql(Configuration.GetConnectionString("dbSinDarElaConnection"));
      });

      services.AddIdentity<ApplicationUser, IdentityRole>()
            .AddEntityFrameworkStores<ApplicationIdentityDbContext>();

      services.AddScoped<IUserClaimsPrincipalFactory<ApplicationUser>, ApplicationPrincipalFactory>();


      services.AddDbContext<SinDarElaMobile.Data.DbSinDarElaContext>(options =>
      {
        options.UseMySql(Configuration.GetConnectionString("dbSinDarElaConnection"));
      });

      OnConfigureServices(services);
    }

    partial void OnConfigure(IApplicationBuilder app);


    partial void OnConfigure(IApplicationBuilder app, IWebHostEnvironment env);
    partial void OnConfiguring(IApplicationBuilder app, IWebHostEnvironment env);
    partial void OnConfigureOData(ODataConventionModelBuilder builder);

    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {

      OnConfiguring(app, env);

      IServiceProvider provider = app.ApplicationServices.GetRequiredService<IServiceProvider>();
      app.UseCors("AllowAny");
      app.Use(async (context, next) => {
          if (context.Request.Path.Value == "/__ssrsreport" || context.Request.Path.Value == "/ssrsproxy") {
            await next();
            return;
          }
          await next();
          if ((context.Response.StatusCode == 404 || context.Response.StatusCode == 401) && !Path.HasExtension(context.Request.Path.Value) && !context.Request.Path.Value.Contains("/odata")) {
              context.Request.Path = "/index.html";
              await next();
          }
      });

      app.UseDefaultFiles();
      app.UseStaticFiles();
      app.UseDeveloperExceptionPage();

      app.UseMvc(builder =>
      {
        if (env.EnvironmentName == "Development")
        {
            builder.MapRoute(name: "default",
              template: "{controller}/{action}/{id?}",
              defaults: new { controller = "Home", action = "Index" }
            );
        }

          builder.Count().Filter().OrderBy().Expand().Select().MaxTop(null).SetTimeZoneInfo(TimeZoneInfo.Utc);
        

          var oDataBuilder = new ODataConventionModelBuilder(provider);

          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.AbrechnungBasis>("AbrechnungBases");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.AbrechnungKundenReststunden>("AbrechnungKundenReststundens");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.Aufgaben>("Aufgabens");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.AuswahlJahr>("AuswahlJahrs");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.AuswahlMonat>("AuswahlMonats");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.Base>("Bases");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.BaseAnreden>("BaseAnredens");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.BaseBanken>("BaseBankens");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.BaseKontakte>("BaseKontaktes");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.Benutzer>("Benutzers");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.Debugg>("Debuggs");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.Dokumente>("Dokumentes");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.DokumenteKategorien>("DokumenteKategoriens");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.Ereignisse>("Ereignisses");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.EreignisseArten>("EreignisseArtens");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.EreignisseSonderurlaubArten>("EreignisseSonderurlaubArtens");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.EreignisseTeilnehmer>("EreignisseTeilnehmers");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.EreignisseTeilnehmerStatus>("EreignisseTeilnehmerStatuses");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.Feedback>("Feedbacks");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.InfotexteHtml>("InfotexteHtmls");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.Kunden>("Kundens");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.KundenInfo>("KundenInfos");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.KundenKontakte>("KundenKontaktes");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.KundenKontakteArten>("KundenKontakteArtens");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.KundenLeistungArten>("KundenLeistungArtens");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.KundenLeistungen>("KundenLeistungens");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.KundenLeistungenBescheide>("KundenLeistungenBescheides");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.KundenLeistungenBescheideKontingente>("KundenLeistungenBescheideKontingentes");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.KundenLeistungenBescheideStatus>("KundenLeistungenBescheideStatuses");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.KundenLeistungenBetreuer>("KundenLeistungenBetreuers");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.KundenLeistungenBetreuerArten>("KundenLeistungenBetreuerArtens");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.KundenStatus>("KundenStatuses");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.Mitarbeiter>("Mitarbeiters");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.MitarbeiterArten>("MitarbeiterArtens");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.MitarbeiterFortbildungen>("MitarbeiterFortbildungens");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.MitarbeiterFortbildungenArten>("MitarbeiterFortbildungenArtens");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.MitarbeiterInfo>("MitarbeiterInfos");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.MitarbeiterKundenbudget>("MitarbeiterKundenbudgets");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.MitarbeiterKundenbudgetKategorien>("MitarbeiterKundenbudgetKategoriens");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.MitarbeiterStatus>("MitarbeiterStatuses");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.MitarbeiterTaetigkeiten>("MitarbeiterTaetigkeitens");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.MitarbeiterTaetigkeitenArten>("MitarbeiterTaetigkeitenArtens");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.MitarbeiterUrlaub>("MitarbeiterUrlaubs");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.MitarbeiterUrlaubDetail>("MitarbeiterUrlaubDetails");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.MitarbeiterUrlaubKumuliertAnspruch>("MitarbeiterUrlaubKumuliertAnspruches");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.MitarbeiterUrlaubKumuliertDienstzeiten>("MitarbeiterUrlaubKumuliertDienstzeitens");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.MitarbeiterVerlaufDienstzeiten>("MitarbeiterVerlaufDienstzeitens");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.MitarbeiterVerlaufDienstzeitenArten>("MitarbeiterVerlaufDienstzeitenArtens");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.MitarbeiterVerlaufGehalt>("MitarbeiterVerlaufGehalts");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.MitarbeiterVerlaufNormalarbeitszeit>("MitarbeiterVerlaufNormalarbeitszeits");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.Mitteilungen>("Mitteilungens");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.MitteilungenVerteiler>("MitteilungenVerteilers");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.Protokoll>("Protokolls");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.RegelnAbwesenheiten>("RegelnAbwesenheitens");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwBaseAlle>("VwBaseAlles");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwBaseKontakte>("VwBaseKontaktes");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwBaseOrte>("VwBaseOrtes");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwBasePlz>("VwBasePlzs");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwBenutzerBase>("VwBenutzerBases");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwBenutzerRollen>("VwBenutzerRollens");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwRollen>("VwRollens");

          this.OnConfigureOData(oDataBuilder);

          oDataBuilder.EntitySet<ApplicationUser>("ApplicationUsers");
          var usersType = oDataBuilder.StructuralTypes.First(x => x.ClrType == typeof(ApplicationUser));
          usersType.AddCollectionProperty(typeof(ApplicationUser).GetProperty("RoleNames"));
          oDataBuilder.EntitySet<IdentityRole>("ApplicationRoles");

          var model = oDataBuilder.GetEdmModel();

          builder.MapODataServiceRoute("odata/dbSinDarEla", "odata/dbSinDarEla", model);

          builder.MapODataServiceRoute("auth", "auth", model);
      });


      if (string.IsNullOrEmpty(Environment.GetEnvironmentVariable("RADZEN")) && env.IsDevelopment())
      {
        app.UseSpa(spa =>
        {
          spa.Options.SourcePath = "../client";
          spa.UseAngularCliServer(npmScript: "start -- --port 8000 --open");
        });
      }

      OnConfigure(app);
      OnConfigure(app, env);
    }
  }
}

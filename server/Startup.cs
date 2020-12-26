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
          builder.Count().Filter().OrderBy().Expand().Select().MaxTop(null).SetTimeZoneInfo(TimeZoneInfo.Utc);

          if (env.EnvironmentName == "Development")
          {
              builder.MapRoute(name: "default",
                template: "{controller}/{action}/{id?}",
                defaults: new { controller = "Home", action = "Index" }
              );
          }

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
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.BenutzerModule>("BenutzerModules");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.BenutzerProtokoll>("BenutzerProtokolls");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.BenutzerRollen>("BenutzerRollens");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.Debugg>("Debuggs");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.Dokumente>("Dokumentes");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.DokumenteKategorien>("DokumenteKategoriens");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.Ereignisse>("Ereignisses");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.EreignisseArten>("EreignisseArtens");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.EreignisseSonderurlaubArten>("EreignisseSonderurlaubArtens");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.EreignisseTeilnehmer>("EreignisseTeilnehmers");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.EreignisseTeilnehmerStatus>("EreignisseTeilnehmerStatuses");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.Feedback>("Feedbacks");
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
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.Module>("Modules");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.Protokoll>("Protokolls");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.RegelnAbwesenheiten>("RegelnAbwesenheitens");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.TextbausteineHtml>("TextbausteineHtmls");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.Versionskontrolle>("Versionskontrolles");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwAbrechnungBasisReststunden>("VwAbrechnungBasisReststundens");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwAbrechnungKundenReststunden>("VwAbrechnungKundenReststundens");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwAufgaben>("VwAufgabens");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwAufgabenOffen>("VwAufgabenOffens");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwBase>("VwBases");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwBaseBenutzer>("VwBaseBenutzers");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwBaseEreignisse>("VwBaseEreignisses");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwBaseKontakte>("VwBaseKontaktes");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwBaseKunden>("VwBaseKundens");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwBaseMitarbeiter>("VwBaseMitarbeiters");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwBaseStatistik>("VwBaseStatistiks");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwBaseSuchen>("VwBaseSuchens");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwBaseUndKunden>("VwBaseUndKundens");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwBaseVerweise>("VwBaseVerweises");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwBenutzer>("VwBenutzers");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwBenutzerAnu>("VwBenutzerAnus");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwBenutzerAuswahlNeue>("VwBenutzerAuswahlNeues");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwBenutzerModule>("VwBenutzerModules");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwBenutzerSuchen>("VwBenutzerSuchens");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwDashboardTermineGeplant>("VwDashboardTermineGeplants");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwDienstplanEreignisse>("VwDienstplanEreignisses");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwDienstplanKundenLeistungen>("VwDienstplanKundenLeistungens");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwDokumente>("VwDokumentes");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwDokumenteAnzahl>("VwDokumenteAnzahls");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwEreignisse>("VwEreignisses");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwEreignisseAlle>("VwEreignisseAlles");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwEreignisseAntraege>("VwEreignisseAntraeges");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwEreignisseAntraegeUrlaubVerbraucht>("VwEreignisseAntraegeUrlaubVerbrauchts");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwEreignisseArtenDienstplan>("VwEreignisseArtenDienstplans");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwEreignisseArtenManagement>("VwEreignisseArtenManagements");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwEreignisseArtenMitTextAlle>("VwEreignisseArtenMitTextAlles");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwEreignisseArtenModule>("VwEreignisseArtenModules");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwEreignisseGesamt>("VwEreignisseGesamts");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwEreignisseKundenBesuche>("VwEreignisseKundenBesuches");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwEreignisseKundenbesucheHeute>("VwEreignisseKundenbesucheHeutes");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwEreignisseKundenbesucheHeuteOffen>("VwEreignisseKundenbesucheHeuteOffens");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwEreignisseMitTeilnehmer>("VwEreignisseMitTeilnehmers");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwEreignisseModulDashboard>("VwEreignisseModulDashboards");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwEreignisseModulDashboardMobile>("VwEreignisseModulDashboardMobiles");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwEreignisseModulDienstplanListe>("VwEreignisseModulDienstplanListes");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwEreignisseModulDienstplanMobile>("VwEreignisseModulDienstplanMobiles");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwEreignisseModulKunden>("VwEreignisseModulKundens");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwEreignisseModulManagement>("VwEreignisseModulManagements");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwEreignisseModulMitarbeiter>("VwEreignisseModulMitarbeiters");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwEreignisseTeilnehmerListe>("VwEreignisseTeilnehmerListes");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwFeedback>("VwFeedbacks");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwGeburtstage>("VwGeburtstages");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwKunden>("VwKundens");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwKundenAuswahlNeu>("VwKundenAuswahlNeus");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwKundenBase>("VwKundenBases");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwKundenBescheideKontingente>("VwKundenBescheideKontingentes");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwKundenBetreuer>("VwKundenBetreuers");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwKundenEreignisse>("VwKundenEreignisses");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwKundenGeburtstage>("VwKundenGeburtstages");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwKundenHauptbetreuer>("VwKundenHauptbetreuers");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwKundenKontingente>("VwKundenKontingentes");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwKundenLeistungen>("VwKundenLeistungens");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwKundenLeistungenBescheide>("VwKundenLeistungenBescheides");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwKundenLeistungenBetreuer>("VwKundenLeistungenBetreuers");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwKundenLeistungenKontingente>("VwKundenLeistungenKontingentes");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwKundenProBetreuer>("VwKundenProBetreuers");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwKundenSuchen>("VwKundenSuchens");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwKundenTermineErledigt>("VwKundenTermineErledigts");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwKundenTermineGeplant>("VwKundenTermineGeplants");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwKundenTermineZusammenfassung>("VwKundenTermineZusammenfassungs");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwKundenUndBetreuer>("VwKundenUndBetreuers");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwKundenUndBetreuerAuswahl>("VwKundenUndBetreuerAuswahls");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwKundenUndBetreuerUndLeistungenAuswahl>("VwKundenUndBetreuerUndLeistungenAuswahls");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwMitarbeiter>("VwMitarbeiters");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwMitarbeiterArtenMitTextAlle>("VwMitarbeiterArtenMitTextAlles");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwMitarbeiterAuswahlDashboard>("VwMitarbeiterAuswahlDashboards");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwMitarbeiterAuswahlNeu>("VwMitarbeiterAuswahlNeus");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwMitarbeiterAuswahlTermin>("VwMitarbeiterAuswahlTermins");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwMitarbeiterEreignisse>("VwMitarbeiterEreignisses");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwMitarbeiterFilterAuswahl>("VwMitarbeiterFilterAuswahls");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwMitarbeiterFilterListe>("VwMitarbeiterFilterListes");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwMitarbeiterFortbildungenSummenJahr>("VwMitarbeiterFortbildungenSummenJahrs");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwMitarbeiterFortbildungenSummenJahrArten>("VwMitarbeiterFortbildungenSummenJahrArtens");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwMitarbeiterFuerAuswahlMitTextAlle>("VwMitarbeiterFuerAuswahlMitTextAlles");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwMitarbeiterGeburtstage>("VwMitarbeiterGeburtstages");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwMitarbeiterKundenAnzahlAa>("VwMitarbeiterKundenAnzahlAas");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwMitarbeiterKundenAnzahlBb>("VwMitarbeiterKundenAnzahlBbs");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwMitarbeiterKundenLeistungen>("VwMitarbeiterKundenLeistungens");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwMitarbeiterKundenbudgetSummenJahr>("VwMitarbeiterKundenbudgetSummenJahrs");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwMitarbeiterKundenbudgetSummenJahrKategorien>("VwMitarbeiterKundenbudgetSummenJahrKategoriens");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwMitarbeiterMitTextAlle>("VwMitarbeiterMitTextAlles");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwMitarbeiterSonderurlaubEinfach>("VwMitarbeiterSonderurlaubEinfaches");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwMitarbeiterStatusMitTextAlle>("VwMitarbeiterStatusMitTextAlles");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwMitarbeiterSuchen>("VwMitarbeiterSuchens");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwMitarbeiterTaetigkeiten>("VwMitarbeiterTaetigkeitens");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwMitarbeiterTaetigkeitenMitTextAlle>("VwMitarbeiterTaetigkeitenMitTextAlles");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwMitarbeiterTermineErledigt>("VwMitarbeiterTermineErledigts");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwMitarbeiterTermineGeplant>("VwMitarbeiterTermineGeplants");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwMitarbeiterTermineZusammenfassung>("VwMitarbeiterTermineZusammenfassungs");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwMitarbeiterUrlaub>("VwMitarbeiterUrlaubs");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwMitarbeiterVerlaufDienstzeiten>("VwMitarbeiterVerlaufDienstzeitens");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwMitteilungen>("VwMitteilungens");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwMitteilungenOffen>("VwMitteilungenOffens");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwMitteilungenVerteiler>("VwMitteilungenVerteilers");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwModuleAuswahlMitTextAlle>("VwModuleAuswahlMitTextAlles");
          oDataBuilder.EntitySet<SinDarElaMobile.Models.DbSinDarEla.VwProtokollOffen>("VwProtokollOffens");

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

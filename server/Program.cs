using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore;
using Microsoft.Extensions.Hosting;
namespace SinDarElaMobile
{
  public class Program
  {
      public static void Main(string[] args)
      {
        CreateHostBuilder(args).Build().Run();
      }

      public static IHostBuilder CreateHostBuilder(string[] args) =>
        Host.CreateDefaultBuilder(args)
            .ConfigureWebHostDefaults(webBuilder =>
            {
                webBuilder.UseStartup<Startup>();
                webBuilder.UseSetting(WebHostDefaults.DetailedErrorsKey, "true");
            });
  }
}

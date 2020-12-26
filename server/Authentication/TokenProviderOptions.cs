using System;
using System.Text;
using System.Threading.Tasks;
using Microsoft.IdentityModel.Tokens;

namespace SinDarElaMobile.Authentication
{
    public class TokenProviderOptions
    {
        public static string Audience { get; } = "SinDarElaMobileAudience";
        public static string Issuer { get; } = "SinDarElaMobile";
        public static SymmetricSecurityKey Key { get; } = new SymmetricSecurityKey(Encoding.ASCII.GetBytes("SinDarElaMobileSecretSecurityKeySinDarElaMobile"));
        public static TimeSpan Expiration { get; } = TimeSpan.FromMinutes(10500);
        public static SigningCredentials SigningCredentials { get; } = new SigningCredentials(Key, SecurityAlgorithms.HmacSha256);
    }
}

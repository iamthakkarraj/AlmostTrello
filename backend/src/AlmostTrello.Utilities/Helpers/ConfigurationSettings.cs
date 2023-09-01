using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AlmostTrello.Utilities.Helpers
{
    public class ConfigurationSettings
    {
        public static string AlmostTrelloDbConnectionString { get; set; }
        public static Jwt Jwt { get; set; }
    }

    public class Jwt
    {
        public string Key { get; set; }
        public string Issuer { get; set; }
        public string Audience { get; set; }
    }

}

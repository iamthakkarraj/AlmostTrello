using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AlmostTrello.Utilities.Constants
{
    public static class Constants
    {

        #region ErrorConstants
        public const string TodoIdIsNotValid = "todoId not found or is not valid";
        public const string invalidCredentials = "EmailId or password is incorrect";
        #endregion

        public static readonly string[] SkipUrls = { 
            "/swagger/index.html", 
            "/api/Users/authenticate",
            "/api/Users/register"
        };

    }
}

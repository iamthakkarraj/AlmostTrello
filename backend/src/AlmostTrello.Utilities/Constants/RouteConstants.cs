using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AlmostTrello.Utilities.Constants
{
    public class RouteConstants
    {
        public static class TodoControllerRoutes
        {
            public const string GetTodoById = "{todoId}";
            public const string DeleteTodoById = "{todoId}";
        }

        public static class UserControllerRoutes
        {
            public const string Authenticate = "authenticate";
            public const string Register = "register";
        }
    }
}

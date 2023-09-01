using AlmostTrello.BusinessLogic.Implementations;
using AlmostTrello.BusinessLogic.Interfaces;
using Microsoft.Extensions.DependencyInjection;

namespace AlmostTrello.BusinessLogic.Ioc
{
    public class IocConfig
    {
        public static void ConfigureServices(ref IServiceCollection services)
        {
            DataAccess.Ioc.IocConfig.ConfigureServices(ref services);
            services.AddTransient<ITodoService, TodoService>();
            services.AddTransient<IUserService,  UserService>();
        }
    }
}
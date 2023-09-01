using AlmostTrello.DataAccess.Implementations;
using AlmostTrello.DataAccess.Interfaces;
using Microsoft.Extensions.DependencyInjection;

namespace AlmostTrello.DataAccess.Ioc
{
    public class IocConfig
    {
        public static void ConfigureServices(ref IServiceCollection services)
        {
            Infrastructure.Ioc.IocConfig.ConfigureServices(ref services);
            services.AddTransient<ITodoRepository, TodoRepository>();
            services.AddTransient<IUserRepository, UserRepository>();
        }
    }
}
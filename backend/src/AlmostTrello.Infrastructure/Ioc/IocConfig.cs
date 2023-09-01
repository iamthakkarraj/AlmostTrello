using AlmostTrello.Infrastructure.Implementations;
using Microsoft.Extensions.DependencyInjection;
using AlmostTrello.Infrastructure.Interfaces;

namespace AlmostTrello.Infrastructure.Ioc
{
    public class IocConfig
    {
        public static void ConfigureServices(ref IServiceCollection services)
        {
            services.AddScoped<IUow, Uow>();
        }
    }
}
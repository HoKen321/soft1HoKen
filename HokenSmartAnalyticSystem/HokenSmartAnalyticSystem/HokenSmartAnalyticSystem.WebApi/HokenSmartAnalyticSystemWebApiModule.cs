using System.Reflection;
using Abp.Application.Services;
using Abp.Configuration.Startup;
using Abp.Modules;
using Abp.WebApi;

namespace HokenSmartAnalyticSystem
{
    [DependsOn(typeof(AbpWebApiModule), typeof(HokenSmartAnalyticSystemApplicationModule))]
    public class HokenSmartAnalyticSystemWebApiModule : AbpModule
    {
        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(Assembly.GetExecutingAssembly());

            Configuration.Modules.AbpWebApi().DynamicApiControllerBuilder
                .ForAll<IApplicationService>(typeof(HokenSmartAnalyticSystemApplicationModule).Assembly, "app")
                .Build();
        }
    }
}

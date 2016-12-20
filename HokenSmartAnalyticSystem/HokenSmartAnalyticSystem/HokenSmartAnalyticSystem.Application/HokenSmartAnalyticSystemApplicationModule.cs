using System.Reflection;
using Abp.Modules;

namespace HokenSmartAnalyticSystem
{
    [DependsOn(typeof(HokenSmartAnalyticSystemCoreModule))]
    public class HokenSmartAnalyticSystemApplicationModule : AbpModule
    {
        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(Assembly.GetExecutingAssembly());
        }
    }
}

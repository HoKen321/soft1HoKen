using System.Reflection;
using Abp.Modules;

namespace HokenSmartAnalyticSystem
{
    public class HokenSmartAnalyticSystemCoreModule : AbpModule
    {
        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(Assembly.GetExecutingAssembly());
        }
    }
}

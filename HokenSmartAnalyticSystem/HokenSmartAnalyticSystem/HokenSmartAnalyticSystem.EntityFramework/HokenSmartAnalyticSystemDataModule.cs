using System.Data.Entity;
using System.Reflection;
using Abp.EntityFramework;
using Abp.Modules;
using HokenSmartAnalyticSystem.EntityFramework;

namespace HokenSmartAnalyticSystem
{
    [DependsOn(typeof(AbpEntityFrameworkModule), typeof(HokenSmartAnalyticSystemCoreModule))]
    public class HokenSmartAnalyticSystemDataModule : AbpModule
    {
        public override void PreInitialize()
        {
            Configuration.DefaultNameOrConnectionString = "Default";
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(Assembly.GetExecutingAssembly());
            Database.SetInitializer<HokenSmartAnalyticSystemDbContext>(null);
        }
    }
}

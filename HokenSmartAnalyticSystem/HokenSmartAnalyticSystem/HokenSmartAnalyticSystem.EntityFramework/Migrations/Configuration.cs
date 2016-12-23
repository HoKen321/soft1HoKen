using System.Data.Entity.Migrations;

namespace HokenSmartAnalyticSystem.Migrations
{
    internal sealed class Configuration : DbMigrationsConfiguration<HokenSmartAnalyticSystem.EntityFramework.HokenSmartAnalyticSystemDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
            ContextKey = "HokenSmartAnalyticSystem";
        }

        protected override void Seed(HokenSmartAnalyticSystem.EntityFramework.HokenSmartAnalyticSystemDbContext context)
        {
            // This method will be called every time after migrating to the latest version.
            // You can add any seed data here...
        }
    }
}

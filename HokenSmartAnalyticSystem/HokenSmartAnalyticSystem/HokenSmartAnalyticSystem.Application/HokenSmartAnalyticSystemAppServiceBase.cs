using Abp.Application.Services;

namespace HokenSmartAnalyticSystem
{
    /// <summary>
    /// Derive your application services from this class.
    /// </summary>
    public abstract class HokenSmartAnalyticSystemAppServiceBase : ApplicationService
    {
        protected HokenSmartAnalyticSystemAppServiceBase()
        {
            LocalizationSourceName = HokenSmartAnalyticSystemConsts.LocalizationSourceName;
        }
    }
}
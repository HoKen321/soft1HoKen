using Abp.Web.Mvc.Controllers;

namespace HokenSmartAnalyticSystem.Web.Controllers
{
    /// <summary>
    /// Derive all Controllers from this class.
    /// </summary>
    public abstract class HokenSmartAnalyticSystemControllerBase : AbpController
    {
        protected HokenSmartAnalyticSystemControllerBase()
        {
            LocalizationSourceName = HokenSmartAnalyticSystemConsts.LocalizationSourceName;
        }
    }
}
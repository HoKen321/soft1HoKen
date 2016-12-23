using Abp.Web.Mvc.Views;

namespace HokenSmartAnalyticSystem.Web.Views
{
    public abstract class HokenSmartAnalyticSystemWebViewPageBase : HokenSmartAnalyticSystemWebViewPageBase<dynamic>
    {

    }

    public abstract class HokenSmartAnalyticSystemWebViewPageBase<TModel> : AbpWebViewPage<TModel>
    {
        protected HokenSmartAnalyticSystemWebViewPageBase()
        {
            LocalizationSourceName = HokenSmartAnalyticSystemConsts.LocalizationSourceName;
        }
    }
}
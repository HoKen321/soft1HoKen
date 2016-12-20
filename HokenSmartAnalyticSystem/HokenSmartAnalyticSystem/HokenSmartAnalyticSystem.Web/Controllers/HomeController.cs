using System.Web.Mvc;
using System.Collections.Generic;
using System;

namespace HokenSmartAnalyticSystem.Web.Controllers
{
    public class HomeController : HokenSmartAnalyticSystemControllerBase
    {
        private static Random rand = new Random();
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult GetLineData()
        {
            Dictionary<string, List<double>> dic = new Dictionary<string, List<double>>();
            string[] columns = { "data1", "data2" };
            foreach(string column in columns)
            {
                List<double> data = new List<double>();
                for (int i = 0; i < 6; i++)
                {
                    double d = 200 * rand.NextDouble();
                    data.Add(d);
                }
                dic.Add(column, data);
            }
            //List<double> data = new List<double>();
            //for (int i = 0; i < 6; i++)
            //{
            //    double d = 200 * rand.NextDouble();
            //    data.Add(d);
            //}
            return Json(dic, JsonRequestBehavior.AllowGet);
        }
    }
}
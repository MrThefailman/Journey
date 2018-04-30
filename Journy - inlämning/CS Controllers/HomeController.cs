using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;


namespace Journy
{
    public class HomeController : Controller
    {
        readonly log4net.ILog _log = log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);
        // GET: Home
        public ActionResult Index()
        {
            try
            {
                object m = null;
                string s = m.ToString();
            }
            catch (Exception ex)
            {
                _log.Error("An error has accured", ex);
            }
            return View();
        }
    }
}
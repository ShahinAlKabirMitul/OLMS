using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using OLMS.BackEnd.Model;
using OLMS.BackEnd.RequestModel;
using OLMS.BackEnd.Service;
using OLMS.BackEnd.ViewModel;

namespace OLMS.BackEnd.API.Controllers
{
    public class BaseQueryController<T,TR,TV>  : ApiController where T:Entity where TR:BaseRequestModel<T> where TV:BaseViewModel<T>
    {
        private readonly BaseService<T, TR, TV> _studentService;



        public BaseQueryController()
        {
            _studentService = new BaseService<T, TR, TV>();
        }
        [HttpPost]
        [Route("Search")]
        [ActionName("Search")]
        public IHttpActionResult Search(TR request)
        {
            // StudentService service = new StudentService();
            var students = _studentService.Search(request);
            return this.Ok(students);
        }

        [HttpPost]
        [Route("Get")]
        [ActionName("Get")]
        public TV Get(string id)
        {
            var data = _studentService.Detail(id);
            return data;
        }
    }
}

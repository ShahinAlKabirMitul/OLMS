using System.Web.Http;
using OLMS.BackEnd.Model;
using OLMS.BackEnd.RequestModel;
using OLMS.BackEnd.Service;
using OLMS.BackEnd.ViewModel;

namespace OLMS.BackEnd.API.Controllers
{
    public class BaseController<T,TR,TV> :ApiController where T:Entity where TR:BaseRequestModel<T> where TV:BaseViewModel<T>
    {
        private readonly BaseService<T, TR, TV> service;
        public BaseController()
        {
            service=new BaseService<T, TR, TV>();
        }
        [HttpPost]
        [Route("Add")]
        [ActionName("Add")]
        public IHttpActionResult Post(T model)
        {
            if (!ModelState.IsValid)
            {
                return this.BadRequest(ModelState);
            }
            bool add = service.Add(model);
            return this.Ok(add);
        }
    }
}
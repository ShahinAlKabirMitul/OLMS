using OLMS.BackEnd.Model;
using OLMS.BackEnd.RequestModel;
using OLMS.BackEnd.Service;
using OLMS.BackEnd.ViewModel;
using System.Web.Http;

namespace OLMS.BackEnd.API.Controllers
{
    public class BaseQueryController<T, TR, TV> : ApiController where T : Entity where TR : BaseRequestModel<T> where TV : BaseViewModel<T>
    {
        private readonly BaseService<T, TR, TV> baseService;
        public BaseQueryController()
        {
            baseService = new BaseService<T, TR, TV>();
        }
      
        [HttpPost]
        [Route("Search")]
        [ActionName("Search")]
        public IHttpActionResult Search(TR request)
        {
            // StudentService service = new StudentService();
            var students = baseService.Search(request);
            return this.Ok(students);
        }


        [HttpPost]
        [Route("Get")]
        [ActionName("Get")]
        public TV Get(string id)
        {
            var data = baseService.Detail(id);
            return data;
        }
    }
}

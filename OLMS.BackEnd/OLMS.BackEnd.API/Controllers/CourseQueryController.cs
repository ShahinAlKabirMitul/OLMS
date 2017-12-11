using System.Web.Http;
using OLMS.BackEnd.Model;
using OLMS.BackEnd.RequestModel;
using OLMS.BackEnd.Service;
using OLMS.BackEnd.ViewModel;

namespace OLMS.BackEnd.API.Controllers
{
    [AllowAnonymous]
    [RoutePrefix("api/CourseQuery")]
    public class CourseQueryController : BaseQueryController<Course, CourseRequestModel, CourseViewModel>
    {
        private readonly BaseService<Course, CourseRequestModel, CourseViewModel> _courseService;

        public CourseQueryController()
        {
            _courseService=new BaseService<Course, CourseRequestModel, CourseViewModel>();
        }
    }
    //[RoutePrefix("api/CourseQuery")]
    //public class CourseQueryController : ApiController
    //{
    //    private readonly BaseService<Course, CourseRequestModel, CourseViewModel> _courseService;

    //    public CourseQueryController()
    //    {
    //        _courseService=new BaseService<Course, CourseRequestModel, CourseViewModel>();
    //    }
    //    [AllowAnonymous]
    //    [HttpPost]
    //    [Route("Search")]
    //    [ActionName("Search")]
    //    public IHttpActionResult Search(CourseRequestModel request)
    //    {
    //        // StudentService service = new StudentService();
    //        var students = _courseService.Search(request);
    //        return this.Ok(students);
    //    }

    //}
}

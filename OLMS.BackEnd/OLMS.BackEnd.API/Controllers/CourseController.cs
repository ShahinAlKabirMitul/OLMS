using System.Web.Http;
using OLMS.BackEnd.Model;
using OLMS.BackEnd.RequestModel;
using OLMS.BackEnd.ViewModel;

namespace OLMS.BackEnd.API.Controllers
{
    [RoutePrefix("api/Course")]
    public class CourseController : BaseController<Course, CourseRequestModel, CourseViewModel>
    {
    }
}

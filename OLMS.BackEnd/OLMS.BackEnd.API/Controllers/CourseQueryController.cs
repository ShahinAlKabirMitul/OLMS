using System.Web.Http;
using OLMS.BackEnd.Model;
using OLMS.BackEnd.RequestModel;
using OLMS.BackEnd.ViewModel;

namespace OLMS.BackEnd.API.Controllers
{
    [RoutePrefix("api/CourseQuery")]
    public class CourseQueryController : BaseQueryController<Course, CourseRequestModel, CourseViewModel>
    {

    }
}

using OLMS.BackEnd.Model;
using OLMS.BackEnd.RequestModel;
using OLMS.BackEnd.ViewModel;
using System.Web.Http;

namespace OLMS.BackEnd.API.Controllers
{
    [RoutePrefix("api/Teacher")]
    public class TeacherController : BaseController<Teacher, TeacherRequestModel, TeacherViewModel>
    {

    }
}


using System.Web.Http;
using OLMS.BackEnd.Model;
using OLMS.BackEnd.RequestModel;
using OLMS.BackEnd.Service;
using OLMS.BackEnd.ViewModel;

namespace OLMS.BackEnd.API.Controllers
{
    [RoutePrefix("api/TeacherQuery")]
    public class TeacherQueryController : BaseQueryController<Teacher,TeacherRequestModel,TeacherViewModel>
    {
        
    }
}

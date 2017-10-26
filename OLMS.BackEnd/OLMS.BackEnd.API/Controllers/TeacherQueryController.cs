using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using OLMS.BackEnd.RequestModel;
using OLMS.BackEnd.Service;

namespace OLMS.BackEnd.API.Controllers
{
    public class TeacherQueryController : ApiController
    {
        private TeacherService TeacherService;

        public TeacherQueryController()
        {
            TeacherService = new TeacherService();
        }
        public IHttpActionResult Post(TeacherRequestModel request)
        {
            TeacherService service = new TeacherService();
            var students = service.Search(request);
            return this.Ok(students);
        }
    }
}

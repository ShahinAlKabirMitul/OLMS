using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using OLMS.BackEnd.Model;
using OLMS.BackEnd.Service;

namespace OLMS.BackEnd.API.Controllers
{
    public class TeacherController : ApiController
    {
        private TeacherService teacherService;

        public TeacherController()
        {
            teacherService = new TeacherService();
        }

        public IHttpActionResult Post(Teacher teacher)
        {
            bool add = teacherService.Add(teacher);
            return this.Ok(add);
        }
    }
}

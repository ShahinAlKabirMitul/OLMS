using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using OLMS.BackEnd.RequestModel;
using OLMS.BackEnd.Service;
using OLMS.BackEnd.ViewModel;

namespace OLMS.BackEnd.API.Controllers
{
    public class TeacherQueryController : ApiController
    {
        private readonly TeacherService teacherService;

        public TeacherQueryController()
        {
            teacherService = new TeacherService();
        }
        public IHttpActionResult Post(TeacherRequestModel request)
        {
            var students = teacherService.Search(request);
            return this.Ok(students);
        }

        public TeacherViewModel Get(string id)
        {
            var data = teacherService.Detail(id);
            return data;
        }
    }
}

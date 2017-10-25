using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using OLMS.BackEnd.Model;
using OLMS.BackEnd.RequestModel;
using OLMS.BackEnd.Service;

namespace OLMS.BackEnd.API.Controllers
{
    public class StudentQueryController : ApiController
    {
        private StudentService studentService;

        public StudentQueryController()
        {
            studentService=new StudentService();
        }
        public IHttpActionResult Post(StudentRequestModel request)
        {
            StudentService service = new StudentService();
            var students = service.Search(request);
            return this.Ok(students);
        }
    }
}

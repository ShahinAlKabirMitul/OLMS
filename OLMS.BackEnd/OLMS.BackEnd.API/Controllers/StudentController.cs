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
    public class StudentController : ApiController
    {
        private StudentService studentService;

        public StudentController()
        {
            studentService = new StudentService();
        }

        public IHttpActionResult Post(Student student)
        {
            bool add = studentService.Add(student);
            return this.Ok(add);
        }
    }
}

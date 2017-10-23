using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
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
    }
}

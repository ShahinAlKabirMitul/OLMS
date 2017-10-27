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
    public class StudentQueryController : ApiController
    {
        private StudentService _studentService;

        public StudentQueryController()
        {
            _studentService = new StudentService();
        }
        public IHttpActionResult Post(StudentRequestModel request)
        {
           // StudentService service = new StudentService();
            var students = _studentService.Search(request);
            return this.Ok(students);
        }

        public StudentDetailViewModel Get(string id)
        {
            var data = _studentService.Detail(id);
            return data;
        }
    }
}

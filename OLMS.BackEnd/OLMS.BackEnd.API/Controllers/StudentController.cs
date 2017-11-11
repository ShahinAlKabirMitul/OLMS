using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.WebPages.Scope;
using OLMS.BackEnd.Model;
using OLMS.BackEnd.Repository;
using OLMS.BackEnd.RequestModel;
using OLMS.BackEnd.Service;
using OLMS.BackEnd.ViewModel;

namespace OLMS.BackEnd.API.Controllers
{
    [RoutePrefix("api/Student")]
    public class StudentController : BaseController<Student,StudentRequestModel,StudentViewModel>
    {
       
    }
}

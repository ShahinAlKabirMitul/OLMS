using System;
using System.Collections.Generic;
using System.Data.Entity.Core;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using OLMS.BackEnd.Model;
using OLMS.BackEnd.Repository;
using OLMS.BackEnd.RequestModel;
using OLMS.BackEnd.ViewModel;

namespace OLMS.BackEnd.Service
{
    public class StudentService:BaseService<Student,StudentRequestModel,StudentViewModel>
    {
        private IBaseRepository<Student> repository;
        public StudentService()
        {
            repository=new BaseRepository<Student>();
        }

       
        

    }
}

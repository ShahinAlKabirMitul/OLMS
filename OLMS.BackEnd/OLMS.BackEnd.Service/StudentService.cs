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
    public class StudentService:BaseService<Student>
    {
        private IBaseRepository<Student> repository;
        public StudentService()
        {
            repository=new BaseRepository<Student>();
        }

       
        public List<StudentGridViewModel> Search(StudentRequestModel request)
        {
            var students = base.SearchQueryable(request);
            var list = students.ToList().ConvertAll(
                student => new StudentGridViewModel(student)
                );
        
            return list;
        }

        public StudentDetailViewModel Detail(string id)
        {
            var student = repository.GetDetail(id);
            if (student==null)
            {
                throw new ObjectNotFoundException();
            }
            return new StudentDetailViewModel(student);

        }
    }
}

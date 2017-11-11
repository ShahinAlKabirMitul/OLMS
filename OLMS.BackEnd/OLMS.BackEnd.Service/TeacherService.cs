using System;
using System.Collections.Generic;
using System.Data.Entity.Core;
using System.Linq;
using System.Linq.Expressions;

using OLMS.BackEnd.Model;
using OLMS.BackEnd.Repository;
using OLMS.BackEnd.RequestModel;
using OLMS.BackEnd.ViewModel;

namespace OLMS.BackEnd.Service
{
   public class TeacherService:BaseService<Teacher>
   {
       private readonly IBaseRepository<Teacher> _repository;
        public TeacherService()
        {
            _repository=new BaseRepository<Teacher>();
        }
        

       public List<TeacherGridViewModel> Search(TeacherRequestModel request)
       {
           var teachers = SearchQueryable(request);
           List<TeacherGridViewModel> list = teachers.ToList().ConvertAll(
               teacher => new TeacherGridViewModel(teacher)
           );

           return list;
       }

       public TeacherDetailViewModel Detail(string id)
       {
           var teacher = _repository.GetDetail(id);
           if (teacher == null)
           {
               throw new ObjectNotFoundException();
           }
           return new TeacherDetailViewModel(teacher);

       }
    }
}

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
   public class TeacherService
   {
       private readonly IBaseRepository<Teacher> _repository;
        public TeacherService()
        {
            _repository=new BaseRepository<Teacher>();
        }
        public bool Add(Teacher teacher)
        {
            teacher.Id = Guid.NewGuid().ToString();
            teacher.CreatedBy = "Admin";
            teacher.Created = System.DateTime.Now;
            teacher.Modified = System.DateTime.Now;
            teacher.ModifiedBy = "Admin";
            return _repository.Add(teacher);
        }

       public List<TeacherGridViewModel> Search(TeacherRequestModel request)
       {
           IQueryable<Teacher> teachers = this._repository.Get();

           Expression<Func<Teacher, bool>> expression = request.GetExpression();
           teachers= teachers.Where(expression);
           teachers = teachers.OrderBy(x => x.Modified);

           if (!string.IsNullOrWhiteSpace(request.OrderBy))
           {
               if (request.OrderBy.ToLower() == "name")
               {
                   teachers = request.IsAscending ? teachers.OrderBy(x => x.Name) : teachers.OrderByDescending(x => x.Name);
               }
           }

          // teachers = teachers.Skip((request.Page - 1) * request.PerPageCount).Take(request.PerPageCount);
           teachers = request.SkipAndTake(teachers);
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

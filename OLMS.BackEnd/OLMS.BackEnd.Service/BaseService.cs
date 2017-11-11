using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using OLMS.BackEnd.Model;
using OLMS.BackEnd.Repository;
using OLMS.BackEnd.RequestModel;

namespace OLMS.BackEnd.Service
{
    public class BaseService<T> where T:Entity    
    {
        BaseRepository<T> repository;

        public BaseService()
        {
            repository=new BaseRepository<T>();
        }
        public  IQueryable<T> SearchQueryable(BaseRequestModel<T> request)
        {
            IQueryable<T> students = repository.Get();
            var expression = request.GetExpression();
            students = students.Where(expression);
            
            students = request.OrderByFunc()(students);
            students = request.SkipAndTake(students);
            return students;
        }

        public bool Add(T t)
        {
            t.Id = Guid.NewGuid().ToString();
            t.CreatedBy = "Admin";
            t.Created = System.DateTime.Now;
            t.Modified = System.DateTime.Now;
            t.ModifiedBy = "Admin";
            return repository.Add(t);
        }
    }

   
}

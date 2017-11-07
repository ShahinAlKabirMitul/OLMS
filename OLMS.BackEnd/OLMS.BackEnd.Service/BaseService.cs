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
        public  IQueryable<T> SearchQueryable(BaseRequestModel<T> request)
        {
            var repository = new BaseRepository<T>();
            IQueryable<T> students = repository.Get();
            var expression = request.GetExpression();
            students = students.Where(expression);
            students = request.OrderByFunc()(students);
            students = request.SkipAndTake(students);
            return students;
        }
    }

   
}

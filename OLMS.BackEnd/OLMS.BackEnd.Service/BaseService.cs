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
    public class BaseService<T> where T : Entity
    {
        public IQueryable<T> SearchQueryable(BaseRequestModel<T> request)
        {
            var repository = new GenericRepository<T>();
            IQueryable<T> queryable = repository.Get();
            Expression<Func<T, bool>> expression = request.GetExpression();
            queryable = queryable.Where(expression);
            queryable = request.OrderByFunc()(queryable);
            queryable = request.SkipAndTake(queryable);
            return queryable;
        }
    }
}

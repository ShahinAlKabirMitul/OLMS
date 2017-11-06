using System.Linq;
using OLMS.BackEnd.Model;

namespace OLMS.BackEnd.Repository
{
    public interface IGenericRepository<T> where T : Entity
    {
        bool Add(T entity);
        bool Edit(T entity);
        bool Delete(string id);
        IQueryable<T> Get();
        T GetDetail(string id);
    }
}
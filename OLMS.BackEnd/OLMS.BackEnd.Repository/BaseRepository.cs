using System.Data.Entity;
using System.Linq;
using OLMS.BackEnd.Model;

namespace OLMS.BackEnd.Repository
{
    public class BaseRepository<T> where T:Entity
    {
        protected readonly BusinessDbContext db;

        public BaseRepository()
        {
            db=new BusinessDbContext();
        }

        public bool Add(T entity)
        {
            //DbSet<T> dbSet = this.db.Set<T>();
            //T add = dbSet.Add(entity);
            db.Set<T>().Add(entity);
            int i = db.SaveChanges();
            return i > 0;
        }

        public bool Edit(T entity)
        {
            db.Entry(entity).State = EntityState.Modified;
            int i = db.SaveChanges();
            return i > 0;
        }

        public bool Delete(string id)
        {
            var entity = GetDetail(id);
            if (entity!=null)
            {
                db.Set<T>().Remove(entity);
                int i = db.SaveChanges();
                return i > 0;
            }
            return true;
        }

        public IQueryable<T> Get()
        {
            return db.Set<T>().AsQueryable();
        }

        public T GetDetail(string id)
        {
            return this.db.Set<T>().Find(id);
           
        }
    }
}
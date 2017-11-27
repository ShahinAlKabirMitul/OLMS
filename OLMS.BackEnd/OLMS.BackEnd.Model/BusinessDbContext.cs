using System.Data.Entity;

namespace OLMS.BackEnd.Model
{
    public class BusinessDbContext : DbContext
    {
        public BusinessDbContext() : base("DefaultBusinessConnection")
        {
            this.Configuration.LazyLoadingEnabled = false;
            this.Configuration.ProxyCreationEnabled = false;
        }

        public DbSet<Student> Students { set; get; }
        public DbSet<Teacher> Teachers { set; get; }
        public DbSet<Course> Courses { set; get; }
    }
}

using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OLMS.BackEnd.Model
{
   public class BusinessDbContext:DbContext
    {
        public BusinessDbContext():base("DefaultBusinessConnection")
        {
            
        }

        public DbSet<Student> Students { set; get; }
        public DbSet<Teacher>  Teachers { set; get; }
    }
}

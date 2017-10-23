using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OLMS.BackEnd.Model.Students;

namespace OLMS.BackEnd.Model
{
   public class BusinessDbContext:DbContext
    {
        public BusinessDbContext():base("DefaultBusinessConnection")
        {
            
        }

        private DbSet<Student> Students { set; get; }
    }
}

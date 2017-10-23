using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OLMS.BackEnd.Model;
using OLMS.BackEnd.Model.Students;

namespace OLMS.BackEnd.Repository
{
    public class StudentRepository
    {
        private readonly BusinessDbContext db;

        public StudentRepository()
        {
            db=new BusinessDbContext();
        }
        public bool Add(Student student)
        {
           // return true;
            student.Id = Guid.NewGuid().ToString();
            student.Created = System.DateTime.Now;
            student.CreatedBy = "Admin";
            student.ModifiedBy = "Admin";
            student.Modified = System.DateTime.Now;
            this.db.Students.Add(student);
            int saveChanges = this.db.SaveChanges();
            return saveChanges > 0;
        }
        public IQueryable<Student> Get()
        {
            return this.db.Students.AsQueryable();
        }

    }
}

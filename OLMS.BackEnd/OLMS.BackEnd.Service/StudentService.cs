using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OLMS.BackEnd.Model.Students;
using OLMS.BackEnd.Repository;

namespace OLMS.BackEnd.Service
{
    public class StudentService
    {
        private StudentRepository repositoty;
        public StudentService()
        {
            repositoty=new StudentRepository();
        }

        public bool add(Student student)
        {
            return repositoty.Add(student);
        }
    }
}

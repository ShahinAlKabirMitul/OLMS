using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OLMS.BackEnd.Model;
using OLMS.BackEnd.Repository;

namespace OLMS.BackEnd.Service
{
   public class TeacherService
   {
       private readonly BaseRepository<Teacher> _repository;
        public TeacherService()
        {
            _repository=new BaseRepository<Teacher>();
        }
        public bool Add(Teacher teacher)
        {
           return _repository.Add(teacher);
        }
    }
}

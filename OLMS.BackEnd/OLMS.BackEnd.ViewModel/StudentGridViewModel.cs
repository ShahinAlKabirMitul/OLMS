using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OLMS.BackEnd.Model;

namespace OLMS.BackEnd.ViewModel
{
    public class StudentGridViewModel:BaseViewModel
    {
        public StudentGridViewModel(Student student) : base(student)
        {
            Name = student.Name;
            Phone = student.Phone;
        }

        public string Name { get; set; }

        public string Phone { get; set; }
    }
}

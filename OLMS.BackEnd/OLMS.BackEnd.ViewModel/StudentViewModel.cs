using OLMS.BackEnd.Model;

namespace OLMS.BackEnd.ViewModel
{
    public class StudentViewModel:BaseViewModel<Student>
    {
        public string Name { get; set; }

        public string Phone { get; set; }

        public string Address { get; set; }

        public StudentViewModel(Student student) : base(student)
        {
            Name = student.Name;
            Phone = student.Phone;
            Address = student.Address;
        }
    }
}
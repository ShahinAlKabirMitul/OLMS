using OLMS.BackEnd.Model;

namespace OLMS.BackEnd.ViewModel
{
    public class StudentDetailViewModel : BaseViewModel<Student>
    {
        public StudentDetailViewModel(Student student):base(student)
        {
            Name = student.Name;
            Phone = student.Phone;
            Address = student.Address;
        }
        public string Name { get; set; }

        public string Phone { get; set; }

        public string Address { get; set; }
    }
}
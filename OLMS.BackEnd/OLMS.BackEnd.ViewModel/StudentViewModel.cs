using OLMS.BackEnd.Model;

namespace OLMS.BackEnd.ViewModel
{
    public class StudentViewModel:BaseViewModel<Student>
    {
        public StudentViewModel(Entity student) : base(student)
        {
        }
    }
}
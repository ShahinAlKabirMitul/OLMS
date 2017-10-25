using OLMS.BackEnd.Model;

namespace OLMS.BackEnd.ViewModel
{
    public class TeacherGridViewModel:BaseViewModel
    {
        public string Name { get; set; }

        public TeacherGridViewModel(Teacher teacher) : base(teacher)
        {
            this.Name = teacher.Name;
        }
    }
}
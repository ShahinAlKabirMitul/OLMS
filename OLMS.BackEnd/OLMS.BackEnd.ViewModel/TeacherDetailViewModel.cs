using OLMS.BackEnd.Model;

namespace OLMS.BackEnd.ViewModel
{
    public class TeacherDetailViewModel:BaseViewModel
    {
        public string Name { get; set; }
        public TeacherDetailViewModel(Teacher teacher) : base(teacher)
        {
            this.Name = teacher.Name;
        }
    }
}
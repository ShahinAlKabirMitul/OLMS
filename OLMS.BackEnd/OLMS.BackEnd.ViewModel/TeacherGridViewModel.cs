using OLMS.BackEnd.Model;

namespace OLMS.BackEnd.ViewModel
{
    public class TeacherGridViewModel:BaseViewModel<Teacher>
    {
        public string Name { get; set; }
        public string PhoneNo { get; set; }

        public TeacherGridViewModel(Teacher entity) : base(entity)
        {
            this.Name = entity.Name;
            this.PhoneNo = entity.PhoneNo;
        }
    }
}
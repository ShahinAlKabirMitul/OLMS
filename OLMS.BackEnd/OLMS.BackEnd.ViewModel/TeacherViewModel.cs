using OLMS.BackEnd.Model;

namespace OLMS.BackEnd.ViewModel
{
    public class TeacherViewModel : BaseViewModel<Teacher>
    {
        public string Name { get; set; }
        // public string PhoneNo { get; set; }
        public TeacherViewModel(Teacher entity) : base(entity)
        {
            Name = entity.Name;
            //  PhoneNo = entity.PhoneNo;
        }

    }
}
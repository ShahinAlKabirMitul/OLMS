using OLMS.BackEnd.Model;

namespace OLMS.BackEnd.ViewModel
{
    public class TeacherViewModel : BaseViewModel<Teacher>
    {
        public string Name { get; set; }
        public string Designation { get; set; }
        public string Description { get; set; }
        public TeacherViewModel(Teacher entity) : base(entity)
        {
            Name = entity.Name;
            Description = entity.Description;
            Designation = entity.Designation;
            //  PhoneNo = entity.PhoneNo;
        }

    }
}
using OLMS.BackEnd.Model;

namespace OLMS.BackEnd.ViewModel
{
    public class TeacherViewModel : BaseViewModel<Teacher>
    {
        public string Name { get; set; }
        public string Designation { get; set; }
        public string Description { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }
        public TeacherViewModel(Teacher entity) : base(entity)
        {
            Name = entity.Name;
            Description = entity.Description;
            Designation = entity.Designation;
            Email = entity.Email;
            Phone = entity.Phone;
            Address = entity.Phone;
            //  PhoneNo = entity.PhoneNo;
        }

    }
}
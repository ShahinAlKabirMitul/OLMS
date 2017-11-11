using OLMS.BackEnd.Model;

namespace OLMS.BackEnd.ViewModel
{
    public class TeacherDetailViewModel:BaseViewModel<Teacher>
    {
        public string Name { get; set; }
        public string PhoneNo { get; set; }
        public TeacherDetailViewModel(Teacher entity) : base(entity)
        {
            this.Name = entity.Name;
            this.PhoneNo = entity.PhoneNo;
        }
    }
}
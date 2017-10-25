using System;
using OLMS.BackEnd.Model;

namespace OLMS.BackEnd.ViewModel
{
    public class BaseViewModel
    {
        public BaseViewModel(Entity teacher)
        {

            Id = teacher.Id;
            Created = teacher.Created;
            CreatedBy = teacher.CreatedBy;
            ModifiedBy = teacher.ModifiedBy;
            Modified = teacher.Modified;
        }
        public string Id { get; set; }
        public DateTime Created { get; set; }    
        public string CreatedBy { get; set; }
        public DateTime Modified { get; set; }
        public string ModifiedBy { get; set; }
    }
}
using System;
using OLMS.BackEnd.Model;

namespace OLMS.BackEnd.ViewModel
{
    public class BaseViewModel<T> where T:Entity
    {
        public BaseViewModel(Entity entity)
        {

            Id = entity.Id;
            Created = entity.Created;
            CreatedBy = entity.CreatedBy;
            ModifiedBy = entity.ModifiedBy;
            Modified = entity.Modified;
        }
        public string Id { get; set; }
        public DateTime Created { get; set; }    
        public string CreatedBy { get; set; }
        public DateTime Modified { get; set; }
        public string ModifiedBy { get; set; }
    }
}
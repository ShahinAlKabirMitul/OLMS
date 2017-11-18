using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OLMS.BackEnd.Model
{
    public class Teacher : Entity
    {
        [Index]
        [Required]
        [MaxLength(50)]
        public string Name { get; set; }



        public virtual ICollection<Course> Courses { get; set; }
    }
}

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

        [Index]
        [Required]
        [MaxLength(200)]
        public string Designation { get; set; }


        [Required]
        [MaxLength(550)]
        public string Description { get; set; }


        public virtual ICollection<Course> Courses { get; set; }
    }
}

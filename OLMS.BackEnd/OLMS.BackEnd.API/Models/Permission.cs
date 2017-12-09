using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using OLMS.BackEnd.Model;

namespace OLMS.BackEnd.API.Models
{
    public class Permission:Entity
    {

        [Index]
        [MaxLength(128)]
        [Required]
        public string RoleId { get; set; }

        [ForeignKey("RoleId")]
        public virtual ApplicationRole ApplicationRole { get; set; }

        [Index]
        [MaxLength(128)]
        [Required]

        public string ResourceId { get; set; }

        [ForeignKey("ResourceId")]
        public virtual Resource Resource { get; set; }

        [Index]
        [Required]
        public bool IsAllowed { get; set; }
        [Index]
        public bool IsDisable { get; set; }
    }
}
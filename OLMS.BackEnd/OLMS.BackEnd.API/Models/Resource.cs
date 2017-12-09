using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using OLMS.BackEnd.Model;

namespace OLMS.BackEnd.API.Models
{
    public class Resource:Entity
    {
     
        [Index]
        [MaxLength(256)]
        [Required]
        public string Name { get; set; }
        [MaxLength(30)]
        [Index]
        [Required]
        public string Type { get; set; }
        [Index]
        [Required]
        public bool IsPublic { get; set; }
    }
}
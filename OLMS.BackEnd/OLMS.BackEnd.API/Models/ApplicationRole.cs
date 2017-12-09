using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNet.Identity.EntityFramework;
using OLMS.BackEnd.Model;

namespace OLMS.BackEnd.API.Models
{
    public class ApplicationRole:IdentityRole
    {
        [Index]
        [MaxLength(20)]
        public string LandingRoute { get; set; }
        [Index]
        [Required]
        public DateTime Created { get; set; }

        [Index]
        [Required]
        [MaxLength(50)]
        public string CreatedBy { get; set; }

        [Index]
        [Required]
        public DateTime Modified { get; set; }

        [Index]
        [Required]
        [MaxLength(50)]
        public string ModifiedBy { get; set; }
    }
}
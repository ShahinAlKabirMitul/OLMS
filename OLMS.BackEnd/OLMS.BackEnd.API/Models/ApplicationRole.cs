using System.ComponentModel.DataAnnotations;
using Microsoft.AspNet.Identity.EntityFramework;

namespace OLMS.BackEnd.API.Models
{
    public class ApplicationRole:IdentityRole
    {
        [MaxLength(20)]
        public string LandingRoute { get; set; }
    }
}
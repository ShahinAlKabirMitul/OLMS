using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;
using OLMS.BackEnd.Model;

namespace OLMS.BackEnd.API.Models
{
    // You can add profile data for the user by adding more properties to your ApplicationUser class, please visit https://go.microsoft.com/fwlink/?LinkID=317594 to learn more.
    public class ApplicationUser : IdentityUser
    {
        public async Task<ClaimsIdentity> GenerateUserIdentityAsync(UserManager<ApplicationUser> manager, string authenticationType)
        {
            // Note the authenticationType must match the one defined in CookieAuthenticationOptions.AuthenticationType
            var userIdentity = await manager.CreateIdentityAsync(this, authenticationType);
            // Add custom user claims here
            return userIdentity;

            // Our Own Properties

        }

        //public class  ApplicationRole:IdentityRole
        //{
        //    // Our Own Role 
        //}
    }

    public class ApplicationRole:IdentityRole
    {
        [MaxLength(20)]
        public string LandingRoute { get; set; }
    }

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
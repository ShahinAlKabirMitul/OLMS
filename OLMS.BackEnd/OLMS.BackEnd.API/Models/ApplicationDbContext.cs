﻿using System.Data.Entity;
using Microsoft.AspNet.Identity.EntityFramework;

namespace OLMS.BackEnd.API.Models
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext()
            : base("DefaultConnection", throwIfV1Schema: false)
        {

        }
        
        public static ApplicationDbContext Create()
        {
            return new ApplicationDbContext();
        }
        public DbSet<Permission> Permissions { set; get; }
        public DbSet<Resource>Resources { set; get; }

        public System.Data.Entity.DbSet<OLMS.BackEnd.API.Models.ApplicationRole> IdentityRoles { get; set; }
    }
}
namespace OLMS.BackEnd.API.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UpdateRole : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.AspNetRoles", "Created", c => c.DateTime());
            AddColumn("dbo.AspNetRoles", "CreatedBy", c => c.String(maxLength: 50));
            AddColumn("dbo.AspNetRoles", "Modified", c => c.DateTime());
            AddColumn("dbo.AspNetRoles", "ModifiedBy", c => c.String(maxLength: 50));
            CreateIndex("dbo.AspNetRoles", "LandingRoute");
            CreateIndex("dbo.AspNetRoles", "Created");
            CreateIndex("dbo.AspNetRoles", "CreatedBy");
            CreateIndex("dbo.AspNetRoles", "Modified");
            CreateIndex("dbo.AspNetRoles", "ModifiedBy");
        }
        
        public override void Down()
        {
            DropIndex("dbo.AspNetRoles", new[] { "ModifiedBy" });
            DropIndex("dbo.AspNetRoles", new[] { "Modified" });
            DropIndex("dbo.AspNetRoles", new[] { "CreatedBy" });
            DropIndex("dbo.AspNetRoles", new[] { "Created" });
            DropIndex("dbo.AspNetRoles", new[] { "LandingRoute" });
            DropColumn("dbo.AspNetRoles", "ModifiedBy");
            DropColumn("dbo.AspNetRoles", "Modified");
            DropColumn("dbo.AspNetRoles", "CreatedBy");
            DropColumn("dbo.AspNetRoles", "Created");
        }
    }
}

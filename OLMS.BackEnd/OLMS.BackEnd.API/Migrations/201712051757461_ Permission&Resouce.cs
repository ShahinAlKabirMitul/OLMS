namespace OLMS.BackEnd.API.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class PermissionResouce : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Permissions",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        RoleId = c.String(nullable: false, maxLength: 128),
                        ResourceId = c.String(nullable: false, maxLength: 128),
                        IsAllowed = c.Boolean(nullable: false),
                        IsDisable = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .Index(t => t.RoleId)
                .Index(t => t.ResourceId)
                .Index(t => t.IsAllowed)
                .Index(t => t.IsDisable);
            
            CreateTable(
                "dbo.Resources",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        Name = c.String(nullable: false, maxLength: 256),
                        Type = c.String(nullable: false, maxLength: 30),
                        IsPublic = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .Index(t => t.Name)
                .Index(t => t.Type)
                .Index(t => t.IsPublic);
            
        }
        
        public override void Down()
        {
            DropIndex("dbo.Resources", new[] { "IsPublic" });
            DropIndex("dbo.Resources", new[] { "Type" });
            DropIndex("dbo.Resources", new[] { "Name" });
            DropIndex("dbo.Permissions", new[] { "IsDisable" });
            DropIndex("dbo.Permissions", new[] { "IsAllowed" });
            DropIndex("dbo.Permissions", new[] { "ResourceId" });
            DropIndex("dbo.Permissions", new[] { "RoleId" });
            DropTable("dbo.Resources");
            DropTable("dbo.Permissions");
        }
    }
}

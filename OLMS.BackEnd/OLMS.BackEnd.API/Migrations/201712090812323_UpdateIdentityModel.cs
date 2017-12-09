namespace OLMS.BackEnd.API.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UpdateIdentityModel : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Permissions", "Created", c => c.DateTime(nullable: false));
            AddColumn("dbo.Permissions", "CreatedBy", c => c.String(nullable: false, maxLength: 50));
            AddColumn("dbo.Permissions", "Modified", c => c.DateTime(nullable: false));
            AddColumn("dbo.Permissions", "ModifiedBy", c => c.String(nullable: false, maxLength: 50));
            AddColumn("dbo.Resources", "Created", c => c.DateTime(nullable: false));
            AddColumn("dbo.Resources", "CreatedBy", c => c.String(nullable: false, maxLength: 50));
            AddColumn("dbo.Resources", "Modified", c => c.DateTime(nullable: false));
            AddColumn("dbo.Resources", "ModifiedBy", c => c.String(nullable: false, maxLength: 50));
            CreateIndex("dbo.Permissions", "Created");
            CreateIndex("dbo.Permissions", "CreatedBy");
            CreateIndex("dbo.Permissions", "Modified");
            CreateIndex("dbo.Permissions", "ModifiedBy");
            CreateIndex("dbo.Resources", "Created");
            CreateIndex("dbo.Resources", "CreatedBy");
            CreateIndex("dbo.Resources", "Modified");
            CreateIndex("dbo.Resources", "ModifiedBy");
            AddForeignKey("dbo.Permissions", "RoleId", "dbo.AspNetRoles", "Id", cascadeDelete: true);
            AddForeignKey("dbo.Permissions", "ResourceId", "dbo.Resources", "Id", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Permissions", "ResourceId", "dbo.Resources");
            DropForeignKey("dbo.Permissions", "RoleId", "dbo.AspNetRoles");
            DropIndex("dbo.Resources", new[] { "ModifiedBy" });
            DropIndex("dbo.Resources", new[] { "Modified" });
            DropIndex("dbo.Resources", new[] { "CreatedBy" });
            DropIndex("dbo.Resources", new[] { "Created" });
            DropIndex("dbo.Permissions", new[] { "ModifiedBy" });
            DropIndex("dbo.Permissions", new[] { "Modified" });
            DropIndex("dbo.Permissions", new[] { "CreatedBy" });
            DropIndex("dbo.Permissions", new[] { "Created" });
            DropColumn("dbo.Resources", "ModifiedBy");
            DropColumn("dbo.Resources", "Modified");
            DropColumn("dbo.Resources", "CreatedBy");
            DropColumn("dbo.Resources", "Created");
            DropColumn("dbo.Permissions", "ModifiedBy");
            DropColumn("dbo.Permissions", "Modified");
            DropColumn("dbo.Permissions", "CreatedBy");
            DropColumn("dbo.Permissions", "Created");
        }
    }
}

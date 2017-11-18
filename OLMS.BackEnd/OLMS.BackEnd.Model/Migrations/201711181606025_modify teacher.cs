namespace OLMS.BackEnd.Model.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class modifyteacher : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Teachers", "Designation", c => c.String(nullable: false, maxLength: 200));
            AddColumn("dbo.Teachers", "Description", c => c.String(nullable: false, maxLength: 550));
            CreateIndex("dbo.Teachers", "Designation");
            CreateIndex("dbo.Teachers", "Description");
        }
        
        public override void Down()
        {
            DropIndex("dbo.Teachers", new[] { "Description" });
            DropIndex("dbo.Teachers", new[] { "Designation" });
            DropColumn("dbo.Teachers", "Description");
            DropColumn("dbo.Teachers", "Designation");
        }
    }
}

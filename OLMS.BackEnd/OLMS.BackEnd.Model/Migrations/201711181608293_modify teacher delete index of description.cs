namespace OLMS.BackEnd.Model.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class modifyteacherdeleteindexofdescription : DbMigration
    {
        public override void Up()
        {
            DropIndex("dbo.Teachers", new[] { "Description" });
        }
        
        public override void Down()
        {
            CreateIndex("dbo.Teachers", "Description");
        }
    }
}

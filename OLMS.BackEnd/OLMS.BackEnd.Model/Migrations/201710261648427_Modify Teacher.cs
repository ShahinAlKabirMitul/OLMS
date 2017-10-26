namespace OLMS.BackEnd.Model.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ModifyTeacher : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Teachers", "PhoneNo", c => c.String(maxLength: 20));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Teachers", "PhoneNo");
        }
    }
}

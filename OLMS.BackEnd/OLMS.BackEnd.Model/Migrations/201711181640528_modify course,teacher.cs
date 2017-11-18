namespace OLMS.BackEnd.Model.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class modifycourseteacher : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Courses", "TotalStudentsEnrolled", c => c.Int(nullable: false));
            AddColumn("dbo.Courses", "PublishDate", c => c.DateTime(nullable: false));
            AddColumn("dbo.Courses", "TotalLecturesCount", c => c.Int(nullable: false));
            AddColumn("dbo.Courses", "SubTitle", c => c.String(nullable: false, maxLength: 100));
            AddColumn("dbo.Courses", "CourseSummary", c => c.String(maxLength: 150));
            AddColumn("dbo.Courses", "CourseShortDescription", c => c.String(maxLength: 250));
            AddColumn("dbo.Courses", "Language", c => c.String(maxLength: 50));
            AddColumn("dbo.Courses", "Achieve", c => c.String(maxLength: 50));
            AddColumn("dbo.Courses", "Requirements", c => c.String(maxLength: 50));
            AddColumn("dbo.Courses", "FullDescription", c => c.String(maxLength: 500));
            AddColumn("dbo.Teachers", "Email", c => c.String(nullable: false, maxLength: 50));
            AddColumn("dbo.Teachers", "Phone", c => c.String(nullable: false, maxLength: 20));
            AddColumn("dbo.Teachers", "Address", c => c.String(nullable: false, maxLength: 100));
            CreateIndex("dbo.Teachers", "Email");
            CreateIndex("dbo.Teachers", "Phone");
        }
        
        public override void Down()
        {
            DropIndex("dbo.Teachers", new[] { "Phone" });
            DropIndex("dbo.Teachers", new[] { "Email" });
            DropColumn("dbo.Teachers", "Address");
            DropColumn("dbo.Teachers", "Phone");
            DropColumn("dbo.Teachers", "Email");
            DropColumn("dbo.Courses", "FullDescription");
            DropColumn("dbo.Courses", "Requirements");
            DropColumn("dbo.Courses", "Achieve");
            DropColumn("dbo.Courses", "Language");
            DropColumn("dbo.Courses", "CourseShortDescription");
            DropColumn("dbo.Courses", "CourseSummary");
            DropColumn("dbo.Courses", "SubTitle");
            DropColumn("dbo.Courses", "TotalLecturesCount");
            DropColumn("dbo.Courses", "PublishDate");
            DropColumn("dbo.Courses", "TotalStudentsEnrolled");
        }
    }
}

using System;
using OLMS.BackEnd.Model;

namespace OLMS.BackEnd.ViewModel
{
    public class CourseViewModel : BaseViewModel<Course>
    {
        public string Title { get; set; }

        public double Price { get; set; }
        public string Tags { get; set; }
        public TeacherViewModel Teacher { get; set; }
        public int TotalStudentsEnrolled { get; set; }
        public int TotalLecturesCount { get; set; }
        public DateTime PublishDate { get; set; }
        public string SubTitle { get; set; }
        public string CourseSummary { get; set; }
        public string CourseShortDescription { get; set; }
        public string Language { get; set; }
        public string Achieve { get; set; }
        public string Requirements { get; set; }
        public string FullDescription { get; set; }
        public CourseViewModel(Course course) : base(course)
        {
            Title = course.Title;
            Price = course.Price;
            course.Tags = Tags;
            TotalStudentsEnrolled = course.TotalStudentsEnrolled;
            PublishDate = course.PublishDate;
            TotalLecturesCount = course.TotalLecturesCount;
            SubTitle = course.SubTitle;
            CourseSummary = course.CourseSummary;
            CourseShortDescription = CourseShortDescription;
            Language = course.Language;
            Achieve = course.Achieve;
            Requirements = course.Requirements;
            FullDescription = course.FullDescription;

            if (course.Teacher != null)
            {
                Teacher = new TeacherViewModel(course.Teacher);
            }
        }

    }
}

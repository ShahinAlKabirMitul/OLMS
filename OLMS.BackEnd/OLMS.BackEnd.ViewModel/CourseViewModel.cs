using OLMS.BackEnd.Model;

namespace OLMS.BackEnd.ViewModel
{
    public class CourseViewModel : BaseViewModel<Course>
    {
        public string Title { get; set; }
        public double Price { get; set; }
        public string Tags { get; set; }
        public TeacherViewModel Teacher { get; set; }

        public CourseViewModel(Course course) : base(course)
        {
            Title = course.Title;
            Price = course.Price;
            Tags = course.Tags;
            if (course.Teacher != null)
            {
                Teacher = new TeacherViewModel(course.Teacher);
            }
        }

    }
}

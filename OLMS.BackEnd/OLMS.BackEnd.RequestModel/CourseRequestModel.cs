using System;
using System.Linq.Expressions;
using OLMS.BackEnd.Model;

namespace OLMS.BackEnd.RequestModel
{
    public class CourseRequestModel : BaseRequestModel<Course>
    {
        public string Title { get; set; }
        public string Tags { get; set; }
        public DateTime PublishDate { get; set; }
        public string SubTitle { get; set; }
        public string CourseSummary { get; set; }
        public string CourseShortDescription { get; set; }

        public override Expression<Func<Course, bool>> GetExpression()
        {
            if (!string.IsNullOrWhiteSpace(Keyword))
            {
                ExpressionObj = x =>
                    x.Title.ToLower().Contains(Keyword.ToLower()) ||
                    x.Tags.ToLower().Contains(Keyword.ToLower()) ||
                    x.SubTitle.ToLower().Contains(Keyword.ToLower()) ||
                    x.CourseSummary.ToLower().Contains(Keyword.ToLower()) ||
                    x.CourseShortDescription.ToLower().Contains(Keyword.ToLower());



            }
            if (!string.IsNullOrWhiteSpace(Title))
            {
                this.ExpressionObj = ExpressionObj.And(x => Title.ToLower().Contains(Title.ToLower()));
            }
            if (!string.IsNullOrWhiteSpace(Tags))
            {
                this.ExpressionObj = ExpressionObj.And(x => Tags.ToLower().Contains(Tags.ToLower()));
            }
            if (!string.IsNullOrWhiteSpace(SubTitle))
            {
                this.ExpressionObj = ExpressionObj.And(x => SubTitle.ToLower().Contains(SubTitle.ToLower()));
            }
            if (!string.IsNullOrWhiteSpace(CourseSummary))
            {
                this.ExpressionObj = ExpressionObj.And(x => CourseSummary.ToLower().Contains(CourseSummary.ToLower()));
            }
            if (!string.IsNullOrWhiteSpace(CourseShortDescription))
            {
                this.ExpressionObj = ExpressionObj.And(x => CourseShortDescription.ToLower().Contains(CourseShortDescription.ToLower()));
            }
            var baseExpression = GenerateBaseExpression();
            this.ExpressionObj = ExpressionObj.And(baseExpression);

            return ExpressionObj;
        }
    }
}

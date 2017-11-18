using System;
using System.Linq.Expressions;
using OLMS.BackEnd.Model;

namespace OLMS.BackEnd.RequestModel
{
    public class CourseRequestModel : BaseRequestModel<Course>
    {
        public string Title { get; set; }
        public string Tags { get; set; }

        public override Expression<Func<Course, bool>> GetExpression()
        {
            if (!string.IsNullOrWhiteSpace(Keyword))
            {
                ExpressionObj = x =>
                    x.Title.ToLower().Contains(Keyword.ToLower()) ||
                    x.Tags.ToLower().Contains(Keyword.ToLower());



            }
            if (!string.IsNullOrWhiteSpace(Title))
            {
                this.ExpressionObj = ExpressionObj.And(x => Title.ToLower().Contains(Title.ToLower()));
            }
            if (!string.IsNullOrWhiteSpace(Tags))
            {
                this.ExpressionObj = ExpressionObj.And(x => Tags.ToLower().Contains(Tags.ToLower()));
            }
            var baseExpression = GenerateBaseExpression();
            this.ExpressionObj = ExpressionObj.And(baseExpression);

            return ExpressionObj;
        }
    }
}

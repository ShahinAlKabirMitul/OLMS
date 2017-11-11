using System;
using System.Linq.Expressions;
using OLMS.BackEnd.Model;

namespace OLMS.BackEnd.RequestModel
{
    public class TeacherRequestModel : BaseRequestModel<Teacher>
    {
       
        public override Expression<Func<Teacher, bool>> GetExpression()
        {
            this.Expression = s => true;
            if (!string.IsNullOrWhiteSpace(Keyword))
            {
                Expression = x =>
                    x.Name.ToLower().Contains(Keyword.ToLower()) || x.PhoneNo.ToLower().Contains(Keyword.ToLower());
            }

            return Expression;
        }

    }
}
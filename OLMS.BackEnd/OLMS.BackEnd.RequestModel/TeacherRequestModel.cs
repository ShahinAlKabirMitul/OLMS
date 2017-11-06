using System;
using System.Linq.Expressions;
using OLMS.BackEnd.Model;

namespace OLMS.BackEnd.RequestModel
{
    public class TeacherRequestModel:BaseRequestModel
    {
        private Expression<Func<Teacher, bool>> expression;
        public Expression<Func<Teacher, bool>> GetExpression()
        {
            if (!string.IsNullOrWhiteSpace(Keyword))
            {
                expression = x =>
                    x.Name.ToLower().Contains(Keyword.ToLower());
            }

            return expression;
        }

       


    }
}
using System;
using System.Linq.Expressions;
using OLMS.BackEnd.Model;

namespace OLMS.BackEnd.RequestModel
{
    public class TeacherRequestModel : BaseRequestModel<Teacher>
    {
        public string Name { get; set; }
        public string PhoneNo { get; set; }


        public override Expression<Func<Teacher, bool>> GetExpression()
        {
          
            if (!string.IsNullOrWhiteSpace(Keyword))
            {
                ExpressionObj = x =>
                    x.Name.ToLower().Contains(Keyword.ToLower()) || x.PhoneNo.ToLower().Contains(Keyword.ToLower());
            }
            if (!string.IsNullOrWhiteSpace(Name))
            {
                this.ExpressionObj = ExpressionObj.And(x => Name.ToLower().Contains(Name.ToLower()));
            }
            if (!string.IsNullOrWhiteSpace(PhoneNo))
            {
                this.ExpressionObj = ExpressionObj.And(x => PhoneNo.ToLower().Contains(PhoneNo.ToLower()));
            }


            return ExpressionObj;
        }

    }
}
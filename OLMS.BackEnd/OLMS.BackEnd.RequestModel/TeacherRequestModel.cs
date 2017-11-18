using System;
using System.Linq.Expressions;
using OLMS.BackEnd.Model;

namespace OLMS.BackEnd.RequestModel
{
    public class TeacherRequestModel : BaseRequestModel<Teacher>
    {
        public string Name { get; set; }

        public string Email { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }
        public string Designation { get; set; }
        public string Description { get; set; }


        public override Expression<Func<Teacher, bool>> GetExpression()
        {

            if (!string.IsNullOrWhiteSpace(Keyword))
            {
                ExpressionObj = x =>
                    x.Name.ToLower().Contains(Keyword.ToLower()) ||
                    x.Phone.ToLower().Contains(Keyword.ToLower()) ||
                    x.Address.ToLower().Contains(Keyword.ToLower()) ||
                    x.Email.ToLower().Contains(Keyword.ToLower());


            }
            if (!string.IsNullOrWhiteSpace(Name))
            {
                this.ExpressionObj = ExpressionObj.And(x => Name.ToLower().Contains(Name.ToLower()));
            }
            if (!string.IsNullOrWhiteSpace(Phone))
            {
                this.ExpressionObj = ExpressionObj.And(x => Phone.ToLower().Contains(Phone.ToLower()));
            }
            if (!string.IsNullOrWhiteSpace(Email))
            {
                this.ExpressionObj = ExpressionObj.And(x => Email.ToLower().Contains(Email.ToLower()));
            }
            if (!string.IsNullOrWhiteSpace(Address))
            {
                this.ExpressionObj = ExpressionObj.And(x => Address.ToLower().Contains(Address.ToLower()));
            }


            return ExpressionObj;
        }

    }
}
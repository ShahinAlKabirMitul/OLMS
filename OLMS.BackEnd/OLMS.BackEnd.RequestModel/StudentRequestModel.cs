using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using OLMS.BackEnd.Model;

namespace OLMS.BackEnd.RequestModel
{
    public class StudentRequestModel: BaseRequestModel<Student>
    {
        public string Name { get; set; }
        public string Phone { get; set; }

       
        public override Expression<Func<Student, bool>> GetExpression()
        {
           
            if (!string.IsNullOrWhiteSpace(Keyword))
            {
                ExpressionObj = x =>
                    x.Name.ToLower().Contains(Keyword.ToLower()) ||
                    x.Phone.ToLower().Contains(Keyword.ToLower()) ||
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
            Expression<Func<Student, bool>> baseExpression = GenerateBaseExpression();
            this.ExpressionObj= ExpressionObj.And(baseExpression);

            return ExpressionObj;
        }
    }
}

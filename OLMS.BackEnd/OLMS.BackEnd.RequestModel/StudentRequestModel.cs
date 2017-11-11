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
       
       
        public override Expression<Func<Student, bool>> GetExpression()
        {
            this.Expression= s=> true;
            if (!string.IsNullOrWhiteSpace(Keyword))
            {
                Expression = x =>
                    x.Name.ToLower().Contains(Keyword.ToLower()) ||
                    x.Phone.ToLower().Contains(Keyword.ToLower()) ||
                    x.Email.ToLower().Contains(Keyword.ToLower());

            }

            return Expression;
        }
    }
}

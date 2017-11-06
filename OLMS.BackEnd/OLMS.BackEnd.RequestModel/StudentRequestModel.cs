using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using OLMS.BackEnd.Model;

namespace OLMS.BackEnd.RequestModel
{
    public class StudentRequestModel:BaseRequestModel
    {
       

        private Expression<Func<Student, bool>> expression;
        public Expression<Func<Student, bool>> GetExpression()
        {
            if (!string.IsNullOrWhiteSpace(Keyword))
            {
                expression = x =>
                    x.Name.ToLower().Contains(Keyword.ToLower()) ||
                    x.Phone.ToLower().Contains(Keyword.ToLower()) ||
                    x.Email.ToLower().Contains(Keyword.ToLower());

            }

            return expression;
        }
      

       
    }
}

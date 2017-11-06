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
        public StudentRequestModel()
        {
           
        }

        private Expression<Func<Student, bool>> expression;
        Expression<Func<Student, bool>> GetExpression()
        {

            if (!string.IsNullOrWhiteSpace(Name))
            {
                expression = x => x.Name.ToLower().Contains(Name.ToLower());
            }
            if (!string.IsNullOrWhiteSpace(Phone))
            {
                expression = expression.And(x => x.Phone.ToLower().Contains(Phone.ToLower()));
            }
            
            return expression;
        }
        public string Name { get; set; }

        public string Phone { get; set; }
    }
}

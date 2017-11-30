using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using OLMS.BackEnd.Model;

namespace OLMS.BackEnd.RequestModel
{
    public class EnrollmentRequestModel : BaseRequestModel<Enrollment>
    {
        public override Expression<Func<Enrollment, bool>> GetExpression()
        {
            if (!string.IsNullOrWhiteSpace(Keyword))
            {
                this.ExpressionObj = x =>
                    x.Student.Name.Contains(Keyword) || x.Course.Title.Contains(Keyword);
            }

            this.ExpressionObj = this.ExpressionObj.And(this.GenerateBaseExpression());
            return this.ExpressionObj;
        }

        public override IQueryable<Enrollment> IncludeParents(IQueryable<Enrollment> queryable)
        {
            return queryable.Include(e => e.Student).Include(e => e.Course);
        }
    }
}

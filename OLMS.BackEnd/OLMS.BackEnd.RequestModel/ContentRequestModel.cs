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
    public class ContentRequestModel:BaseRequestModel<Content>
    {
        public override Expression<Func<Content, bool>> GetExpression()
        {
            if (!string.IsNullOrWhiteSpace(Keyword))
            {
                this.ExpressionObj = x => x.Title.Contains(Keyword) || x.Tags.Contains(Keyword)
                                             || x.Course.Id.Equals(Keyword);
            }

            this.ExpressionObj = this.ExpressionObj.And(this.GenerateBaseExpression());
            return this.ExpressionObj;

        }

        public override IQueryable<Content> IncludeParents(IQueryable<Content> queryable)
        {
            return queryable.Include(c => c.Course);
        }
    }
}

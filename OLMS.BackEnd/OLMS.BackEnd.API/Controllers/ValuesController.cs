using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;
using OLMS.BackEnd.API.Models;
using OLMS.BackEnd.Model;

namespace OLMS.BackEnd.API.Controllers
{
   
    public class ValuesController : ApiController
    {
        [Authorize]
        // GET api/values
        public async Task<ApplicationUser> Get()
        {
            var name = User.Identity.Name;
            var manager = Request.GetOwinContext().Get<ApplicationUserManager>();
            ApplicationUser applicationManger = await manager.FindByNameAsync(name);
            ApplicationDbContext.Create();
            BusinessDbContext.Create();
            return applicationManger;
           // return new string[] { "value1"+name, "value2"+Guid.NewGuid()};
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}

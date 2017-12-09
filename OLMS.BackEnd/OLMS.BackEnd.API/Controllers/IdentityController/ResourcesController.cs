using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using OLMS.BackEnd.API.Models;

namespace OLMS.BackEnd.API.Controllers.IdentityController
{
    [Authorize]
    [RoutePrefix("api/Resource")]
    public class ResourcesController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/Resources
        public IQueryable<Resource> GetResources()
        {
            return db.Resources;
        }

        // GET: api/Resources/5
        [ResponseType(typeof(Resource))]
        public async Task<IHttpActionResult> GetResource(string id)
        {
            Resource resource = await db.Resources.FindAsync(id);
            if (resource == null)
            {
                return NotFound();
            }

            return Ok(resource);
        }

        // PUT: api/Resources/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutResource(string id, Resource resource)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != resource.Id)
            {
                return BadRequest();
            }

            db.Entry(resource).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ResourceExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Resources
        [Route("Add")]
        [ResponseType(typeof(Resource))]
        public async Task<IHttpActionResult> PostResource(Resource resource)
        {
            resource.Id = Guid.NewGuid().ToString();
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Resources.Add(resource);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (ResourceExists(resource.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return Ok(resource.Id);
        }

        // DELETE: api/Resources/5
        [ResponseType(typeof(Resource))]
        public async Task<IHttpActionResult> DeleteResource(string id)
        {
            Resource resource = await db.Resources.FindAsync(id);
            if (resource == null)
            {
                return NotFound();
            }

            db.Resources.Remove(resource);
            await db.SaveChangesAsync();

            return Ok(resource);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ResourceExists(string id)
        {
            return db.Resources.Count(e => e.Id == id) > 0;
        }
    }
}
using System;
using System.Collections.Generic;
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
    public class PermissionsController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/Permissions
        public IQueryable<Permission> GetPermissions()
        {
            return db.Permissions;
        }

        // GET: api/Permissions/5
        [ResponseType(typeof(Permission))]
        public async Task<IHttpActionResult> GetPermission(string id)
        {
            Permission Permission = await db.Permissions.FindAsync(id);
            if (Permission == null)
            {
                return NotFound();
            }

            return Ok(Permission);
        }

        // PUT: api/Permissions/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutPermission(string id, Permission Permission)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != Permission.Id)
            {
                return BadRequest();
            }

            db.Entry(Permission).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PermissionExists(id))
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

        // POST: api/Permissions
        [ResponseType(typeof(Permission))]
        public async Task<IHttpActionResult> PostPermission(Permission Permission)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Permissions.Add(Permission);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (PermissionExists(Permission.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = Permission.Id }, Permission);
        }

        // DELETE: api/Permissions/5
        [ResponseType(typeof(Permission))]
        public async Task<IHttpActionResult> DeletePermission(string id)
        {
            Permission Permission = await db.Permissions.FindAsync(id);
            if (Permission == null)
            {
                return NotFound();
            }

            db.Permissions.Remove(Permission);
            await db.SaveChangesAsync();

            return Ok(Permission);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PermissionExists(string id)
        {
            return db.Permissions.Count(e => e.Id == id) > 0;
        }
    }
}

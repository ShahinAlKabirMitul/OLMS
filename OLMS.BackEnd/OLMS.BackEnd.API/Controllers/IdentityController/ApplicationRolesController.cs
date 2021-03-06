﻿using System;
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
    [Authorize(Roles="Admin")]
    [RoutePrefix("api/Role")]

    public class ApplicationRolesController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/ApplicationRoles
        [Route("Get")]
        public IQueryable<ApplicationRole> GetIdentityRoles()
        {
            return db.IdentityRoles;
        }

        // GET: api/ApplicationRoles/5
        [ResponseType(typeof(ApplicationRole))]
        public async Task<IHttpActionResult> GetApplicationRole(string id)
        {
            ApplicationRole applicationRole = await db.IdentityRoles.FindAsync(id);
            if (applicationRole == null)
            {
                return NotFound();
            }

            return Ok(applicationRole);
        }

        // PUT: api/ApplicationRoles/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutApplicationRole(string id, ApplicationRole applicationRole)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != applicationRole.Id)
            {
                return BadRequest();
            }

            db.Entry(applicationRole).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ApplicationRoleExists(id))
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

        [Route("Add")]
        // POST: api/ApplicationRoles
        [ResponseType(typeof(ApplicationRole))]
        public async Task<IHttpActionResult> PostApplicationRole(ApplicationRole applicationRole)
        {
            applicationRole.Id = Guid.NewGuid().ToString();
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.IdentityRoles.Add(applicationRole);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (ApplicationRoleExists(applicationRole.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return Ok(applicationRole.Id);
            //return CreatedAtRoute("DefaultApi", new { id = applicationRole.Id }, applicationRole);
        }

        // DELETE: api/ApplicationRoles/5
        [ResponseType(typeof(ApplicationRole))]
        public async Task<IHttpActionResult> DeleteApplicationRole(string id)
        {
            ApplicationRole applicationRole = await db.IdentityRoles.FindAsync(id);
            if (applicationRole == null)
            {
                return NotFound();
            }

            db.IdentityRoles.Remove(applicationRole);
            await db.SaveChangesAsync();

            return Ok(applicationRole);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ApplicationRoleExists(string id)
        {
            return db.IdentityRoles.Count(e => e.Id == id) > 0;
        }
    }
}
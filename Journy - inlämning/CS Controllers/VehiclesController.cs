using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using Journy.Models;

namespace Journy
{
    public class VehiclesController : ApiController
    {
        readonly log4net.ILog _log = log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);

        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/NewVehicles
        public IQueryable<NewVehicle> GetNewVehicles()
        {
            _log.Error("An error has accured");
            return db.NewVehicles;
        }

        // GET: api/NewVehicles/5
        [ResponseType(typeof(NewVehicle))]
        public IHttpActionResult GetNewVehicle(int id)
        {
            NewVehicle newVehicle = db.NewVehicles.Find(id);
            if (newVehicle == null)
            {
                return NotFound();
            }

            return Ok(newVehicle);
        }

        // PUT: api/NewVehicles/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutNewVehicle(int id, NewVehicle newVehicle)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != newVehicle.Id)
            {
                return BadRequest();
            }

            db.Entry(newVehicle).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NewVehicleExists(id))
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

        // POST: api/NewVehicles
        [ResponseType(typeof(NewVehicle))]
        public IHttpActionResult PostNewVehicle(NewVehicle newVehicle)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.NewVehicles.Add(newVehicle);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = newVehicle.Id }, newVehicle);
        }

        // DELETE: api/NewVehicles/5
        [ResponseType(typeof(NewVehicle))]
        public IHttpActionResult DeleteNewVehicle(int id)
        {
            NewVehicle newVehicle = db.NewVehicles.Find(id);
            if (newVehicle == null)
            {
                return NotFound();
            }

            db.NewVehicles.Remove(newVehicle);
            db.SaveChanges();

            return Ok(newVehicle);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool NewVehicleExists(int id)
        {
            return db.NewVehicles.Count(e => e.Id == id) > 0;
        }
    }
}
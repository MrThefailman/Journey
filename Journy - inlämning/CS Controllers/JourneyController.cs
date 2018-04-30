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
    public class JourneyController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/Journey
        public IQueryable<JourneyModel> GetJourneyModels()
        {
            return db.JourneyModels;
        }

        // GET: api/Journey/5
        [ResponseType(typeof(JourneyModel))]
        public IHttpActionResult GetJourneyModel(int id)
        {
            JourneyModel journeyModel = db.JourneyModels.Find(id);
            if (journeyModel == null)
            {
                return NotFound();
            }

            return Ok(journeyModel);
        }

        // PUT: api/Journey/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutJourneyModel(int id, JourneyModel journeyModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != journeyModel.Id)
            {
                return BadRequest();
            }

            db.Entry(journeyModel).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!JourneyModelExists(id))
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

        // POST: api/Journey
        [ResponseType(typeof(JourneyModel))]
        public IHttpActionResult PostJourneyModel(JourneyModel journeyModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.JourneyModels.Add(journeyModel);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = journeyModel.Id }, journeyModel);
        }

        // DELETE: api/Journey/5
        [ResponseType(typeof(JourneyModel))]
        public IHttpActionResult DeleteJourneyModel(int id)
        {
            JourneyModel journeyModel = db.JourneyModels.Find(id);
            if (journeyModel == null)
            {
                return NotFound();
            }

            db.JourneyModels.Remove(journeyModel);
            db.SaveChanges();

            return Ok(journeyModel);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool JourneyModelExists(int id)
        {
            return db.JourneyModels.Count(e => e.Id == id) > 0;
        }
    }
}
using InsuranceCardServer.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace InsuranceCardServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PunishmentController : ControllerBase
    {
        private readonly motorbike_insuranceContext _context;

        public PunishmentController(motorbike_insuranceContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Punishment>> GetAllPunishments()
        {
            var punishments = _context.Punishments.ToList();
            return punishments;
        }

        [HttpGet("{id}")]
        public ActionResult<Punishment> GetPunishmentById(int id)
        {
            var punishment = _context.Punishments.FirstOrDefault(x => x.PunishmentId == id);

            if (punishment != null)
            {
                return punishment;
            }

            return NotFound();
        }

        [HttpPost]
        public IActionResult CreatePunishment(Punishment punishment)
        {
            try
            {
                _context.Punishments.Add(punishment);
                _context.SaveChanges();
                return CreatedAtAction(nameof(GetPunishmentById), new { id = punishment.PunishmentId }, punishment);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error: {ex.Message}");
            }
        }

        [HttpPut("{id}")]
        public IActionResult UpdatePunishment(int id, Punishment updatedPunishment)
        {
            try
            {
                var punishment = _context.Punishments.FirstOrDefault(x => x.PunishmentId == id);

                if (punishment == null)
                {
                    return NotFound();
                }

                punishment.PunishmentDate = updatedPunishment.PunishmentDate;
                punishment.Description = updatedPunishment.Description;

                _context.SaveChanges();

                return Ok(punishment);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error: {ex.Message}");
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeletePunishment(int id)
        {
            try
            {
                var punishment = _context.Punishments.FirstOrDefault(x => x.PunishmentId == id);

                if (punishment == null)
                {
                    return NotFound();
                }

                _context.Punishments.Remove(punishment);
                _context.SaveChanges();

                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error: {ex.Message}");
            }
        }
    }
}

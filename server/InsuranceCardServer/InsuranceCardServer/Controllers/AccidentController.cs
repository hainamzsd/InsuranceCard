using InsuranceCardServer.Models;
using Microsoft.AspNetCore.Mvc;
using System.Security.Principal;

namespace InsuranceCardServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccidentController : ControllerBase
    {
        private readonly motorbike_insuranceContext _context;

        public AccidentController(motorbike_insuranceContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Accident> GetAllAccidents()
        {
            return _context.Accidents.ToList();
        }

        [HttpGet("{id}")]
        public ActionResult<Accident> GetAccidentById(int id)
        {
            Accident acc = _context.Accidents.FirstOrDefault(x => x.AccidentId == id);
            if (acc != null)
            {
                return acc;
            }
            return NotFound();
        }

        [HttpPost]
        public IActionResult CreateAccident(Accident accident)
        {
            try
            {
                Accident existAcc = _context.Accidents.FirstOrDefault(x => x.AccidentId == accident.AccidentId);
                if (existAcc == null)
                {
                    _context.Accidents.Add(accident);
                    _context.SaveChanges();
                    return CreatedAtAction(nameof(GetAccidentById), new { id = accident.AccidentId }, accident);
                }
                else
                {
                    return Conflict("An accident with the same id already exists."); // Return 409 Conflict if the account already exists
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error: {ex.Message}"); // Return 500 Internal Server Error if an exception occurs
            }

        }

        [HttpPut("{id}")]
        public IActionResult UpdateAccident(int id, Accident updatedAccident)
        {
            try
            {
                Accident acc = _context.Accidents.FirstOrDefault(x => x.AccidentId == id);
                if (acc == null)
                {
                    return NotFound();
                }
                acc.AccidentDate = updatedAccident.AccidentDate;
                acc.Description = updatedAccident.Description;
                acc.Location = updatedAccident.Location;
                // Update other properties as needed

                _context.SaveChanges();

                return Ok(acc);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error: {ex.Message}"); // Return 500 Internal Server Error if an exception occurs
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteAccident(int id)
        {
            try
            {
                Accident acc = _context.Accidents.FirstOrDefault(x => x.AccidentId == id);
                if (acc == null)
                {
                    return NotFound(); // Return 404 Not Found if the account is not found
                }
                _context.Accidents.Remove(acc);
                _context.SaveChanges();

                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error: {ex.Message}"); // Return 500 Internal Server Error if an exception occurs
            }
        }
    }
}

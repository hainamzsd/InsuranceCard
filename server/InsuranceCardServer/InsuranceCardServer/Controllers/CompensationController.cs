using InsuranceCardServer.Models;
using Microsoft.AspNetCore.Mvc;

namespace InsuranceCardServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompensationController : Controller
    {
        private readonly motorbike_insuranceContext _context;

        public CompensationController(motorbike_insuranceContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Compensation> GetAllCompensations()
        {
            return _context.Compensations.ToList();
        }

        [HttpGet("{id}")]
        public ActionResult<Compensation> GetCompensationByCompensationId(int id)
        {
            Compensation compensation = _context.Compensations.FirstOrDefault(x => x.CompensationId == id);
            if (compensation != null)
            {
                return compensation;
            }
            return NotFound();
        }

        [HttpPost]
        public ActionResult CreateCompensation(Compensation compensation)
        {
            try
            {
                Compensation exitCom = _context.Compensations.FirstOrDefault(x => x.CompensationId == compensation.CompensationId);
                if (exitCom != null)
                {
                    _context.Compensations.Add(compensation);
                    _context.SaveChanges();
                    return CreatedAtAction(nameof(GetCompensationByCompensationId), new { id = compensation.CompensationId }, compensation);
                }
                else
                {
                    return Conflict("An account with the same id already exists.");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error: {ex.Message}");
            }
        }

        [HttpPut("{id}")]
        public ActionResult UpdateCompensation(int id, Compensation updatedCompensation)
        {
            try
            {
                Compensation compensation = _context.Compensations.FirstOrDefault(x => x.CompensationId == id);
                if (compensation == null)
                {
                    return NotFound();
                }
                compensation.CompensationDate = updatedCompensation.CompensationDate;
                compensation.Amount = updatedCompensation.Amount;
                compensation.Description = updatedCompensation.Description;
                _context.SaveChanges();

                return Ok(compensation);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error: {ex.Message}"); // Return 500 Internal Server Error if an exception occurs
            }
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteCompensation(int id)
        {
            try
            {
                Compensation compensation = _context.Compensations.FirstOrDefault(x => x.CompensationId == id);
                if(compensation == null)
                {
                    return NotFound();
                }
                _context.Compensations.Remove(compensation);
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

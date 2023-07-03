using InsuranceCardServer.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace InsuranceCardServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompensationController : ControllerBase
    {
        private readonly Insurance_CardContext _context;

        public CompensationController(Insurance_CardContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Compensation> GetAllCompensations()
        {
            return _context.Compensations.ToList();
        }

        [HttpGet("{id}")]
        public ActionResult<Compensation> GetCompensationById(int id)
        {
            Compensation compensation = _context.Compensations.FirstOrDefault(x => x.Id == id);
            if (compensation == null)
            {
                return NotFound();
            }
            return compensation;
        }

        [HttpPost]
        public ActionResult<Compensation> CreateCompensation(Compensation newCompensation)
        {
            _context.Compensations.Add(newCompensation);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetCompensationById), new { id = newCompensation.Id }, newCompensation);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateCompensation(int id, Compensation updatedCompensation)
        {
            Compensation compensation = _context.Compensations.FirstOrDefault(x => x.Id == id);
            if (compensation == null)
            {
                return NotFound();
            }

            compensation.ContractId = updatedCompensation.ContractId;
            compensation.CompensationDate = updatedCompensation.CompensationDate;
            compensation.Amount = updatedCompensation.Amount;
            // Update other properties as needed

            _context.SaveChanges();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteCompensation(int id)
        {
            Compensation compensation = _context.Compensations.FirstOrDefault(x => x.Id == id);
            if (compensation == null)
            {
                return NotFound();
            }

            _context.Compensations.Remove(compensation);
            _context.SaveChanges();
            return NoContent();
        }
    }

}

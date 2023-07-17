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
                Compensation cp = new Compensation() { 
                    ContractId = 1,
                    CompensationDate = DateTime.Now,
                    Amount = compensation.Amount,
                    Description = compensation.Description,
                };
                CompensationRequest request = new CompensationRequest()
                {
                    ContractId = 1,
                    RequestDate = compensation.CompensationDate,
                    Description = compensation.Description,
                    Resolved = false
                };
                _context.CompensationRequests.Add(request);
                _context.Compensations.Add(cp);
                    _context.SaveChanges();
                    return Ok(cp);
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



        [HttpGet("GetCompensationListByAccount/{id}")]
        public ActionResult<IEnumerable<Compensation>> GetCompensationByAccountId(int id)
        {
            var compensations = _context.Compensations.Where(x => x.Contract.AccountId == id).ToList();

            if (compensations != null)
            {
                return compensations;
            }

            return NotFound();
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

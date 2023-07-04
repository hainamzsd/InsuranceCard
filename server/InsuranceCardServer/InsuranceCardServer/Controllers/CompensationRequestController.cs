using InsuranceCardServer.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace InsuranceCardServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompensationRequestController : ControllerBase
    {
        private readonly motorbike_insuranceContext _context;

        public CompensationRequestController(motorbike_insuranceContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<CompensationRequest>> GetAllCompensationRequests()
        {
            var requests = _context.CompensationRequests.ToList();
            return requests;
        }

        [HttpGet("{id}")]
        public ActionResult<CompensationRequest> GetCompensationRequestById(int id)
        {
            var request = _context.CompensationRequests.FirstOrDefault(x => x.RequestId == id);

            if (request != null)
            {
                return request;
            }

            return NotFound();
        }

        [HttpPost]
        public IActionResult CreateCompensationRequest(CompensationRequest request)
        {
            try
            {
                _context.CompensationRequests.Add(request);
                _context.SaveChanges();
                return CreatedAtAction(nameof(GetCompensationRequestById), new { id = request.RequestId }, request);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error: {ex.Message}");
            }
        }

        [HttpPut("{id}")]
        public IActionResult UpdateCompensationRequest(int id, CompensationRequest updatedRequest)
        {
            try
            {
                var request = _context.CompensationRequests.FirstOrDefault(x => x.RequestId == id);

                if (request == null)
                {
                    return NotFound();
                }

                request.RequestDate = updatedRequest.RequestDate;
                request.Description = updatedRequest.Description;
                request.Resolved = updatedRequest.Resolved;

                _context.SaveChanges();

                return Ok(request);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error: {ex.Message}");
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteCompensationRequest(int id)
        {
            try
            {
                var request = _context.CompensationRequests.FirstOrDefault(x => x.RequestId == id);

                if (request == null)
                {
                    return NotFound();
                }

                _context.CompensationRequests.Remove(request);
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

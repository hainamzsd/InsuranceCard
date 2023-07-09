using InsuranceCardServer.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace InsuranceCardServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContractController : ControllerBase
    {
        private readonly motorbike_insuranceContext _context;
        private readonly JsonSerializerOptions _jsonOptions;

        public ContractController(motorbike_insuranceContext context)
        {
            _context = context;
            _jsonOptions = new JsonSerializerOptions
            {
                ReferenceHandler = ReferenceHandler.Preserve,
                MaxDepth = 32
            };
        }

     

        [HttpGet]
        public ActionResult<IEnumerable<Contract>> GetAllContracts()
        {
            var contracts = _context.Contracts.ToList();
            return contracts;
        }

        [HttpGet("{id}")]
        public ActionResult<Contract> GetContractById(int id)
        {
            var contract = _context.Contracts
               .Include(c => c.Payments)
               .Include(c => c.Accidents)
               .Include(c => c.Punishments)
               .Include(c => c.Compensations)
               .Include(c => c.CompensationRequests)
               .FirstOrDefault(x => x.ContractId == id);

            if (contract != null)   
            {
                var json = JsonSerializer.Serialize(contract, _jsonOptions);
                return Content(json, "application/json");
            }


            return NotFound();
        }

        [HttpGet("GetByAccount/{id}")]
        public ActionResult<IEnumerable<Contract>> GetContractByAccountId(int id)
        {
            var contract = _context.Contracts
              .Include(c => c.Payments)
              .Include(c => c.Accidents)
              .Include(c => c.Punishments)
              .Include(c => c.Compensations)
              .Include(c => c.CompensationRequests)
              .Where(x => x.AccountId == id).ToList();

            if (contract != null)
            {
                var json = JsonSerializer.Serialize(contract, _jsonOptions);
                return Content(json, "application/json");
            }

            return NotFound();
        }

        [HttpPost]
        public IActionResult CreateContract(Contract contract)
        {
            try
            {
                _context.Contracts.Add(contract);
                _context.SaveChanges();
                return CreatedAtAction(nameof(GetContractById), new { id = contract.ContractId }, contract);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error: {ex.Message}");
            }
        }

        [HttpPut("{id}")]
        public IActionResult UpdateContract(int id, Contract updatedContract)
        {
            try
            {
                var contract = _context.Contracts.FirstOrDefault(x => x.ContractId == id);

                if (contract == null)
                {
                    return NotFound();
                }

                contract.ContractNumber = updatedContract.ContractNumber;
                contract.StartDate = updatedContract.StartDate;
                contract.EndDate = updatedContract.EndDate;
                contract.Active = updatedContract.Active;

                _context.SaveChanges();

                return Ok(contract);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error: {ex.Message}");
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteContract(int id)
        {
            try
            {
                var contract = _context.Contracts.FirstOrDefault(x => x.ContractId == id);

                if (contract == null)
                {
                    return NotFound();
                }

                _context.Contracts.Remove(contract);
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

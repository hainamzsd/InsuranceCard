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

        public ContractController(motorbike_insuranceContext context)
        {
            _context = context;
        
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
               .FirstOrDefault(x => x.ContractId == id);

            if (contract != null)   
            {
                return contract;
            }


            return NotFound();
        }

        [HttpGet("GetByAccount/{id}")]
        public ActionResult<IEnumerable<Contract>> GetContractByAccountId(int id)
        {
            var contract = _context.Contracts
              .Where(x => x.AccountId == id).ToList();

            if (contract != null)
            {
                return contract;
            }

            return NotFound();
        }

        [HttpPost("CancelContract/{contractId}")]
        public IActionResult CancelContract(int contractId)
        {
            try
            {
                var contract = _context.Contracts.FirstOrDefault(c => c.ContractId == contractId);

                if (contract == null)
                {
                    return NotFound("Contract not found");
                }

                contract.Active = false;
                _context.SaveChanges();

                return Ok("Contract canceled successfully");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error: {ex.Message}");
            }
        }



        [HttpPost]
        public IActionResult CreateContract(Contract contract)
        {
            try
            {
                Contract newContract = new Contract()
                {
                    AccountId = contract.AccountId,
                    ContractNumber = contract.ContractNumber,
                    StartDate = contract.StartDate,
                    EndDate = contract.EndDate,
                    Active = contract.Active,

                };
                _context.Contracts.Add(newContract);
                _context.SaveChanges();
                return Ok(newContract);
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

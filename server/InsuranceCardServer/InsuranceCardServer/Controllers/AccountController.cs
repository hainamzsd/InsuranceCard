﻿using InsuranceCardServer.Models;
using Microsoft.AspNetCore.Mvc;

namespace InsuranceCardServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly motorbike_insuranceContext _context;

        public AccountController(motorbike_insuranceContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Account> GetAllAccount()
        {
            return _context.Accounts.ToList();
        }

        [HttpGet("{id}")]
        public ActionResult<Account> GetAccountByAccountId(int id)
        {
            Account acc = _context.Accounts.FirstOrDefault(x => x.AccountId == id);
            if (acc != null)
            {
                return acc;
            }
            return NotFound();
        }

        [HttpPost]
        public ActionResult<Account> AddNewAccount(Account account)
        {
            try
            {
                Account existAcc = _context.Accounts.FirstOrDefault(x => x.AccountId == account.AccountId);
                if (existAcc == null)
                {
                    _context.Accounts.Add(account);
                    _context.SaveChanges();
                    return CreatedAtAction(nameof(GetAccountByAccountId), new { id = account.AccountId }, account);
                }
                else
                {
                    return Conflict("An account with the same id already exists."); // Return 409 Conflict if the account already exists
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error: {ex.Message}"); // Return 500 Internal Server Error if an exception occurs
            }
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteAccount(int id)
        {
            try
            {
                // Check if the account exists
                Account account = _context.Accounts.FirstOrDefault(x => x.AccountId == id);
                if (account == null)
                {
                    return NotFound(); // Return 404 Not Found if the account is not found
                }

                // Remove the account from the context and save changes
                _context.Accounts.Remove(account);
                _context.SaveChanges();

                return NoContent(); // Return 204 No Content to indicate successful deletion
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error: {ex.Message}"); // Return 500 Internal Server Error if an exception occurs
            }
        }

        [HttpPut("{id}")]
        public ActionResult UpdateAccount(int id, [FromBody] Account updatedAccount)
        {
            try
            {
                // Check if the account exists
                Account account = _context.Accounts.FirstOrDefault(x => x.AccountId == id);
                if (account == null)
                {
                    return NotFound(); // Return 404 Not Found if the account is not found
                }

                // Update the properties of the existing account
                account.Username = updatedAccount.Username;
                account.Password = updatedAccount.Password;
                
                // Update other properties as needed

                // Save changes to the database
                _context.SaveChanges();

                return Ok(account); // Return 200 OK with the updated account
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error: {ex.Message}"); // Return 500 Internal Server Error if an exception occurs
            }
        }
    }
}

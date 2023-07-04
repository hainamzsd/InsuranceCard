using InsuranceCardServer.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace InsuranceCardServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserinfoController : ControllerBase
    {
        private readonly motorbike_insuranceContext _context;

        public UserinfoController(motorbike_insuranceContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Userinfo>> GetAllUserinfo()
        {
            var userinfoList = _context.Userinfos.ToList();
            return userinfoList;
        }

        [HttpGet("{id}")]
        public ActionResult<Userinfo> GetUserinfoById(int id)
        {
            var userinfo = _context.Userinfos.FirstOrDefault(x => x.UserId == id);

            if (userinfo != null)
            {
                return userinfo;
            }

            return NotFound();
        }

        [HttpPost]
        public IActionResult CreateUserinfo(Userinfo userinfo)
        {
            try
            {
                _context.Userinfos.Add(userinfo);
                _context.SaveChanges();
                return CreatedAtAction(nameof(GetUserinfoById), new { id = userinfo.UserId }, userinfo);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error: {ex.Message}");
            }
        }

        [HttpPut("{id}")]
        public IActionResult UpdateUserinfo(int id, Userinfo updatedUserinfo)
        {
            try
            {
                var userinfo = _context.Userinfos.FirstOrDefault(x => x.UserId == id);

                if (userinfo == null)
                {
                    return NotFound();
                }

                userinfo.Username = updatedUserinfo.Username;
                userinfo.Email = updatedUserinfo.Email;
                userinfo.FullName = updatedUserinfo.FullName;
                userinfo.ContactNumber = updatedUserinfo.ContactNumber;
                userinfo.Address = updatedUserinfo.Address;
                userinfo.CitizenIdentification = updatedUserinfo.CitizenIdentification;
                userinfo.Role = updatedUserinfo.Role;

                _context.SaveChanges();

                return Ok(userinfo);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error: {ex.Message}");
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteUserinfo(int id)
        {
            try
            {
                var userinfo = _context.Userinfos.FirstOrDefault(x => x.UserId == id);

                if (userinfo == null)
                {
                    return NotFound();
                }

                _context.Userinfos.Remove(userinfo);
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

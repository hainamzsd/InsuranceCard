using InsuranceCardServer.Models;
using Microsoft.AspNetCore.Mvc;

namespace InsuranceCardServer.Controllers
{
    [ApiController]
    [Route("api/[UserController]")]
    public class UserController : ControllerBase
    {
        private readonly Insurance_CardContext _context;

        public UserController(Insurance_CardContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<User> GetAllUsers()
        {
            return _context.Users.ToList();
        }

        [HttpGet("{id}")]
        public ActionResult<User> GetUserById(int id)
        {
            User user = _context.Users.FirstOrDefault(x => x.Id == id);
            if (user == null)
            {
                return NotFound();
            }
            return user;
        }

        [HttpPost]
        public ActionResult<User> CreateUser(User newUser)
        {
            _context.Users.Add(newUser);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetUserById), new { id = newUser.Id }, newUser);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateUser(int id, User updatedUser)
        {
            User user = _context.Users.FirstOrDefault(x => x.Id == id);
            if (user == null)
            {
                return NotFound();
            }

            user.Username = updatedUser.Username;
            user.Password = updatedUser.Password;
            user.Email = updatedUser.Email;
            user.Role = updatedUser.Role;
            // Update other properties as needed

            _context.SaveChanges();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteUser(int id)
        {
            User user = _context.Users.FirstOrDefault(x => x.Id == id);
            if (user == null)
            {
                return NotFound();
            }

            _context.Users.Remove(user);
            _context.SaveChanges();
            return NoContent();
        }
    }

}

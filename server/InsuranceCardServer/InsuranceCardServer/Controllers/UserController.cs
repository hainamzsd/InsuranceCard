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

        public User GetUserByNameAndPass(string userName, string password)
        {
            User user = _context.Users.FirstOrDefault(
                x => x.Username == userName && x.Password == password);
            if (user != null)
            {
                return user;
            }
            return null;
        }
    }
}

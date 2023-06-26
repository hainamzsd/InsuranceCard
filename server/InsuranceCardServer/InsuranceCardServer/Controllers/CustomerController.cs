using InsuranceCardServer.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace InsuranceCardServer.Controllers
{
    public class CustomerController : ControllerBase
    {
        private readonly motorbike_insuranceContext _context;

        public CustomerController(motorbike_insuranceContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Customer> GetAllCustomers()
        {
            return _context.Customers.ToList();
        }

        public IEnumerable<Customer> GetCustomerByUserId(int userId)
        {
            return _context.Customers.FirstOrDefault(x => x.Id == userId);
        }

    }
}

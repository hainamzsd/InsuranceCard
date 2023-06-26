using System;
using System.Collections.Generic;

namespace InsuranceCardServer.Models
{
    public partial class User
    {
        public User()
        {
            Customers = new HashSet<Customer>();
            staff = new HashSet<staff>();
        }

        public int Id { get; set; }
        public string Username { get; set; } = null!;
        public string Password { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string Role { get; set; } = null!;

        public virtual ICollection<Customer> Customers { get; set; }
        public virtual ICollection<staff> staff { get; set; }
    }
}

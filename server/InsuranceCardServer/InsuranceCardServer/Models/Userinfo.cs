using System;
using System.Collections.Generic;

namespace InsuranceCardServer.Models
{
    public partial class Userinfo
    {
        public Userinfo()
        {
            Accounts = new HashSet<Account>();
        }

        public int UserId { get; set; }
        public string Username { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string FullName { get; set; } = null!;
        public string? ContactNumber { get; set; }
        public string? Address { get; set; }
        public string CitizenIdentification { get; set; } = null!;
        public string Role { get; set; } = null!;

        public virtual ICollection<Account> Accounts { get; set; }
    }
}

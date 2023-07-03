using System;
using System.Collections.Generic;

namespace InsuranceCardServer.Models
{
    public partial class Account
    {
        public Account()
        {
            Contracts = new HashSet<Contract>();
        }

        public int AccountId { get; set; }
        public int UserId { get; set; }
        public string Username { get; set; } = null!;
        public string Password { get; set; } = null!;

        public virtual Userinfo User { get; set; } = null!;
        public virtual ICollection<Contract> Contracts { get; set; }
    }
}

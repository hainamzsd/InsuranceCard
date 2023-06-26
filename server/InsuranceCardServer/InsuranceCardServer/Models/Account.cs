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

        public int Id { get; set; }
        public int UserId { get; set; }
        public string FullName { get; set; } = null!;
        public string? ContactNumber { get; set; }
        public string? Address { get; set; }
        public string CitizenIdentification { get; set; } = null!;
        public string Role { get; set; } = null!;

        public virtual User User { get; set; } = null!;
        public virtual ICollection<Contract> Contracts { get; set; }
    }
}

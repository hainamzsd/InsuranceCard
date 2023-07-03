using System;
using System.Collections.Generic;

namespace InsuranceCardServer.Models
{
    public partial class Compensation
    {
        public int CompensationId { get; set; }
        public int ContractId { get; set; }
        public DateTime CompensationDate { get; set; }
        public decimal Amount { get; set; }
        public string? Description { get; set; }

        public virtual Contract Contract { get; set; } = null!;
    }
}

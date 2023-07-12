using System;
using System.Collections.Generic;

namespace InsuranceCardServer.Models
{
    public partial class CompensationRequest
    {
        public int RequestId { get; set; }
        public int ContractId { get; set; }
        public DateTime RequestDate { get; set; }
        public string? Description { get; set; }
        public bool? Resolved { get; set; }

        public virtual Contract? Contract { get; set; } = null!;
    }
}

using System;
using System.Collections.Generic;

namespace InsuranceCardServer.Models
{
    public partial class Accident
    {
        public int Id { get; set; }
        public int ContractId { get; set; }
        public DateTime AccidentDate { get; set; }
        public string? Description { get; set; }

        public virtual Contract Contract { get; set; } = null!;
    }
}

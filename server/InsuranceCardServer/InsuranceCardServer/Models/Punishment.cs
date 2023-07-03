using System;
using System.Collections.Generic;

namespace InsuranceCardServer.Models
{
    public partial class Punishment
    {
        public int PunishmentId { get; set; }
        public int ContractId { get; set; }
        public DateTime PunishmentDate { get; set; }
        public string? Description { get; set; }

        public virtual Contract Contract { get; set; } = null!;
    }
}

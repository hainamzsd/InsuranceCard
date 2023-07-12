using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace InsuranceCardServer.Models
{
    public partial class Punishment
    {
        public int PunishmentId { get; set; }
        public int ContractId { get; set; }
        public DateTime PunishmentDate { get; set; }
        public string? Description { get; set; }
        [JsonIgnore]
        public virtual Contract? Contract { get; set; } = null!;
    }
}

using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace InsuranceCardServer.Models
{
    public partial class Accident
    {
        public int AccidentId { get; set; }
        public int ContractId { get; set; }
        public DateTime AccidentDate { get; set; }
        public string? Description { get; set; }
        public string? Location { get; set; }
        [JsonIgnore]
        public virtual Contract Contract { get; set; } = null!;
    }
}

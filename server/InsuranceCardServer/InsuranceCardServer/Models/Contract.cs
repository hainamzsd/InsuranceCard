using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace InsuranceCardServer.Models
{
    public partial class Contract
    {

        public int ContractId { get; set; }
        public int AccountId { get; set; }
        public string ContractNumber { get; set; } = null!;
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public bool? Active { get; set; }


        [JsonIgnore]
        public virtual Account? Account { get; set; }
        public virtual ICollection<Accident>? Accidents { get; set; }
        public virtual ICollection<CompensationRequest>? CompensationRequests { get; set; }
        public virtual ICollection<Compensation>? Compensations { get; set; }
        public virtual ICollection<Payment>? Payments { get; set; }
        public virtual ICollection<Punishment>? Punishments { get; set; }
    }
}

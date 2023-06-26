using System;
using System.Collections.Generic;

namespace InsuranceCardServer.Models
{
    public partial class Contract
    {
        public Contract()
        {
            Accidents = new HashSet<Accident>();
            CompensationRequests = new HashSet<CompensationRequest>();
            Compensations = new HashSet<Compensation>();
            Payments = new HashSet<Payment>();
            Punishments = new HashSet<Punishment>();
        }

        public int Id { get; set; }
        public int CustomerId { get; set; }
        public string ContractNumber { get; set; } = null!;
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public bool? Active { get; set; }

        public virtual Customer Customer { get; set; } = null!;
        public virtual ICollection<Accident> Accidents { get; set; }
        public virtual ICollection<CompensationRequest> CompensationRequests { get; set; }
        public virtual ICollection<Compensation> Compensations { get; set; }
        public virtual ICollection<Payment> Payments { get; set; }
        public virtual ICollection<Punishment> Punishments { get; set; }
    }
}

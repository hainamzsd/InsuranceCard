using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace InsuranceCardServer.Models
{
    public partial class Account
    {

        public int AccountId { get; set; }
        public int UserId { get; set; }
        public string Username { get; set; } = null!;
        public string Password { get; set; } = null!;
        public virtual Userinfo User { get; set; } = null!;
        [JsonIgnore]
        public virtual ICollection<Contract> Contracts { get; set; }
    }
}

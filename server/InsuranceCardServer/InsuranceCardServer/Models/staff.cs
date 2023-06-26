﻿using System;
using System.Collections.Generic;

namespace InsuranceCardServer.Models
{
    public partial class staff
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string FullName { get; set; } = null!;
        public string? ContactNumber { get; set; }
        public string? Address { get; set; }

        public virtual User User { get; set; } = null!;
    }
}

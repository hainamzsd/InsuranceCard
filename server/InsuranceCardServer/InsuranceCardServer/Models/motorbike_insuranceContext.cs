using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace InsuranceCardServer.Models
{
    public partial class motorbike_insuranceContext : DbContext
    {
        public motorbike_insuranceContext()
        {
        }

        public motorbike_insuranceContext(DbContextOptions<motorbike_insuranceContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Accident> Accidents { get; set; } = null!;
        public virtual DbSet<Account> Accounts { get; set; } = null!;
        public virtual DbSet<Compensation> Compensations { get; set; } = null!;
        public virtual DbSet<CompensationRequest> CompensationRequests { get; set; } = null!;
        public virtual DbSet<Contract> Contracts { get; set; } = null!;
        public virtual DbSet<Payment> Payments { get; set; } = null!;
        public virtual DbSet<Punishment> Punishments { get; set; } = null!;
        public virtual DbSet<Userinfo> Userinfos { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                var builder = new ConfigurationBuilder()
                                                .SetBasePath(Directory.GetCurrentDirectory())
                                                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true);
                IConfigurationRoot configuration = builder.Build();
                optionsBuilder.UseSqlServer(configuration.GetConnectionString("MyCnn"));
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Accident>(entity =>
            {
                entity.ToTable("accident");

                entity.Property(e => e.AccidentId).HasColumnName("accident_id");

                entity.Property(e => e.AccidentDate)
                    .HasColumnType("date")
                    .HasColumnName("accident_date");

                entity.Property(e => e.ContractId).HasColumnName("contract_id");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.Location)
                    .HasMaxLength(100)
                    .HasColumnName("location");

                entity.HasOne(d => d.Contract)
                    .WithMany(p => p.Accidents)
                    .HasForeignKey(d => d.ContractId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_accident_contract");
            });

            modelBuilder.Entity<Account>(entity =>
            {
                entity.ToTable("account");

                entity.Property(e => e.AccountId).HasColumnName("account_id");

                entity.Property(e => e.Password)
                    .HasMaxLength(100)
                    .HasColumnName("password");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.Property(e => e.Username)
                    .HasMaxLength(50)
                    .HasColumnName("username");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Accounts)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_account_userinfo");
            });

            modelBuilder.Entity<Compensation>(entity =>
            {
                entity.ToTable("compensation");

                entity.Property(e => e.CompensationId).HasColumnName("compensation_id");

                entity.Property(e => e.Amount)
                    .HasColumnType("decimal(10, 2)")
                    .HasColumnName("amount");

                entity.Property(e => e.CompensationDate)
                    .HasColumnType("date")
                    .HasColumnName("compensation_date");

                entity.Property(e => e.ContractId).HasColumnName("contract_id");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.HasOne(d => d.Contract)
                    .WithMany(p => p.Compensations)
                    .HasForeignKey(d => d.ContractId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_compensation_contract");
            });

            modelBuilder.Entity<CompensationRequest>(entity =>
            {
                entity.HasKey(e => e.RequestId)
                    .HasName("PK__compensa__18D3B90F7A7B8C33");

                entity.ToTable("compensation_request");

                entity.Property(e => e.RequestId).HasColumnName("request_id");

                entity.Property(e => e.ContractId).HasColumnName("contract_id");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.RequestDate)
                    .HasColumnType("date")
                    .HasColumnName("request_date");

                entity.Property(e => e.Resolved)
                    .HasColumnName("resolved")
                    .HasDefaultValueSql("((0))");

                entity.HasOne(d => d.Contract)
                    .WithMany(p => p.CompensationRequests)
                    .HasForeignKey(d => d.ContractId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_request_contract");
            });

            modelBuilder.Entity<Contract>(entity =>
            {
                entity.ToTable("contract");

                entity.Property(e => e.ContractId).HasColumnName("contract_id");

                entity.Property(e => e.AccountId).HasColumnName("account_id");

                entity.Property(e => e.Active)
                    .HasColumnName("active")
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.ContractNumber)
                    .HasMaxLength(50)
                    .HasColumnName("contract_number");

                entity.Property(e => e.EndDate)
                    .HasColumnType("date")
                    .HasColumnName("end_date");

                entity.Property(e => e.StartDate)
                    .HasColumnType("date")
                    .HasColumnName("start_date");

                entity.HasOne(d => d.Account)
                    .WithMany(p => p.Contracts)
                    .HasForeignKey(d => d.AccountId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_contract_account");
            });

            modelBuilder.Entity<Payment>(entity =>
            {
                entity.ToTable("payment");

                entity.Property(e => e.PaymentId).HasColumnName("payment_id");

                entity.Property(e => e.Amount)
                    .HasColumnType("decimal(10, 2)")
                    .HasColumnName("amount");

                entity.Property(e => e.ContractId).HasColumnName("contract_id");

                entity.Property(e => e.PaymentDate)
                    .HasColumnType("date")
                    .HasColumnName("payment_date");

                entity.Property(e => e.PaymentMethod)
                    .HasMaxLength(50)
                    .HasColumnName("payment_method");

                entity.HasOne(d => d.Contract)
                    .WithMany(p => p.Payments)
                    .HasForeignKey(d => d.ContractId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_payment_contract");
            });

            modelBuilder.Entity<Punishment>(entity =>
            {
                entity.ToTable("punishment");

                entity.Property(e => e.PunishmentId).HasColumnName("punishment_id");

                entity.Property(e => e.ContractId).HasColumnName("contract_id");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.PunishmentDate)
                    .HasColumnType("date")
                    .HasColumnName("punishment_date");

                entity.HasOne(d => d.Contract)
                    .WithMany(p => p.Punishments)
                    .HasForeignKey(d => d.ContractId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_punishment_contract");
            });

            modelBuilder.Entity<Userinfo>(entity =>
            {
                entity.HasKey(e => e.UserId)
                    .HasName("PK__userinfo__B9BE370FD7DE6F72");

                entity.ToTable("userinfo");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.Property(e => e.Address)
                    .HasMaxLength(255)
                    .HasColumnName("address");

                entity.Property(e => e.CitizenIdentification)
                    .HasMaxLength(20)
                    .HasColumnName("citizen_identification");

                entity.Property(e => e.ContactNumber)
                    .HasMaxLength(20)
                    .HasColumnName("contact_number");

                entity.Property(e => e.Email)
                    .HasMaxLength(100)
                    .HasColumnName("email");

                entity.Property(e => e.FullName)
                    .HasMaxLength(100)
                    .HasColumnName("full_name");

                entity.Property(e => e.Role)
                    .HasMaxLength(50)
                    .HasColumnName("role");

                entity.Property(e => e.Username)
                    .HasMaxLength(50)
                    .HasColumnName("username");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}

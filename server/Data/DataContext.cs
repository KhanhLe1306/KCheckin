using Microsoft.EntityFrameworkCore;
using server.Entities;
using System.Collections.Generic;

namespace server.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options) { }

        public virtual DbSet<Customer> Customers { get; set; }
        public virtual DbSet<Visit> Visits { get; set; }
        public virtual DbSet<Service> Services { get; set; }
        public virtual DbSet<VisitService> VisitsServices { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            new DbInitializer(modelBuilder).Seed();
        }

    }
}
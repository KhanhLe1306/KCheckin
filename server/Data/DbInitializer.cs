using Microsoft.EntityFrameworkCore;
using server.Entities;

namespace server.Data
{
    public class DbInitializer
    {
        private readonly ModelBuilder modelBuilder;

        public DbInitializer(ModelBuilder modelBuilder)
        {
            this.modelBuilder = modelBuilder;
        }

        public void Seed()
        {
            modelBuilder.Entity<Service>().HasData(
                    new Service { ServiceId = 1, ServiceName = "Acrylic set" },
                    new Service { ServiceId = 2, ServiceName = "Acrylic fill" },
                    new Service { ServiceId = 3, ServiceName = "Dip powder" },
                    new Service { ServiceId = 4, ServiceName = "Pedicure" },
                    new Service { ServiceId = 5, ServiceName = "Shellac Manicure" }
            );
        }
    }
}
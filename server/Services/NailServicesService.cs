using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Entities;

namespace server.Services
{
    public interface INailServicesService
    {
        Task<List<Service>> AllServices();
        Task<Service> AddService(Service service);
    }

    public class NailServicesService : INailServicesService
    {
        private DataContext _context;
        public NailServicesService(DataContext context)
        {
            this._context = context;
        }
        public async Task<List<Service>> AllServices()
        {
            return await _context.Services.ToListAsync();
        }
        public async Task<Service> AddService(Service service)
        {
            var s = await _context.Services.AddAsync(new Service
            {
                ServiceName = service.ServiceName
            });
            await _context.SaveChangesAsync();
            return s.Entity;
        }
    }
}
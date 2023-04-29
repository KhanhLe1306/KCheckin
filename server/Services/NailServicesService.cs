using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Entities;

namespace server.Services
{
    public interface INailServicesService{
        Task<List<Service>> AllServices();
    }

    public class NailServicesService : INailServicesService
    {
        private DataContext _context;
        public NailServicesService(DataContext context){
            this._context = context;
        }
        public async Task<List<Service>> AllServices(){
            return await _context.Services.ToListAsync();
        }        
    }
}
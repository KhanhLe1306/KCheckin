using Microsoft.AspNetCore.Mvc;
using server.Entities;
using server.Services;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NailServiceController : ControllerBase
    {
        private INailServicesService _nailServicesService;
        public NailServiceController(INailServicesService nailServicesService)
        {
            _nailServicesService = nailServicesService;
        }
        [HttpGet]
        public async Task<ActionResult<List<Service>>> AllServices()
        {
            Console.WriteLine("Get All services");
            return await _nailServicesService.AllServices();
        }
        [HttpPost]
        public async Task<ActionResult<Service>> AddService(Service serviceName)
        {
            Console.WriteLine("Add single service");
            return await _nailServicesService.AddService(serviceName);
        }
    }
}
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
            return await _nailServicesService.AllServices();
        }
    }
}
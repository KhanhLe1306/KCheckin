using Microsoft.AspNetCore.Mvc;
using server.DTOs;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok("Hello");
        }

        [HttpPost("checkin")]
        public async Task<IActionResult> CustomerCheckin(CustomerDTO customerDTO)
        {
            return Ok();
        }
    }
}

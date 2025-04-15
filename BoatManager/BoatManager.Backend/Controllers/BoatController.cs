using Microsoft.AspNetCore.Mvc;

namespace BoatManager.Backend.Controllers;

[Route("api/[controller]")]
[ApiController]
public class BoatController : ControllerBase
{
    [HttpGet]
    public async Task<ActionResult<List<Boat>>> GetBoats()
    {
        var boats = new List<Boat>();
        boats.Add(new Boat(1, "my fancy boat", "this is a really nice boat"));
        boats.Add(new Boat(2, "Boat 2", "also a really nice boat"));
        boats.Add(new Boat(3, "Boat 3", "this is not so nice"));

        return Ok(boats);
    }
}

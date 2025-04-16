using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BoatManager.Backend.Controllers;

[Route("api/[controller]")]
[ApiController]
public class BoatController : ControllerBase
{
    private readonly AppDbContext _context;
    public BoatController(AppDbContext context)
    {
        _context = context;        
    }

    [HttpGet]
    public async Task<ActionResult<List<Boat>>> GetBoats()
    {
        return Ok(await _context.Boats.ToListAsync());
    }
}

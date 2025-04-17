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

    [HttpPost]
    public async Task<ActionResult<Boat>> CreateBoat([FromBody] Boat boat)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);
        _context.Boats.Add(boat);
        await _context.SaveChangesAsync();
        return Ok(boat);
    }

    [HttpPut]
    public async Task<ActionResult<Boat>> UpdateBoat([FromBody] Boat boat)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);
        if (await _context.Boats.AnyAsync(s => s.Id == boat.Id) == false)
            return NotFound();
        _context.Boats.Update(boat);
        await _context.SaveChangesAsync();
        return Ok(boat);
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult> DeleteBoat([FromRoute] Guid id)
    {
        var boat = await _context.Boats.FindAsync(id);
        if(boat == null)
            return NotFound();
        _context.Boats.Remove(boat);
        await _context.SaveChangesAsync();
        return Ok();
    }
}

using Microsoft.EntityFrameworkCore;

namespace BoatManager.Backend;
public class AppDbContext : DbContext
{
    public DbSet<Boat> Boats { get; set; }

    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }
}

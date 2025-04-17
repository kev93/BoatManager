using System.ComponentModel.DataAnnotations;

namespace BoatManager.Backend;

public class Boat
{
    public Guid Id { get; private set; }
    
    [Required]
    [StringLength(30, MinimumLength = 3, ErrorMessage = "Name must be between 3 and 30 characters long.")]
    public string Name { get; private set; }

    [StringLength(100, ErrorMessage = "Details must not be greater than 100 characters.")]
    public string Details { get; private set; }

    public Boat(Guid id, string name, string details)
    {
        Id = id;
        Name = name;
        Details = details;
    }
}

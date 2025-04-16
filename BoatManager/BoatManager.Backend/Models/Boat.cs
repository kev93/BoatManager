namespace BoatManager.Backend;

public class Boat
{
    public Guid Id { get; private set; }
    public string Name { get; private set; }
    public string Details { get; private set; }

    public Boat(string name, string details)
    {
        Id = Guid.NewGuid();
        Name = name;
        Details = details;        
    }
}

namespace BoatManager.Backend;

public class Boat
{
    public int Id { get; private set; }
    public string Name { get; private set; }
    public string Details { get; private set; }

    public Boat(int id, string name, string details)
    {
        Id = id;
        Name = name;
        Details = details;        
    }
}

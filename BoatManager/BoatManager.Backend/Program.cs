using BoatManager.Backend;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<AppDbContext>(options => options.UseInMemoryDatabase("BoatDb"));
builder.Services.AddCors(options => options.AddPolicy(name: "BoatOrigins",
    policy => 
    {
        policy.WithOrigins("http://localhost:57211").AllowAnyMethod().AllowAnyHeader();
    }));

var app = builder.Build();

// Add some pseudo data to the database
using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    db.Boats.AddRange(
        new Boat("my fancy boat", "this is a really nice boat"),
        new Boat("Boat 2", "also a really nice boat"),
        new Boat("Boat 3", "this is not so nice"),
        new Boat("Another Boat", "this is not so nice")
    );
    db.SaveChanges();
}

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("BoatOrigins");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

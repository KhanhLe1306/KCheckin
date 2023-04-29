using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle

builder.Services.AddTransient<INailServicesService, NailServicesService>();

builder.Services.AddEndpointsApiExplorer();

builder.Services.AddDbContext<DataContext>(options =>
{
    options.UseSqlite(builder.Configuration.GetConnectionString("KCheckinDB"));
});

builder.Services.AddCors(c =>
{
    c.AddPolicy("AllowOrigin", option => option.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
});


var app = builder.Build();

// Configure the HTTP request pipeline.


app.UseHttpsRedirection();

app.UseCors(x => x.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());

app.UseAuthorization();

app.MapControllers();

app.Run();

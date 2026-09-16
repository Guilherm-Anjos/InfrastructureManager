var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();
builder.Services.AddCors(options =>
{
    options.AddPolicy(" PermitirFrontend", policy =>
    {
        policy.WithOrigins("http://127.0.0.1:5500");
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();
app.UseCors("PermitirFrontend");

app.MapGet("/api/infraestrutura", () =>
{
    return new
    {
        servidores = 12,
        switches = 8,
        ativos = 50,
        redes = 4,
        incidentes = 8
    };
});

app.Run();


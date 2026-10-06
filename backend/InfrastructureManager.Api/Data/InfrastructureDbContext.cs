using Microsoft.EntityFrameworkCore;
using InfrastructureManager.Api.Models;

namespace InfrastructureManager.Api.data;

public class InfrastructureDbContext : DbContext
{
    public InfrastructureDbContext(DbContextOptions<InfrastructureDbContext> options)
       : base(options)
    {
    }

    public DbSet<Servidor> Servidores { get; set; }
}


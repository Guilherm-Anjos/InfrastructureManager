namespace InfrastructureManager.Api.Models;

public class Servidor
{
    public int Id { get; set; }
    public string Nome { get; set; } = string.Empty;

    public string Ip { get; set; } = string.Empty;

    public string SistemaOperacional { get; set; } = string.Empty;
}
# InfrastructureManager 🌐

> **Projeto de Conclusão de Curso (TCC)** desenvolvido para o curso de Análise e Desenvolvimento de Sistemas] na Impacta.

O **InfrastructureManager** é um sistema web corporativo focado no gerenciamento, controle e monitoramento de ativos de infraestrutura de TI. 
A aplicação visa centralizar o registro de recursos, gerenciar permissões e facilitar a tomada de decisões estratégicas por meio de uma interface intuitiva e um back-end de alta performance.

---

## 🚀 Funcionalidades Principais (Escopo do TCC)
* **Cadastro e Inventário de Ativos:** Registro detalhado de servidores, redes, switches e demais equipamentos.
* **Monitoramento e Status:** Visualização em tempo real da disponibilidade e integridade dos recursos.
* **Filtros e Relatórios Dinâmicos:** Busca avançada de dispositivos por setor, criticidade ou tipo.
* **Camada de API Segura:** Processamento centralizado de regras de negócio com controle de acessos.

---

## 🛠️ Stack Tecnológica

O projeto foi construído utilizando uma arquitetura moderna dividida entre uma interface responsiva e um ecossistema robusto para persistência e processamento de dados:

### Front-end
* **HTML5:** Estruturação semântica de todas as páginas da aplicação.
* **CSS3:** Design visual personalizado, definição de layout e total responsividade.
* **JavaScript:** Interatividade da interface, manipulação dinâmica de menus, filtros avançados e renderização de gráficos.

### Back-end & Banco de Dados
* **C#:** Linguagem principal utilizada para o desenvolvimento das regras de negócio e processamento de dados.
* **ASP.NET Core:** Framework utilizado na construção da API e da estrutura robusta da aplicação web.
* **SQL Server:** Banco de dados relacional robusto escalável para o armazenamento seguro de todas as informações.
* **Entity Framework Core (EF Core):** ORM responsável pela ponte e comunicação otimizada entre o código C# e o SQL Server.

---

## 💻 Como rodar o projeto localmente

1. **Clone o repositório:**
   ```bash
   git clone https://github.com
   ```
2. **Requisitos Prévios:**
   * .NET SDK instalado.
   * SQL Server configurado localmente ou via container Docker.
3. **Configuração do Banco:**
   * Atualize a string de conexão no arquivo de configuração do Back-end.
   * Execute as Migrations para criar as tabelas no SQL Server:
     ```bash
     dotnet ef database update
     ```
4. **Execução:**
   * Inicie o projeto do Back-end pelo terminal (`dotnet run`) ou via Visual Studio.
   * Abra a interface web utilizando um servidor local (como a extensão Live Server do VS Code).

---

## 🎓 Autor
* **Guilherme Rodrigues dos Anjos** - https://www.linkedin.com/in/guilhermedosaanjos/

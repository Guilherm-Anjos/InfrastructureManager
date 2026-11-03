function carregarServidores() {
    fetch("http://localhost:5100/api/servidores")
        .then(resposta => resposta.json())
        .then(dados => {
            console.log(dados);

            const tabela = document.getElementById("lista-servidores");
            tabela.innerHTML = "";
            
            dados.forEach(servidor => {
                console.log(servidor.nome);
            const linha = document.createElement("tr");
            linha.innerHTML = `
                <td>${servidor.nome}</td>
                <td>${servidor.ip}</td>
                <td>${servidor.sistemaOperacional}</td>
                <td>${servidor.status}</td>`;

            tabela.appendChild(linha);

            });
        });
}

carregarServidores();
const formulario = document.getElementById("formulario-servidor");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Formulário enviado!");
});


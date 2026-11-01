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
            linha.innerHTML = `<td>${servidor.nome}</td>`;

            });
        });
}

carregarServidores();
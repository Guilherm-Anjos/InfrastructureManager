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
            <td>${servidor.status}</td>
                            <td>
            <button class="botao-editar" data-id="${servidor.id}">Editar</button>
            <button class="botao-excluir" data-id="${servidor.id}">Excluir</button>
            </td>`
            ;

            tabela.appendChild(linha);
                const botaoEditar = linha.querySelector(".botao-editar");
                const botaoExcluir = linha.querySelector(".botao-excluir");

            botaoEditar.addEventListener("click", function() {
            console.log("Editar servidor de ID:", servidor.id);
            
            idServidorEmEdicao = servidor.id;

            document.getElementById("nome-servidor").value = servidor.nome;
            document.getElementById("ip-servidor").value = servidor.ip;
            document.getElementById("sistema-operacional").value = servidor.sistemaOperacional;
            document.getElementById("status-servidor").value = servidor.status; 
                });

            botaoExcluir.addEventListener("click", function() {
            const confirmar = confirm(
            `Tem certeza que deseja excluir o servidor ${servidor.nome}?`
                );

           if (confirmar) {
            fetch(`http://localhost:5100/api/servidores/${servidor.id}`, {
                method: "DELETE"
            })
    .then(resposta => {
        if (resposta.ok) {
            console.log("Servidor excluído com sucesso!");
            carregarServidores();
        } else {
            console.log("Erro ao excluir servidor:", resposta.status);
        }
    })
    .catch(erro => {
        console.error("Erro na comunicação com a API:", erro);
    });
}
             else {
            console.log("Exclusão cancelada.");
            }
                });
            });
        });
}

let idServidorEmEdicao = null;
carregarServidores();
const formulario = document.getElementById("formulario-servidor");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Formulário enviado!");

    const nome = document.getElementById("nome-servidor").value;
    console.log("Nome do servidor:", nome);

    const ip = document.getElementById("ip-servidor").value;
    console.log("IP do servidor:", ip);

    const sistemaOperacional = document.getElementById("sistema-operacional").value;
    console.log("Sistema Operacional:", sistemaOperacional);

    const status = document.getElementById("status-servidor").value;
    console.log("Status do Servidor:", status);

    const novoServidor = {
    nome: nome,
    ip: ip,
    sistemaOperacional: sistemaOperacional,
    status: status
};

    console.log("Dados preparados para cadastro:", novoServidor);

    const metodo = idServidorEmEdicao === null ? "POST" : "PUT";

    const url = idServidorEmEdicao === null
    ? "http://localhost:5100/api/servidores"
    : `http://localhost:5100/api/servidores/${idServidorEmEdicao}`;

    fetch(url, {
        method: metodo,
        headers: {
        "Content-Type": "application/json"
},
    body: JSON.stringify(novoServidor)
})
.then(resposta => {
    console.log("Status HTTP:", resposta.status);
    console.log("Operação realizada com sucesso?", resposta.ok);

 if (resposta.ok) {
    carregarServidores();
    formulario.reset();
    idServidorEmEdicao = null;
}
});

});


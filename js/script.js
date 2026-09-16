console.log("Script carregado com sucesso!");

const infraestrutura = {
    servidores: 12,
    switches: 8,
    ativos: 50,
    redes: 4,
    incidentes: 8
};

console.log(infraestrutura.servidores);

function exibirMensagem(mensagem) {
    console.log(mensagem);
}

exibirMensagem("Infrastructure Manager");


function atualizarQuantidade(id, quantidade) {
    const elemento = document.getElementById(id);
    elemento.textContent = quantidade;
    
}

const botaoAtualizar = document.getElementById("botao-atualizar");
    console.log("Solicitando dados da infraestrutura...");
    fetch("http://localhost:5100/api/infraestrutura")
        .then(resposta => resposta.json());

botaoAtualizar.addEventListener("click", function() {
    atualizarQuantidade("quantidade-servidores", infraestrutura.servidores);
    atualizarQuantidade("quantidade-switches", infraestrutura.switches);
    atualizarQuantidade("quantidade-ativos", infraestrutura.ativos);
    atualizarQuantidade("quantidade-redes", infraestrutura.redes);
    atualizarQuantidade("quantidade-incidentes", infraestrutura.incidentes);
});
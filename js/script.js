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

atualizarQuantidade("quantidade-servidores", infraestrutura.servidores);

atualizarQuantidade("quantidade-switches", infraestrutura.switches);

atualizarQuantidade("quantidade-ativos", infraestrutura.ativos);

atualizarQuantidade("quantidade-redes", infraestrutura.redes);

atualizarQuantidade("quantidade-incidentes", infraestrutura.incidentes);

const botaoAtualizar = document.getElementById("botao-atualizar");
console.log(botaoAtualizar);
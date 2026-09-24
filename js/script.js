
function exibirMensagem(mensagem) {
    console.log(mensagem);
}

exibirMensagem("Infrastructure Manager");


function atualizarQuantidade(id, quantidade) {
    const elemento = document.getElementById(id);
    elemento.textContent = quantidade;
    
}

const botaoAtualizar = document.getElementById("botao-atualizar");

function carregarInfraestrutura() {
    console.log("Solicitando dados da infraestrutura...");
    
    fetch("http://localhost:5100/api/infraestrutura")
        .then(resposta => resposta.json())
        .then(dados => {
            console.log(dados);
            console.log(dados.servidores);

            atualizarQuantidade("quantidade-servidores", dados.servidores);
            atualizarQuantidade("quantidade-switches", dados.switches);
            atualizarQuantidade("quantidade-ativos", dados.ativos);
            atualizarQuantidade("quantidade-redes", dados.redes);
            atualizarQuantidade("quantidade-incidentes", dados.incidentes);
        })
        .catch(erro => {
            console.log("Erro ao carregar dados da infraestrutura:", erro);
        });
}
carregarInfraestrutura();

botaoAtualizar.addEventListener("click", function() {
    carregarInfraestrutura();
});
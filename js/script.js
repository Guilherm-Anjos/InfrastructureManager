console.log("Script carregado com sucesso!");

const infraestrutura = {
    servidores: 12,
    switches: 8,
    ativos: 50,
    redes: 4,
    incidentes: 8
};

/* Servidores */

const elementoServidores = document.getElementById("quantidade-servidores");
elementoServidores.textContent = infraestrutura.servidores;

/* Switches */

const elementoSwitches = document.getElementById("quantidade-switches");
elementoSwitches.textContent = infraestrutura.switches;

/* Ativos */

const elementoAtivos = document.getElementById("quantidade-ativos");
elementoAtivos.textContent = infraestrutura.ativos;

/* Redes */

const elementoRedes = document.getElementById("quantidade-redes");
elementoRedes.textContent = infraestrutura.redes;

/* Incidentes */

const elementoIncidentes = document.getElementById("quantidade-incidentes");
elementoIncidentes.textContent = infraestrutura.incidentes;

console.log(infraestrutura.servidores);

function exibirMensagem() {
    console.log("Infrastruture Manager");
}

exibirMensagem();
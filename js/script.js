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
console.log(elementoServidores);

elementoServidores.textContent = infraestrutura.servidores;

/* Switches */
const quantidadeSwitches = 8;
const elementoSwitches = document.getElementById("quantidade-switches");
console.log(elementoSwitches);

elementoSwitches.textContent = quantidadeSwitches;

/* Ativos */
const quantidadeAtivos = 50;
const elementoAtivos = document.getElementById("quantidade-ativos");
console.log(elementoAtivos);

elementoAtivos.textContent = quantidadeAtivos;

/* Redes */
const quantidadeRedes = 4;
const elementoRedes = document.getElementById("quantidade-redes");
console.log(elementoRedes);
elementoRedes.textContent = quantidadeRedes;

/* Incidentes */
const quantidadeIncidentes = 8;
const elementoIncidentes = document.getElementById("quantidade-incidentes");
console.log(elementoIncidentes);
elementoIncidentes.textContent = quantidadeIncidentes;

console.log(infraestrutura.servidores);
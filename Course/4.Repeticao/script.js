import { dataTeams } from "../1.TiposDeDados/script.js";

// A Base:
// ForOF - Mais fácil - percorre todos
// For - Mais completa

// Mais Usados:
// Map - Retorna um array
// ForEach - Para todos faz algo
// Find - Procura
// Filter - Filtra
// Reduce - Reduz

// Menos Usados:
// Some - Verifica
// Sort - Ordena
// Every - Verifica se todos é


// Começando  com o ForOf: 
// Ele PERCORRE todo o array

// Exibindo o nome de todos os times
for (const element of dataTeams) {
    // console.log(element.name);
};

// console.log();

// Com FOR:
// Exibindo o nome de todos os times
for (let index = 0; index < dataTeams.length; index++) {
    const element = dataTeams[index];

    console.log(element.name);
};


// console.log();

// Com ForEach
// Exibindo o nome de todos os times:

dataTeams.forEach((element, index) => {
    console.log(element.name);
});

// console.log();

// O MAP vai criar um novo array de nomes
const names = dataTeams.map((e, i) => e.name);
// console.log(names);


// O MAP vai criar um novo array de nomes
const namesWestern = dataTeams.filter((e, i) => e.conference === "Eastern Conference")
.map((e) => e.name)
console.log(namesWestern)



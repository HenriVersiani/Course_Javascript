// IMPORTAÇÕES
import { rankingWestern, rakingEastern } from "./data/data.js";
import { handleCreateTable } from "./scripts/createTable.js";

// Seletores
const tdbodyConference = document.getElementById('tbody-conference');
const btnWestern = document.getElementById('btn-western');
const btnEastern = document.getElementById('btn-eastern');

// Eventos
window.addEventListener('load', () => {
    // Chamadas
    handleCreateTable(tdbodyConference, rankingWestern);
});

btnWestern.addEventListener('click', (event) => {
    event.preventDefault();
    handleCreateTable(tdbodyConference, rankingWestern);
});

// EVENTO de CLICK
btnEastern.addEventListener('click', (event) => {
    event.preventDefault();
    handleCreateTable(tdbodyConference, rakingEastern);
});
// IMPORTAÇÕES
import { rankingWestern, rakingEastern } from "./src/data/data.js";
import { handleCreateTable } from "./src/scripts/createTable.js";
import { listConferencePlayers } from "./src/scripts/listConferencePlayers.js";

// Seletores
const tdbodyConference = document.getElementById('tbody-conference');
const btnWestern = document.getElementById('btn-western');
const btnEastern = document.getElementById('btn-eastern');

let trTeam = null;

// Eventos
window.addEventListener('load', () => {
    // Chamadas
    handleCreateTable(tdbodyConference, rankingWestern);
    trTeam = document.querySelectorAll('.tr-team'); 
    listConferencePlayers(trTeam, rankingWestern)
});

btnWestern.addEventListener('click', (event) => {
    event.preventDefault();
    handleCreateTable(tdbodyConference, rankingWestern);
    trTeam = document.querySelectorAll('.tr-team'); 
    listConferencePlayers(trTeam, rankingWestern)
});

// EVENTO de CLICK
btnEastern.addEventListener('click', (event) => {
    event.preventDefault();
    handleCreateTable(tdbodyConference, rakingEastern);
    trTeam = document.querySelectorAll('.tr-team');
    listConferencePlayers(trTeam, rakingEastern)
});
// IMPORTAÇÕES
import { rankingWestern, rakingEastern } from "./data/data.js";
import { handleCreateTable } from "./scripts/createTable.js";

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

    trTeam.forEach((element, index) => {
        element.addEventListener('click', ({ target }) => {
            const name = rankingWestern[index].team;
            window.location.href = `./pages/team/?name=${name}`
        });
    });

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
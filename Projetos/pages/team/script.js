import { playersWestern } from "../../data/jogadores.js";
import { handleCreateTablePlayers } from "../../scripts/createTable.js";

const tbodyPlayer = document.getElementById("tbody-player")

const param = new URLSearchParams(window.location.search);
const idTeam = param.get('id');

const team = playersWestern.filter((team)=>{
    return team.id == idTeam
})

handleCreateTablePlayers(tbodyPlayer, team)




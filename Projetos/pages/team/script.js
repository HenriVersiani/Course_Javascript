import { playersWestern } from "../../data/jogadores.js";
import { handleCreateTablePlayers } from "../../scripts/createTable.js";

const tbodyPlayer = document.getElementById("tbody-player")
const teamTitle = document.getElementById("title")

const param = new URLSearchParams(window.location.search);
const nameTeam = param.get('name');

const findTeam = playersWestern.find(team => team.team == nameTeam)

console.log(findTeam)

if(findTeam){
    teamTitle.innerHTML = findTeam.team
    handleCreateTablePlayers(tbodyPlayer, findTeam.players)
}else{
    teamTitle.innerHTML = "Not Found"
}


 





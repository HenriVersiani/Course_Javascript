import { playersWestern } from "../../data/jogadores.js";
import { handleCreateTablePlayers } from "../../scripts/createTable.js";
import { playersEastern } from "../../data/jogadores.js"; 

function handleVerifyTeams(){
    const tbodyPlayer = document.getElementById("tbody-player")
    const teamTitle = document.getElementById("title")

    const param = new URLSearchParams(window.location.search);
    const nameTeam = param.get('name');

    const allTeams = [...playersWestern, ...playersEastern]

    const findTeam = allTeams.find(team => team.team.includes(nameTeam))

    console.log(findTeam)

    if(findTeam){
        teamTitle.innerHTML = findTeam.team
        handleCreateTablePlayers(tbodyPlayer, findTeam.players)
    }

    if(!findTeam){
        teamTitle.innerHTML = "Not found"
    }
}

handleVerifyTeams()


 





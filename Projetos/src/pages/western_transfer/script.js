import { getAllTeams, getTeamById } from "../../services/fetchApi.js";

async function main(){
    const result = await getAllTeams();
    const result2 = await getTeamById(3415);
    const AllIdTeams = result.standings[8].rows.map(e => ({
        time: e.team.name,
        id: e.team.id
    }))
    console.log(AllIdTeams)
}

main();
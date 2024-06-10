import { fetchAllTeams, getTeamById } from "../../services/fetchApi.js";

// async function main(){
//     // const allTeams = await fetchAllTeams();
//     // const result2 = await getTeamById(3415);
//     // const AllIdTeams = allTeams.standings[8].rows.map(e => ({
//     //     time: e.team.name,
//     //     id: e.team.id
//     // }))
//     // console.log(AllIdTeams)
// }

function createListTeams(array) {
    // Essa vai ser sua TAREFA
};


window.addEventListener('load', async () => {
    const allTeams = await fetchAllTeams();
    const listAllTeams = allTeams.standings[8].rows.map(e => (
        {
            id: e.team.id,
            team: e.team.name,
            slug: e.team.slug
        }
    ));


});
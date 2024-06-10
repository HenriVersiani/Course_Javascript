import { fetchAllTeams, getTeamById } from "../../services/fetchApi.js";
import { mock } from "../../services/mock.js";

// async function main(){
//     // const allTeams = await fetchAllTeams();
//     // const result2 = await getTeamById(3415);
//     // const AllIdTeams = allTeams.standings[8].rows.map(e => ({
//     //     time: e.team.name,
//     //     id: e.team.id
//     // }))
//     // console.log(AllIdTeams)
// }

const tbodyTeams = document.getElementById('tbody-teams');

export function createListTeams(tbody, data) {
    return data.forEach((element) => {
        tbody.innerHTML += `
        <tr>
            <td class="">${element.team}</td>
        </tr>
        `;
    });
};


window.addEventListener('load', async () => {
    const allTeams = mock;


    const listAllTeams = allTeams.standings[8].rows.map(e => (
        {
            id: e.team.id,
            team: e.team.name,
            slug: e.team.slug
        }
    ));
    createListTeams(tbodyTeams, listAllTeams)
});
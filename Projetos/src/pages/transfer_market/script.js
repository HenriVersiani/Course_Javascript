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
let allTeams = null

export function createListTeams(tbody, data) {
    tbody.innerHTML = '';
    return data.forEach((element) => {
        tbody.innerHTML += `
        <div class="col-lg-6 col-12">
            <h5 class="p-4">${element.team}</h5>
        </div>
        `;
    });
};


window.addEventListener('load', async () => {

    if(allTeams === null){
        tbodyTeams.innerHTML = `
        <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>`
    }

    allTeams = await fetchAllTeams()

    if (allTeams.standings) {
        const listAllTeams = allTeams.standings[8].rows.map(e => (
            {
                id: e.team.id,
                team: e.team.name,
                slug: e.team.slug
            }
        ));
        return createListTeams(tbodyTeams, listAllTeams)
    }

    const listAllMockTeams = mock.standings[8].rows.map(e => (
        {
            id: e.team.id,
            team: e.team.name,
            slug: e.team.slug
        }
    ));
    return createListTeams(tbodyTeams, listAllMockTeams)
});


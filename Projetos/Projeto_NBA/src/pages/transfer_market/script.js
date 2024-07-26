import { fetchAllTeams, getTeamById } from "../../services/fetchApi.js";
import { mock } from "../../services/mock.js";
import { teamImages } from "../../data/data.js";
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
    return data.forEach((element, index) => {
        tbody.innerHTML += `
        <div id="" class="col-lg-6 col-12">
            <div class="card-team" onmouseover="this.style.backgroundColor='${element.color}'" onmouseout="this.style.backgroundColor='#b3b3b3f5'" >
                <img class="img-fluid" src='${teamImages[index]}'/>
                <h5 class="p-4">${element.team}</h5>
            </div>
        </div>
        `;
    });
};


window.addEventListener('load', async () => {

    if(allTeams === null){
        tbodyTeams.innerHTML = `
        <div class="spinner-border text-primary" role="status" >
            <span class="visually-hidden">Loading...</span>
        </div>`
    }

    allTeams = await fetchAllTeams()

    if (allTeams.standings) {
        const listAllTeams = allTeams.standings[8].rows.map(e => (
            {
                id: e.team.id,
                team: e.team.name,
                slug: e.team.slug,
                color: e.team.teamColors.primary
            }
        ));
        console.log(allTeams)

        return createListTeams(tbodyTeams, listAllTeams)
    }

    const listAllMockTeams = mock.standings[8].rows.map(e => (
        {
            id: e.team.id,
            team: e.team.name,
            slug: e.team.slug,
            color: e.team.teamColors.primary
        }
    ));
    return createListTeams(tbodyTeams, listAllMockTeams)
});




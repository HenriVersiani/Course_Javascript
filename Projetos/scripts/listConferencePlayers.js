export function listConferencePlayers(conference, data){
    conference.forEach((element, index) => {
        element.addEventListener('click',() => {
            const name = data[index].team;
            window.location.href = `./pages/team/?name=${name}`
        });
    }); 
}
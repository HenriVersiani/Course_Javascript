export function handleCreateTable(tbody, data) {
    tbody.innerHTML = '';
    return data.forEach((element, index) => {
        tbody.innerHTML += `
        <tr class="tr-team">
            <th scope="row">${index + 1}</th>
            <td id="${element.id}"><img src="${element.imgLogo}" class="mx-2">${element.team}</td>
            <td class="text-center">${element.win + element.loss}</td>
            <td class="text-center">${element.win}</td>
            <td class="text-center">${element.loss}</td>
        </tr>
        `;
    });
};

export function handleCreateTablePlayers(tbody, data) {
    tbody.innerHTML = '';
    console.log(tbody, data[0].players)
    return data[0].players.forEach((element, index) => {
        tbody.innerHTML += `
        <tr>

            <td class="d-flex justify-content-around">
                <div> ${element.img}</div>
                <div>${element.name}</div>
            </td>
        </tr>
        `;
    });
};

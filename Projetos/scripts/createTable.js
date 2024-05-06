export function handleCreateTable(tbody, data) {
    tbody.innerHTML = '';
    return data.forEach((element, index) => {
        tbody.innerHTML += `
        <tr>
            <th scope="row">${index + 1}</th>
            <td> <img src="${element.imgLogo}" class="mx-2">${element.team}</td>
            <td class="text-center">${element.win + element.loss}</td>
            <td class="text-center">${element.win}</td>
            <td class="text-center">${element.loss}</td>
        </tr>
        `;
    });
};

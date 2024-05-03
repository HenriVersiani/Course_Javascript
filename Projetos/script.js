import { dataEastern, dataWestern } from "./data.js";

// Seletores
const tbodyWestern = document.getElementById('tbody-western');
const btnEastern = document.getElementById('btn-eastern');

// Variaveis
const rankingDataWestern = dataWestern.sort((x, y) => y.win - x.win);
console.log(rankingDataWestern);


dataWestern.forEach((element, index) => {
    tbodyWestern.innerHTML += `
    <tr>
        <th scope="row">${index + 1}</th>
        <td> <img src="${element.imgLogo}" class="mx-2">${element.team}</td>
        <td class="text-center">${element.win + element.loss}</td>
        <td class="text-center">${element.win}</td>
        <td class="text-center">${element.loss}</td>
    </tr>
    `;
});

// EVENTO de CLICK
btnEastern.addEventListener('click', (event) => {
    event.preventDefault();

    dataEastern.forEach((element, index) => {
        tbodyWestern.innerHTML = "";
        tbodyWestern.innerHTML += `
        <tr>
            <th scope="row">${index + 1}</th>
            <td>${element.team}</td>
            <td class="text-center">${element.win + element.loss}</td>
            <td class="text-center">${element.win}</td>
            <td class="text-center">${element.loss}</td>
        </tr>
        `;
    });
});
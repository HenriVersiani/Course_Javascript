import { dataEastern, dataWestern } from "./data.js";

// Seletores
const tbodyWestern = document.getElementById('tbody-conference');
const tbodyEastern = document.getElementById('tbody-conference');

const btnEastern = document.getElementById('btn-eastern');
const btnWestern = document.getElementById('btn-western')

// Variaveis
dataWestern.sort((x, y) => y.win - x.win);
dataEastern.sort((x, y) => y.win - x.win);

function loadWestern(){

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
    })
    return(tbodyWestern.innerHTML)
}

function loadEastern(){

    dataEastern.forEach((element, index) => {
        tbodyEastern.innerHTML += `
        <tr>
            <th scope="row">${index + 1}</th>
            <td> <img src="${element.imgLogo}" class="mx-2">${element.team}</td>
            <td class="text-center">${element.win + element.loss}</td>
            <td class="text-center">${element.win}</td>
            <td class="text-center">${element.loss}</td>
        </tr>
        `;
    })  
    return(tbodyEastern.innerHTML)
}

loadWestern()


btnWestern.addEventListener('click',(event) =>{

    event.preventDefault();
    tbodyEastern.innerHTML = ''
    loadWestern()
});

// EVENTO de CLICK
btnEastern.addEventListener('click', (event) => {

    event.preventDefault();
    tbodyWestern.innerHTML = ''
    loadEastern()

});
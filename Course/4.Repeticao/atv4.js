// 4. com filter encontrar números que tem o número "1" incluso
// procurar sobre o método includes()
const arrNumeros = [87, 32, 312, 3123, 11, 29, 9, 39, 12];

const arr = arrNumeros.map(element => element.toString())
    .filter(ele => ele.includes('1')).map(e => parseInt(e));

// Segunda Versão!    
// arr.forEach((e, i) => {
//     arr[i] = parseInt(arr[i])
// });

console.log(arr);






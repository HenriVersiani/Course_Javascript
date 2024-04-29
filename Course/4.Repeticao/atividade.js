const arrNumeros = [87, 32, 312, 3123, 11, 29, 9, 39, 12];
const arrStrings = ["Alberto", "ALBERTO", "alberto", "Henri", "HENRIQUE"];

// 1. Criar um novo array com map e fazer o dobro de cada numero do array arrNumeros

const numDobrados = arrNumeros.map((e)=> e * 2)
// console.log(numDobrados)
// 2. Criar um novo array com map e transformar cada string de arrStrings em strings com todas as letras minúsculas
// procurar sobre o método .toLowerCase()

const allLowerCase = arrStrings.map((e) => e.toLowerCase())
// console.log(allLowerCase)

// 3. Com forEach dizer se o numero do arrNumeros é par ou é impar

arrNumeros.forEach((e) => {
    if(e % 2 === 0){
       // console.log(`O número ${e} é par`)
    }else{
       // console.log(`O número ${e} é ímpar`)
    }
});

// 4. com filter encontrar números que tem o número "1" incluso
// procurar sobre o método includes()

const stringNumber = arrNumeros.map((e) => e.toString() )
// console.log(stringNumber)
const includesNumberOne = stringNumber.filter((e) => e.includes('1'))
console.log(includesNumberOne) 


let result = "";
let posicao = "";
for (let index = 0; index < arrStrings.length; index++) {
    const string = arrStrings[index];
    let countSmallLetter = 0;
    for (let i = 0; i < string.length; i++) {
        const letter = string[i];
        const verifyLetter = letter.toLowerCase();
        
        if (letter === verifyLetter) {
            countSmallLetter += 1
        };
    };

    if (string.length === countSmallLetter) {
        result = string;
        posicao = index;
    };
};

//console.log('O resultado é:', result, "E sua posição é:", posicao);


const arr = ["Alberto","henri", "ALBERTO", "Henri", "HENRIQUE", "alberto"];
const results = [];
const positions = [];

for (let index = 0; index < arr.length; index++) {
    const string = arr[index];
    let countLetter = 0;
    for (let i = 0; i < string.length; i++) {
        const letter = string[i];
        const verifyLetter = letter.toLowerCase();
        
        if (letter === verifyLetter) {
            countLetter += 1;
        };
    };

    if (string.length === countLetter) {
        results.push(string);
        positions.push(index);
    };
};

//results.forEach((element, index) => {
  //  console.log("palavra:", element, "posição:", positions[index]);
//});

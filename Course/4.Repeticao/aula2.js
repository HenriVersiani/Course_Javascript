const arrStrings = ["Alberto", "henri", "ALBERTO", "Henri", "HENRIQUE"];
const arr = ["Alberto", "henri", "ALBERTO", "Henri", "HENRIQUE", "alberto"];

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

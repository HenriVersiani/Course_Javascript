// 3. Com forEach dizer se o numero do arrNumeros é par ou é impar
const arrNumeros = [87, 32, 312, 3123, 11, 29, 9, 39, 12];

arrNumeros.forEach(e => {
   if (e % 2 === 0) {
      console.log(`O número ${e} é par`)
   } else {
      console.log(`O número ${e} é ímpar`)
   }
});
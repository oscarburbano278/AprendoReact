///////////// calcular el indice de masa corporal

// function masaCorporal (peso, altura){
//   const imc = peso / (altura * altura);

//   if (imc < 18.5) {
//     console.log('bajo de peso');
//   }else if(imc >= 18.5 && imc <=24.99){
//     console.log('peso normal')
//   }else if(imc >= 25 && imc <=29.99){
//     console.log('sobre peso')
//   }else{
//     console.log('obeso')
//   }

//   return imc;
// }
// console.log(masaCorporal(82, 1.75));

//////////Escriba una función llamada checkSeason , que toma un parámetro de mes y devuelve la temporada: Otoño, Invierno, Primavera o Verano.

// const temporada = (mes) => {
//   const estaciones = {
//     diciembre: 'Invierno',
//     enero: 'Invierno',
//     febrero: 'Invierno',
//     marzo: 'Primavera',
//     abril: 'Primavera',
//     mayo: 'Primavera',
//     junio: 'Verano',
//     julio: 'Verano',
//     agosto: 'Verano',
//     septiembre: 'Otoño',
//     octubre: 'Otoño',
//     noviembre: 'Otoño',
//   };

//   return estaciones[mes.toLowerCase()] || 'Mes inválido';
// };

// console.log(temporada('Marzo'));   
// console.log(temporada('agosto'));  
// console.log(temporada('Noviembre')); 

////////// Declara una función llamada printArray . Esta toma una matriz como parámetro e imprime cada valor de la matriz.

// const printArray = (arr) =>{
//   return console.log(arr)
// }

// printArray(['casa', 'carro', 'moto'])


////////Escriba una función que tome cualquier número de argumentos y devuelva la suma de los argumentos.
// const sumArgumentos = (...args) => {
//     return args.reduce((acumulador, actual) => acumulador + actual, 0);
// }

// console.log('resultado funcion felcha: ',sumArgumentos(2,5,4));

// /////////////////////////////////////////////////////////////////////

function sumar() {
    let total = 0;
    for (let num of arguments) {
        total += num;
    }
    return total;
}

console.log('resultado funcion normal: ',sumar(1, 2, 3, 4));

  
  
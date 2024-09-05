// https://github.com/Asabeneh/30-Days-Of-React/blob/master/01_Day_JavaScript_Refresher/01_javascript_refresher.md

///Primero elimine todas las puntuaciones y cambie la cadena a una matriz y cuente la cantidad de palabras en la matriz.

// let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.     ';

//   const cadenaLimpia = text.replace(/[.,!?;]/g, '');  ///como aliminar las puntuaciones de una cadena 
// //console.log(cadenaLimpia);

// const sinEspacios = text.trim() //// cadena sin espacios innecesarios

// const arr = sinEspacios.split(' ')  //// transormasr la cadema a una matriz separada por comas

// console.log(arr);

// console.log(arr.length);

//////////////////////////////////////////
// En el siguiente carrito de compras agregue, elimine, edite artículos

// Añade 'Carne' al principio de tu carrito de compras si aún no lo has añadido.
// Agregue azúcar al final de su carrito de compras si aún no lo ha agregado
// Elimina la opción 'Miel' si eres alérgico a la miel.
// Modificar té a 'té verde'


// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
// let elemets = shoppingCart.indexOf('carne' && 'azùcar');
// const alegico = false


// if (elemets != -1) {
//     console.log('el elemento carne y azucar existen en el array',shoppingCart);
    
// }else{
//     shoppingCart.unshift('carne'); /// Añade 'Carne' al principio de tu carrito de compras si aún no lo has añadido.
//     shoppingCart.push('azucar');   ///// Agregue azúcar al final de su carrito de compras si aún no lo ha agregado
//     const conAgregados = shoppingCart
    
//     let miel = conAgregados.indexOf('Honey');

//     if (alegico == true) {
        
//         conAgregados.splice(miel ,1);
//     }
//      let modi = conAgregados.indexOf('Tea')
//      if (modi !== -1) {
//         conAgregados[modi] = 'Te verde'
//      }


//     console.log('elemento agrgado',conAgregados);
// }

/////////////////////////////////////////////////////////

// En la matriz de países, verifique si existe "Etiopía" en la matriz. Si existe, imprima "Rusia". Si no existe, agréguelo a la lista de países.

// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
//   ]

//   const exisPais = countries.indexOf('Rusia');
  

//   if (exisPais !== -1) {
//     console.log('este pais ya existe')
//   }else{
//     countries.push('Rusia');
//     console.log(countries);
//   }


////// Concatene las siguientes dos variables y almacénelas en una variable fullStack.

// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node', 'Express', 'MongoDB']

// const fullStack = frontEnd.concat(backEnd);

// console.log(fullStack)

////////////////////////////////////////////////////////////////

// - Ordene la matriz y encuentre la edad mínima y máxima 
// - Encuentre la edad media (un elemento del medio o dos elementos del medio divididos por dos) 
// - Encuentre la edad promedio (todos los elementos divididos por el número de elementos)
// - Encuentre el rango de las edades (máximo menos mínimo) 
// - Compare el valor de (mín - promedio) y (máximo - promedio), use el método abs()

////const ages = [23, 22, 19, 24, 20, 25, 26, 24, 15, 24];
//////////// - Ordene la matriz y encuentre la edad mínima y máxima 

// const agesOrd = ages.sort();  //ordenar el array 

// let minAge = agesOrd[0]; // Inicializamos con el primer elemento del array
// let maxAge = agesOrd[0]; // Inicializamos con el primer elemento del array

// for (let i = 1; i < agesOrd.length; i++) {
//     if (agesOrd[i] < minAge) {
//         minAge = agesOrd[i]; // Actualiza minAge si encontramos un valor más pequeño
//         //console.log('min',agesOrd[i])
//     }
//     if (agesOrd[i] > maxAge) {
//         maxAge = agesOrd[i]; // Actualiza maxAge si encontramos un valor más grande
//        //console.log('max',agesOrd[i])
//     }
// }
// console.log(`Edad mínima: ${minAge}`);
// console.log(`Edad máxima: ${maxAge}`);

////////// - Encuentre la edad media (un elemento del medio o dos elementos del medio divididos por dos) ////////


// // Ordenamos el array para asegurarnos de que los números estén en orden
// const sortedAges = ages.sort((a, b) => a - b);

// // Calculamos el índice del medio
// const middleIndex = Math.floor(sortedAges.length / 2);

// let middleValue;

// if (sortedAges.length % 2 === 0) {
//     // Si es par, podemos devolver la media de los dos valores centrales
//     middleValue = (sortedAges[middleIndex - 1] + sortedAges[middleIndex]) / 2;
// } else {
//     // Si es impar, devolvemos el valor central
//     middleValue = sortedAges[middleIndex];
// }

// console.log(`El número del medio es: ${middleValue}`);


//////////- Encuentre la edad promedio (todos los elementos divididos por el número de elementos)
// let cont = 0;
// for (let i = 0; i < ages.length; i++) {
    
//     cont = cont + ages[i];
// }
// const promedio = cont / ages.length;
// console.log('la suma del array es: ',cont, 'y el promedio es: ', promedio);

///////// - Encuentre el rango de las edades (máximo menos mínimo) 

// const agesOrd = ages.sort();  //ordenar el array 

// let minAge = agesOrd[0]; // Inicializamos con el primer elemento del array
// let maxAge = agesOrd[0]; // Inicializamos con el primer elemento del array

// for (let i = 1; i < agesOrd.length; i++) {
//     if (agesOrd[i] < minAge) {
//         minAge = agesOrd[i]; // Actualiza minAge si encontramos un valor más pequeño
//         //console.log('min',agesOrd[i])
//     }
//     if (agesOrd[i] > maxAge) {
//         maxAge = agesOrd[i]; // Actualiza maxAge si encontramos un valor más grande
//        //console.log('max',agesOrd[i])
//     }
// }
// const rango = maxAge - minAge
// console.log('el rango es: ',rango);

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'    
  ]

////////// Corte los primeros siete países de la matriz de países.

// const numSelec = countries.slice(0,7);
// console.log(numSelec);

///////// Encuentre el país o los países intermedios en la matriz de países

// const totalCountries = countries.length;


// const redondeoAbajo = Math.floor(totalCountries / 2);
// let ComprobarValor;

// if (totalCountries % 2 === 0 ) {
//     ComprobarValor =(countries[redondeoAbajo -1] + countries[redondeoAbajo]) /2;
// }else{
//     ComprobarValor = countries[redondeoAbajo]
// }
// console.log('el numero del medio es: ',ComprobarValor)

/////// Divida la matriz de países en dos matrices iguales si es par. Si la matriz de países no es par, un país más para la primera mitad.


// Determinar el punto medio
const mitad = Math.ceil(countries.length / 2);
console.log('la mitad es ',mitad);

// Dividir la matriz
const primeraMitad = countries.slice(0, mitad);
const segundaMitad = countries.slice(mitad);

console.log('Primera mitad:', primeraMitad);
console.log('Segunda mitad:', segundaMitad);
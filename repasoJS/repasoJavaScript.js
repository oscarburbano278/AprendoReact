const arr = ['limon','naranja', 'pera', 'manzana', 'uva', 'mango', 'mora'];


/// encontrar el valor del medio de una matriz cuando la matriz tiene N elementos 

// function encontrarElementoMedio(arr) {
//     const indiceMedio = Math.floor(arr.length / 2);
//     return arr[indiceMedio];
//   }

//   const elementoMedio = encontrarElementoMedio(arr);
//   console.log("El elemento del medio es:", elementoMedio);


/// cambiar el array a mayusculas 
// const arrMayus = arr.map(element => element.toUpperCase());
// console.log(arrMayus)


/// imprimir en una oracion los elementos que se encuentran en la matriz
// oracion = (arr.toString());
// console.log(oracion,', son frutas deliciosas');


/// comprobas si un elemento se encuentra en la matriz
// index = arr.indexOf('uva');

// if (index != -1) {
//     console.log('el elemento si se encuentra en la matriz');
// }else{
//     console.log('no se encuetra');
// }

/// ordenar e invertir la matriz segun su primera letra 

// ordeanr = arr.sort();
// console.log(ordeanr);
// rever = arr.reverse();
// console.log(rever);

/// obtener los primeros 3 elementos y los ultimos 3 elementos de una matriz
// const primerosTres = arr.slice(0,3);// primeros 3 elementos

// const UltimosTres = arr.slice(-3);// primeros 3 elementos

// console.log(primerosTres);
// console.log(UltimosTres);


///eliminar el ultimo elemento de la matriz
const elimn = arr.pop();
console.log(elimn);
console.log(arr);

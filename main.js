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

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd);

console.log(fullStack)
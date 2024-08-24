///Primero elimine todas las puntuaciones y cambie la cadena a una matriz y cuente la cantidad de palabras en la matriz.

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.     ';

  const cadenaLimpia = text.replace(/[.,!?;]/g, '');  ///como aliminar las puntuaciones de una cadena 
//console.log(cadenaLimpia);

const sinEspacios = text.trim() //// cadena sin espacios innecesarios

const arr = sinEspacios.split(' ')  //// transormasr la cadema a una matriz separada por comas

console.log(arr);

console.log(arr.length);

//////////////////////////////////////////





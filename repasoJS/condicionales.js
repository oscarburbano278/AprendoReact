// 1. Obtenga la información del usuario mediante el mensaje (“Ingrese su edad:”). Si el usuario tiene 18 años o más, proporcione la siguiente información: “Tiene la edad suficiente para conducir”, pero si no tiene 18 años, proporcione otra información indicando que debe esperar la cantidad de años que necesita para cumplir 18.

// let mensaje = prompt('ingrese la edad');

// if (mensaje > 18) {
//     alert('erer mayor de edad')
// }else{
//     alert('eres menor de edad')
// }

// 2. Compara los valores de myAge y yourAge usando if … else. En función de la comparación, registra el resultado en la consola indicando quién es mayor (tú o yo). Usa prompt(“Ingresa tu edad:”) para obtener la edad como entrada.

// let edadAlejandro = prompt('ingrese la edad de alejandro' );
// let edadCarlos = prompt('ingrese la edad de carlos');
// let diferencia;

// if (edadAlejandro > edadCarlos) {
//     diferencia = edadAlejandro - edadCarlos
//     alert(`alejandro es mayor con una edad de ${edadAlejandro} y con una diferencia de ${diferencia} por que carlos tiene una edad de ${edadCarlos}`)
// }else{
//         diferencia = edadCarlos - edadAlejandro
//         alert(`carlos es mayor con una edad de ${edadCarlos} y con una diferencia de ${diferencia} por que alejandro tiene una edad de ${edadAlejandro}`)
// }

///3. Si a es mayor que b, devuelve "a es mayor que b"; de lo contrario, "a es menor que b". Intenta implementarlo de dos maneras

// let a = 5;
// let b = 10;

// (a>b)
// ? console.log('a es mayor que b') : console.log('b es mayor que a');

///4. Los números pares son divisibles por 2 y el resto es cero. ¿Cómo se comprueba si un número es par o no con JavaScript?

// let numero = prompt('digita un numero ')

// if (numero % 2 === 0) {
//     alert('el numero es par');
// }else{
//     alert('el numero es impar');
// }

//////////////////////////////////////// terneario

// let numero = parseInt(prompt('digita un numero '))
// let verdFals = (numero % 2 === 0)

//     ? console.log('el numero es par')
//     : console.log('el numero es impar');

////////////////NIVEL DOS////////////////////
///Escriba un código que pueda dar calificaciones a los estudiantes según sus puntuaciones:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, E

// let calificacion = 95;

//IF - ELSE

// if (calificacion >= 80 && calificacion <= 100) {
//     console.log('tu calificacion es A');
// }else if (calificacion >= 70 && calificacion <= 89){
//     console.log('tu calificacion es B')
// }else if (calificacion >= 60 && calificacion <= 69){
//     console.log('tu calificacion es C')
// }else if (calificacion >= 50 && calificacion <= 59){
//     console.log('tu calificacion es D')
// }else if (calificacion >= 0 && calificacion <= 49){
//     console.log('tu calificacion es E')
// }else{
//     console.log('no se encuentra en el rango');
// }

///SWITCH/////

// let caliFinal;

// switch(true){
//     case ( calificacion >= 80 && calificacion <= 100):
//         caliFinal = 'A'
//         break

//     case (calificacion >= 70 && calificacion <= 89):
//         caliFinal = 'B'
//         break

//     case (calificacion >= 60 && calificacion <= 69):
//         caliFinal = 'C'
//         break

//     case (calificacion >= 50 && calificacion <= 59):
//         caliFinal = 'D'
//         break

//     case (calificacion >= 0 && calificacion <= 49):
//         caliFinal = 'E'
//         break

//     case (calificacion < 0 || calificacion > 100):
//          caliFinal = 'no esta dentro del rango'
//          break

// }
// console.log(`la calificaion final es:  ${caliFinal}`);

/////////////////////////////////////////////////////////////////////////////////////

// Comprueba si la temporada es otoño, invierno, primavera o verano. Si la entrada del usuario es:
// Septiembre, octubre o noviembre, la temporada es Otoño.
// Diciembre, enero o febrero, la temporada es invierno.
// Marzo, abril o mayo, la temporada es primavera.
// Junio, julio o agosto, la temporada es verano.

const entradaUsuario = 'agosto';
let temporada;

switch(true){
    case(entradaUsuario == 'octubre' || entradaUsuario == 'noviembre' || entradaUsuario == 'septiembre'):
        temporada = 'Otoño';
        break
    case(entradaUsuario == 'diciembre' ||entradaUsuario == 'enero' ||entradaUsuario == 'febrero'):
        temporada = 'Invierno';
        break
    case(entradaUsuario == 'marzo' ||entradaUsuario == 'abril' ||entradaUsuario == 'mayo'):
        temporada = 'priemavera';
        break
    case(entradaUsuario == 'junio' ||entradaUsuario == 'julio' ||entradaUsuario == 'agosto'):
        temporada = 'verano';
        break
}

console.log(`la temporada es: ${temporada}`)



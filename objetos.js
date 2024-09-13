// El bucle for regular se puede utilizar en cualquier lugar cuando se conoce el número de iteraciones.
// Bucle While cuando no se conoce el número de iteraciones
// El bucle Do while y el bucle while son casi lo mismo, pero el bucle Do while se ejecuta al menos una vez incluso cuando la condición es falsa
// for of se utiliza solo para matrices
// forEach se utiliza para matrices
// for in se utiliza para objeto


////////construir un objeto y mostrar sus propiedades en consola 

// const perro = {
//     nombre: 'chiqui',
//     patas: 4,
//     color: 'blanco',
//     edad: '5 años'    
// }
// console.log(`el nombre del perro es ${perro.nombre},tiene ${perro.patas} patas,y es de color ${perro.color}`);


/////////// Encuentre a la persona que tiene muchas habilidades en el objeto de usuarios.

// const users = {
//     Alex: {
//       email: 'alex@alex.com',
//       skills: ['HTML', 'CSS', 'JavaScript'],
//       age: 20,
//       isLoggedIn: false,
//       points: 30
//     },
//     Asab: {
//       email: 'asab@asab.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
//       age: 25,
//       isLoggedIn: false,
//       points: 50
//     },
//     Brook: {
//       email: 'daniel@daniel.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//       age: 30,
//       isLoggedIn: true,
//       points: 50
//     },
//     Daniel: {
//       email: 'daniel@alex.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     },
//     John: {
//       email: 'john@john.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//       age: 20,
//       isLoggedIn: true,
//       points: 50
//     },
//     Thomas: {
//       email: 'thomas@thomas.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     },
//     Paul: {
//       email: 'paul@paul.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     }
//   }

//////////////Encuentre a la persona que tiene muchas habilidades en el objeto de usuarios.
  
// let objetoConMasItems = 0;
// let maxItems = 0;

// for(const key in users){
//     const numItems = users[key].skills.length;

//     if (numItems > maxItems) {
//         maxItems = numItems;
//         objetoConMasItems = key;
//     }
// }

// console.log(`El objeto con más elementos en 'items' es: ${objetoConMasItems} con ${maxItems} elementos.`);

/////////Contar usuarios registrados, contar usuarios que tengan más de 50 puntos del siguiente objeto.


// // Contar usuarios registrados
// const registeredUsersCount = Object.values(users).filter(user => user.isLoggedIn).length;

// // Contar usuarios con más de 50 puntos
// const highPointsUsersCount = Object.values(users).filter(user => user.points > 40).length;

// console.log(`Usuarios registrados: ${registeredUsersCount}`);
// console.log(`Usuarios con más de 50 puntos: ${highPointsUsersCount}`);

///////// Establezca su nombre en el objeto de usuarios sin modificar el objeto de usuarios original

// const copyUsers = Object.assign({}, users) ///// copiar un objeto sin modificar el objeto original

// const agregarName = {     ///// agregamos las propiedades 
//   email: 'Oscar@.com',
//   skills: ['HTML', 'CSS', 'JavaScript','React', 'Node'],
//   age: 20,
//   isLoggedIn: false,
//   points: 40
// }

// copyUsers.oscar = agregarName; /// agregamos el nombre del objeto y sus propiedades al objeto que se copio 'copyUsers'

// console.log(copyUsers);

/////////////////  agregar otro objeto al objeto que tiene muchos objetos este lo hacemos dinamicamante y se hace por medio de corchetes

// // Paso 1: Objeto que contiene libros
// let biblioteca = {
//   1: { titulo: "El Quijote", autor: "Miguel de Cervantes" },
//   2: { titulo: "Cien Años de Soledad", autor: "Gabriel García Márquez" }
// };

// // Paso 2: Función para agregar un libro
// function agregarLibro(id, titulo, autor) {
//   // Tu código aquí
//   biblioteca[id] = {titulo, autor};
// }

// // Prueba de la función
// agregarLibro(3, "1984", "George Orwell");
// agregarLibro(4, "El Señor de los Anillos", "J.R.R. Tolkien");

// console.log(biblioteca);


////////////Obtener todas las claves o propiedades del objeto de usuarios (en una matriz)

// const claves = Object.entries(users);  
// console.log(claves);

///////////Obtener todos los valores del objeto de usuarios (en una matriz)

// const valores = Object.values(users);
// console.log(valores);

/////////////////////////////////nivel 3/////////////////////////////////////////

const users = [
  {
    _id: 'ab12ex',
    username: 'Alex',
    email: 'alex@alex.com',
    password: '123123',
    createdAt: '08/01/2020 9:00 AM',
    isLoggedIn: false,
  },
  {
    _id: 'fg12cy',
    username: 'Asab',
    email: 'asab@asab.com',
    password: '123456',
    createdAt: '08/01/2020 9:30 AM',
    isLoggedIn: true,
  },
  {
    _id: 'zwf8md',
    username: 'Brook',
    email: 'brook@brook.com',
    password: '123111',
    createdAt: '08/01/2020 9:45 AM',
    isLoggedIn: true,
  },
  {
    _id: 'eefamr',
    username: 'Martha',
    email: 'martha@martha.com',
    password: '123222',
    createdAt: '08/01/2020 9:50 AM',
    isLoggedIn: false,
  },
  {
    _id: 'ghderc',
    username: 'Thomas',
    email: 'thomas@thomas.com',
    password: '123333',
    createdAt: '08/01/2020 10:00 AM',
    isLoggedIn: false,
  },
]

const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy'],
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy'],
  },
]

////////////a. Crea una función llamada agregarUsuario que permita al usuario agregar usuarios a la colección. Si el usuario existe, infórmale que ya tiene una cuenta.

// function agregarUsuario (nuevoUsuario){
//   const buscar = users.find(user => user._id === nuevoUsuario._id);

//   if (buscar) {
//     console.log('el usuario ya se encuentra')
//   }else{
//   users.push(nuevoUsuario);
//   console.log('se agrego con exito');
//   }
// }

// const nuevoUsuario =   {
//   _id: 'hhhhh',
//   username: 'Thomas',
//   email: 'thomas@thomas.com',
//   password: '123333',
//   createdAt: '08/01/2020 10:00 AM',
//   isLoggedIn: true,
// }

// agregarUsuario(nuevoUsuario);
// console.log(users);

///////////////
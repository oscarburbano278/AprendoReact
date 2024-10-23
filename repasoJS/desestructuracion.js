//// desstructuracion MATRICES

// const countries = ['Finland', 'Sweden', undefined, 'Norway']
// const [fin, swe, ice = 'Iceland', nor, den = 'Denmark'] = countries
// console.log('ciudades', fin, swe, ice, nor, den)

//// omitir elementos

// const countries = ['Finland', 'Sweden', 'Iceland', 'Norway', 'Denmark']
// const [fin, , ice, , den] = countries
// console.log(fin, ice, den)

///////// desestructuracion de matrices anidadas

// const fullStack = [
//     ['HTML', 'CSS', 'JS', 'React'],
//     ['Node', 'Express', 'MongoDB']
//   ]
  
//   const [frontEnd, backEnd] = fullStack
//   console.log(frontEnd, backEnd);

//////////////////////

// const fruitsAndVegetables = [['banana', 'orange', 'mango', 'lemon'],  ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot']]

//     const [fruits, vegetables] = fruitsAndVegetables
//     console.log(fruits, vegetables)


// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const [num1, num2, num3, ...rest] = nums
// console.log(num1, num2, num3, rest)


// const fullStack = [
//     ['HTML', 'CSS', 'JS', 'React'],
//     ['Node', 'Express', 'MongoDB'],
//   ]
  
//   for (const [first, second, third, fourt] of fullStack) {
//     console.log(first, second, third, fourt)
//   }

////////////////////////////

// const [x, y] = [5, (value) => value ** 5]
// console.log(x);
// console.log(y(x));

//// desestructuracion de OBJETOS

// const rectangle = {
//     width: 20,
//     height: 10,
//   }
  
//   let { width, height } = rectangle
//   console.log(width, height) 

//////////////////////////

// const languages = [
//   { lang: 'English', count: 91 },
//   { lang: 'French', count: 45 },
//   { lang: 'Arabic', count: 25 },
//   { lang: 'Spanish', count: 24 },
//   { lang: 'Russian', count: 9 },
//   { lang: 'Portuguese', count: 9 },
//   { lang: 'Dutch', count: 8 },
//   { lang: 'German', count: 7 },
//   { lang: 'Chinese', count: 5 },
//   { lang: 'Swahili', count: 4 },
//   { lang: 'Serbian', count: 4 },
// ]

// for (const { lang, count } of languages) {
//   console.log(`The ${lang} is spoken in ${count} countries.`)
// }

////////////////////////////
// const sumAllNums = (...args) => {
//   console.log(args)
// }

// sumAllNums(1, 2, 3, 4, 5)

/////////////////////


const sumAllNums = (...args) => {
  let sum = 0
  for (const num of args) {
    sum += num
  }
  return sum
}

console.log(sumAllNums(1, 2, 3, 4, 5))
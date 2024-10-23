/// clase Person con su constructor e instancia de tres objetos de esa misma clase 
        // class Person {
        //     constructor(firstName, lastName) {
        //     this.firstName = firstName
        //     this.lastName = lastName
        //     }
        // }
        
        // const person1 = new Person('oscar', 'burbano')
        // const person2 = new Person('camilo', 'castro')
        // const person3 = new Person('carla', 'gomez')
        
        // console.log(person1)
        // console.log(person2)
        // console.log(person3)

/// METODOS getFullName

        // class Person {
        //     constructor(firstName, lastName, age, country, city) {
        //     this.firstName = firstName
        //     this.lastName = lastName
        //     this.age = age
        //     this.country = country
        //     this.city = city
        //     }
        //     getFullName() {
        //     const fullName = 'mi nombre es ' +this.firstName + ', mi apellido ' + this.lastName + ' y tengo ' + this.age +' años'
        //     return fullName
        //     }
        // }
        
        // const person1 = new Person('carla', 'peña', 25, 'Finland', 'Helsinki')
        // const person2 = new Person('edier', 'ceron', 28, 'españa', 'Espoo')
        
        // console.log(person1.getFullName())
        // console.log(person2.getFullName())

    /// PROPIEDADES CON VALOR INICIAL score=0, skills=[]

        // class Person {
        //     constructor(firstName, lastName, age, country, city) {
        //     this.firstName = firstName
        //     this.lastName = lastName
        //     this.age = age
        //     this.country = country
        //     this.city = city
        //     this.score = 0
        //     this.skills = []
        //     }
        //     getFullName() {
        //     const fullName = this.firstName + ' ' + this.lastName
        //     return fullName
        //     }
        // }
        
        // const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
        // const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
        
        // console.log(person1.score)
        // console.log(person2.score)
        
        // console.log(person1.skills)
        // console.log(person2.skills)

/// METODOS GET 

        // class Person {
        //     constructor(firstName, lastName, age, country, city) {
        //       this.firstName = firstName
        //       this.lastName = lastName
        //       this.age = age
        //       this.country = country
        //       this.city = city
        //       this.score = 0
        //       this.skills = []
        //     }
        //     getFullName() {
        //       const fullName = this.firstName + ' ' + this.lastName
        //       return fullName
        //     }
        //     get getScore() {
        //       return this.score
        //     }
        //     get getSkills() {
        //       return this.skills
        //     }
        //   }
        
        //   const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
        //   const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
        
        //   console.log(person1.getScore) // NO SE NECESITA PARENTESIS PARA LLAMAR A UN METODO GETTER
        //   console.log(person2.getScore)
        
        //   console.log(person1.getSkills)
        //   console.log(person2.getSkills)

/// METODO SET

// class Person {
//     constructor(firstName, lastName, age, country, city) {
//       this.firstName = firstName
//       this.lastName = lastName
//       this.age = age
//       this.country = country
//       this.city = city
//       this.score = 0
//       this.skills = []
//     }
//     getFullName() {
//       const fullName = this.firstName + ' ' + this.lastName
//       return fullName
//     }
//     get getScore() {
//       return this.score
//     }
//     get getSkills() {
//       return this.skills
//     }
//     set setScore(score) {
//       this.score += score
//     }
//     set setSkill(skill) {
//       this.skills.push(skill)
//     }
//   }
  
//   const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
//   const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
  
//   person1.setScore = 1
//   person1.setSkill = 'HTML'
//   person1.setSkill = 'CSS'
//   person1.setSkill = 'JavaScript'
  
//   person2.setScore = 1
//   person2.setSkill = 'Planning'
//   person2.setSkill = 'Managing'
//   person2.setSkill = 'Organizing'
  
//   console.log(person1.score)
//   console.log(person2.score)
  
//   console.log(person1.skills)
//   console.log(person2.skills)

/// METODO REGULAR DIFERENTE DE GETTER. EJM DE METODO REGULAR getPersonInfo

        // class Person {
        //     constructor(firstName, lastName, age, country, city) {
        //     this.firstName = firstName
        //     this.lastName = lastName
        //     this.age = age
        //     this.country = country
        //     this.city = city
        //     this.score = 0
        //     this.skills = []
        //     }
        //     getFullName() {
        //     const fullName = this.firstName + ' ' + this.lastName
        //     return fullName
        //     }
        //     get getScore() {
        //     return this.score
        //     }
        //     get getSkills() {
        //     return this.skills
        //     }
        //     set setScore(score) {
        //     this.score += score
        //     }
        //     set setSkill(skill) {
        //     this.skills.push(skill)
        //     }
        //     getPersonInfo() {
        //     let fullName = this.getFullName()
        //     let skills =
        //         this.skills.length > 0 &&
        //         this.skills.slice(0, this.skills.length - 1).join(', ') +
        //         ` and ${this.skills[this.skills.length - 1]}`
        //     let formattedSkills = skills ? `He knows ${skills}` : ''
        
        //     let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
        //     return info
        //     }
        // }
        
        // const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
        // const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
        // const person3 = new Person('John', 'Doe', 50, 'Mars', 'Mars city')
        
        // person1.setScore = 1
        // person1.setSkill = 'HTML'
        // person1.setSkill = 'CSS'
        // person1.setSkill = 'JavaScript'
        
        // person2.setScore = 1
        // person2.setSkill = 'Planning'
        // person2.setSkill = 'Managing'
        // person2.setSkill = 'Organizing'
        
        // console.log(person1.getScore)
        // console.log(person2.getScore)
        
        // console.log(person1.getSkills)
        // console.log(person2.getSkills)
        // console.log(person3.getSkills)
        
        // console.log(person1.getPersonInfo())
        // console.log(person2.getPersonInfo())
        // console.log(person3.getPersonInfo())

/// METODO ESTATICO este no se invocan en instacncias de clase, sino en la propia clase pueden ser FUNCIONES DE UTILIDAD

//         class Person {
//             constructor(firstName, lastName, age, country, city) {
//               this.firstName = firstName
//               this.lastName = lastName
//               this.age = age
//               this.country = country
//               this.city = city
//               this.score = 0
//               this.skills = []
//             }
//             getFullName() {
//               const fullName = this.firstName + ' ' + this.lastName
//               return fullName
//             }
//             get getScore() {
//               return this.score
//             }
//             get getSkills() {
//               return this.skills
//             }
//             set setScore(score) {
//               this.score += score
//             }
//             set setSkill(skill) {
//               this.skills.push(skill)
//             }
//             getPersonInfo() {
//               let fullName = this.getFullName()
//               let skills =
//                 this.skills.length > 0 &&
//                 this.skills.slice(0, this.skills.length - 1).join(', ') +
//                   ` and ${this.skills[this.skills.length - 1]}`
        
//               let formattedSkills = skills ? `He knows ${skills}` : ''
        
//               let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
//               return info
//             }
//             static favoriteSkill() {
//               const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
//               const index = Math.floor(Math.random() * skills.length)
//               return skills[index]
//             }
//             static showDateTime() {
//               let now = new Date()
//               let year = now.getFullYear()
//               let month = now.getMonth() + 1
//               let date = now.getDate()
//               let hours = now.getHours()
//               let minutes = now.getMinutes()
//               if (hours < 10) {
//                 hours = '0' + hours
//               }
//               if (minutes < 10) {
//                 minutes = '0' + minutes
//               }
        
//               let dateMonthYear = date + '.' + month + '.' + year
//               let time = hours + ':' + minutes
//               let fullTime = dateMonthYear + ' ' + time
//               return fullTime
//             }
//           }
        
//         //   console.log(Person.favoriteSkill())
//         //   console.log(Person.showDateTime())

// /// HERENCIA

// class Student extends Person {
//     saySomething() {
//       console.log('I am a child of the person class')
//     }
//   }
  
//   const s1 = new Student('Asabeneh', 'Yetayeh', 'Finland', 250, 'Helsinki')
//   console.log(s1)
//   console.log(s1.saySomething())
//   console.log(s1.getFullName())
//   console.log(s1.getPersonInfo())

/////////////////EJERCICIOS ///////////////////////

class Animal{
    constructor(nombre, edad, color, patas){
        this.nombre = nombre
        this.edad = edad
        this.color = color
        this.patas = patas
    }

    getNombre(){
        const name = this.nombre
        return name;
    }

    getDescrip(){
        const detalles = `tiene ${this.edad} años de edad, es de color ${this.color} y tiene ${this.patas} patas`
        return detalles;
    }

    
}
const animal1 = new Animal('droopy','3', 'café', '4')

//console.log(animal1.getNombre())

//console.log(animal1.getDescrip())



class Perro extends Animal{
    constructor(nombre, ciudad, vacunas){
        super(nombre)
        this.ciudad = ciudad
        this.vacunas = vacunas
    }

    getciuVacunas(){
        const vac = `${this.nombre} esta en la ciudad de ${this.ciudad} y se le aplico las ${this.vacunas} vacunas`
        return vac;
    }
}

const animal2 = new Perro('chiki', 'cali', '4')
console.log(animal2.getciuVacunas());


class Gato extends Perro{
    constructor(nombre, ciudad, raza){
        super(nombre, ciudad)
        this.raza = raza
    }

    getGatoRaza(){
        const cat = `${this.nombre}.... ${this.ciudad} ..... ${this.raza}`
        return cat
    }
}

const animalGato = new Gato('Garfiel', 'Bogota', 'chipi')
console.log(animalGato.getGatoRaza());
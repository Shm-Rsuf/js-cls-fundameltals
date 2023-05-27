"use strict";

/*
    comments for developer
*/
// const pizzamaker = function (moyda, peanut, mayoneese) {
//   const pizz = (moyda + peanut) / mayoneese;
//   return `${pizz} kg pizza is ready for everyone.🍕🍕`;
// }

// console.log(pizzamaker(2, 5, 2));

// const ageCalculator = birthYear => (new Date().getFullYear() - birthYear) ? `You are adult` : `you are not adult`;
// console.log(ageCalculator(1996));

// const heroMaker = (age, skill) => {
//   if (age >= 18 && skill) {
//     return "You are a super hero.!";
//   } else {
//     return "You are not a super hero.!";
//   }
// }

// const heroMaker = (age, skill) => (age >= 20 && skill) ? "You can be a super hero.!" : "You are not a super hero.!"
// console.log(heroMaker(20, true));

// function fruitCutter(fruit) {
//   return fruit * 4;
// }

// function juiceMaker(apples, oranges) {
//   const applePieces = fruitCutter(apples);
//   const orangePieces = fruitCutter(oranges);
//   const juice = (applePieces + orangePieces) / 2;
//   return `${juice} ltr. juice is ready using ${applePieces} apple pieces and ${orangePieces} orange pieces.🍺`
// }

// console.log(juiceMaker(15, 10))

// const a = 1;
// const b = -2;
// const c = -1;
// const d = 2;
// const x = 3;
// const y = -3;

// function hibrid(a, b, c, d, x, y) {
//   const max = (a + d) * (b + c);
//   const min = x + y;
//   const def = 2 * (max - min) * max;
//   const result = defFinder(def)

//   function defFinder(def) {
//     const dx = [1, -1];
//     const dy = [1, 1]
//     dx.push(def);
//     const dz = dx.concat(dy);

//     return dz;
//   }
//   return result;
// }

// console.log(hibrid(a, b, c, d, x, y))

//Array details
// const names = ['jubair', 'priti', 'ruponty', 'rupa'];//literal syntax
// const years = new Array(1990, 1992, 1996, 1998, 2002);//array function

// console.log(names)
// console.log(years)

//finding elements in array by index//

// console.log(names[0])
// console.log(names[1])
// console.log(names[5])

// console.log(years[3])
// console.log(years[4])
// console.log(years[6])

//array length
// console.log(names.length)
// console.log(years.length)

//some array methods//
// const lastBenchers = ['usuf', 'sazzad', 'mizan', 'farhan'];
/*
push method- array er shese kono element add korte push method use korte hoy
*/
// lastBenchers.push('hamim', 'momin');
// console.log(lastBenchers)

/*
unshift method- array er shurute kono kisu add korte unshift use korte hoy
*/
// lastBenchers.unshift('rupa', 'priti')
// console.log(lastBenchers)
/*
pop method-array er shese kono element ke remove korte pop method use korte hoy
*/
// lastBenchers.pop()
// lastBenchers.pop()
// console.log(lastBenchers)

/*
shift method- array er shuru theke kono elements remove korte shift use korte hoy
*/

// lastBenchers.shift()
// lastBenchers.shift()
// console.log(lastBenchers)

/*
finding index by elements names
*/
// console.log(lastBenchers.indexOf('sazzad'))
// console.log(lastBenchers.indexOf('usuf'))
// console.log(lastBenchers.indexOf('rsuf'))
// /*
// includes method- kono array er vitore elements ta ase kina seta janar jonno includes methods use korte hoy. Ati sob somoy boolean value return kore.
//  */
// console.log(lastBenchers.includes('rupa'))
// console.log(lastBenchers.includes('ruponty'))
// console.log(lastBenchers.includes('mizan'))

// if (lastBenchers.includes('sazzad')) {
//   console.log('He is our captain')
// } else {
//   console.log('Unknown')
// }

// if (lastBenchers.indexOf('ruponty') !== -1) {
//   console.log('He is our captain')
// } else {
//   console.log('Unknown')
// }
/*
function calling function(callback)
*/
// const fruitCutter = (fruit) => fruit * 4;

// const juiceMaker = (apples, bananas, oranges) => {
//   const applePieces = fruitCutter(apples);
//   const bananaPieces = fruitCutter(bananas);
//   const orangePieces = fruitCutter(oranges);
//   const juice = (applePieces + bananaPieces + orangePieces) / 3;
//   return `${juice} ltr. juices`;
// }
// console.log(juiceMaker(10, 25, 16));

// /*
// curring function
// */
// function multi(a) {
//   return function (b) {
//     return function (c) {
//       return function (x) {
//         return function (y) {
//           return a * b * c * x * y;
//         }
//       }
//     }
//   }
// }

// console.log(multi(5)(3)(6)(4)(2))
/*
lambda function or lambda calculus function declarations
*/
// const multiPro = a => b => c => x => y => a * b * c * x * y;

// console.log(multiPro(50)(30)(60)(40)(20))

//Object literal syntax

// const student = {
//   firstName: 'Suraiya Akter',
//   lastName: 'Rupa',
//   age: 21,
//   job: 'Student',
//   isGoodAtStudy: true
// }
// console.log(student.firstName);
// console.log(student.age);

// console.log(`${student.firstName} ${student.lastName} is a good girl & she is ${student.age} years old`)

// const interestedIn = prompt('What do you want to know about this student?')
// if (student[interestedIn]) {
//   console.log(student[interestedIn]);
// } else {
//   console.log('Invalid key!')
// }

// const person = {
//   name: ['john', 'doe'],
//   age: 32,
//   biog: function () {
//     console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`)
//   },
//   introduceSelf: function () {
//     console.log(`Hi ! I'm ${this.name[0]}`)
//   }
// }
// console.log(person.introduceSelf());
/* const sabrinaArray = ['Sabrina', 'Ratul', 'iMac', 'MacOS', 'iPhone 16', 'Programmer', 25, ['Tina', 'Mina', 'Rina', 'Parina'], true, 'Dancer'];

let len = sabrinaArray.length;
for (let i = 0; i < len; i++) {
  // console.log(sabrinaArray[i])
}

const numbers = [20, 30, 40, 50, 60, 70, 80, 90, 100];

let sum = 0;
let lengthOfNumbers = numbers.length;
// console.log(lengthOfNumbers)

for (let i = 0; i < lengthOfNumbers; i++) {
  sum += numbers[i];
} */

// console.log(sum);
/* 
let row = 5;
let star = '';

for (let i = 1; i <= row; i++) {
  for (let j = 1; j <= i; j++) {
    star += '*'
  }
  star += '\n'
}
console.log(star) */

/* var name = "shm usuf",
  age = 26,
  work = "Vivasoft";

console.log(
  `I'm ${name}. I'm ${new Date().getFullYear() - 1996} and work at ${work}`
); */

/* const person = {
  name: "John Doe",
  age: 30,
  occupation: "Engineer",
  hobbies: ["reading", "painting", "playing guitar"],
  address: {
    street: "123 Main St",
    city: "Exampleville",
    country: "Exampleland",
  },
  greet: function () {
    console.log(`Hello, my name is ${this.name}!`);
  },
}; */
/* const {
  name: personName,
  hobbies: [reading, drawing],
  address: { city },
} = person;

console.log(drawing, city); */

/* for (const property in person) {
  console.log(`${property}: ${person[property]}`);
} */

const fruits = ["apple", "banana", "orange", "mango"];

for (const element of fruits) {
  console.log(element);
}

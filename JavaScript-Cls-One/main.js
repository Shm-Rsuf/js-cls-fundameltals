/* console.log("hello bangladesh");

//test lear year
// year % 400===0 || year % 4 === 0 && year % 100 !== 0

let year = 2020;

if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
  console.log(`The year ${year} is leap year.`);
} else {
  console.log(`The year ${year} is not leap year.`);
} */

//function calling function

/* function fruitCutter(fruit) {
  return fruit * 5;
}

function juiceMaker(apple, mango) {
  const appleSlices = fruitCutter(apple);
  const mangoSlices = fruitCutter(mango);

  const juices = (appleSlices + mangoSlices) / 2;

  return `${juices} ltr.`;
}

console.log(juiceMaker(10, 20)); */

/* function aggCal(birthYear) {
  return 2023 - birthYear;
}

function myName(name) {
  return `My name is ${name}`;
}

function fullDetails(birthYear, name) {
  const fullInfo = `${myName(name)}. I am ${aggCal(birthYear)} years old.`;
  return fullInfo;
}

console.log(fullDetails(1996, "usuf"));
console.log(fullDetails(2002, "Suraiya Akter Rupa")); */

//arrays
const friends = ["Arif", "Jony", "Atik", "Nafiul"]; //literal syntax of array declaration

const years = [1990, 1992, 1994, 1996, 1998, 2000];

//finding elements in array by index
// console.log(friends);
// console.log(friends[1]);
// console.log(friends[2]);
// console.log(friends[3]);
// console.log(friends[4]);

//array length

console.log(years.length);
console.log(friends.length);
console.log("---------------------");

//exercies
const calAge = function (birthYear) {
  return 2023 - birthYear;
};

console.log(calAge(years[2]));
console.log(calAge(years.at(-2)));

const lastBenchers = ["usuf", "sazzad", "faisal", "shohan"];

//push --> seshe kono element ke add kora..
lastBenchers.push("kodu");
lastBenchers.push("momin");
lastBenchers.push("janina");

//pop --> sesh theke kono element ke remove kora..
lastBenchers.pop();
lastBenchers.pop();
lastBenchers.pop();

//unshift --> shurute kono element ke add korbe..
lastBenchers.unshift("jony");
lastBenchers.unshift("atik");
lastBenchers.unshift("kuddus");

//shift --> shuru theke kono element ke bad dibe..
lastBenchers.shift();
lastBenchers.shift();
lastBenchers.shift();
console.log("--------------------");

//includes --> kono elemet ase kina check kore "true" or "false" return korbe..
console.log(lastBenchers.includes("shohan"));
console.log(lastBenchers.includes("rupa"));
console.log(lastBenchers.includes("sazzad"));
console.log("---------------------");

//indexOf --> kono element er index ber kore dey..
console.log(lastBenchers.indexOf("shohan"));
console.log(lastBenchers.indexOf("rupa"));
console.log(lastBenchers.indexOf("usuf"));
console.log("---------------------");

//findIndex --> array theke index khuje ber korbe..
let indexOfYear = years.findIndex((year) => year > 1996);

console.log(indexOfYear);
console.log(lastBenchers);

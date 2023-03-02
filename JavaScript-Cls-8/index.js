const even = [2, 4, 6, 8, 10, 12, 14, 16, 20];
const odd = [3, 7, 5, 9, 15, 21, 29, 31];

//array length
console.log(even.length);
console.log(odd.length);
console.log("------------------");

//find last element
console.log(even[even.length - 1]);
console.log(even.at(-1));
console.log(even.slice(-1)[0]);
console.log("------------------");

//Object
const student = {
  fName: "Sabiha Tasnim",
  lName: "Priti",
  birthYear: 2012,
  calAge: function () {
    return new Date().getFullYear() - this.birthYear;
  },
  fulInfo: function () {
    return `Hi, My name is ${
      this.fName + " " + this.lName
    }. I am ${this.calAge()} years old.`;
  },
};

const teacher = {
  name: "Abdul Mannan",
  job: ["Math", "Chemistry", "Physics"],
  age: new Date().getFullYear() - 1980,
  jodFinder: function () {
    if (this.job[2] === "Physics") {
      return `He is a Physics's teacher.`;
    }
  },
};

console.log(student.calAge());
console.log(student.fulInfo());

console.log(teacher.age);
console.log(teacher.job[0]);
console.log(teacher.jodFinder());
console.log("------------------");
// console.log(this);

const student1 = { ...student };

console.log(student);
console.log(student1);
console.log("------------------");

//star pattern

let numOfRow = 5;
let star = "";
for (let i = 1; i <= numOfRow; i++) {
  for (let j = 1; j <= numOfRow; j++) {
    star += "*";
  }
  star += "\n";
}
console.log(star);

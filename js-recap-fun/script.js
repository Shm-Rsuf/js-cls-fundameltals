//falsy value(false, undifined, "",null, NaN,0)
/* console.log(Boolean(0));
console.log(Boolean(false));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean("")); */

//get gpa
/* function gradePointAverage(num) {
  if (num >= 80) console.log("A+");
  else if (num >= 70) console.log("A");
  else if (num >= 60) console.log("A-");
  else if (num >= 50) console.log("B");
  else if (num >= 40) console.log("C");
  else if (num >= 33) console.log("D");
  else console.log("Fail");
}
gradePointAverage(85);
gradePointAverage(75);
gradePointAverage(69);
gradePointAverage(56);
gradePointAverage(49);
gradePointAverage(30); */

//switch case

const isToday = "Saturday";

switch (isToday) {
  case "Sunday":
    console.log(isToday);
    break;
  case "Friday":
    console.log(isToday);
    break;
  case "Monday":
    console.log(isToday);
    break;

  default:
    console.log("Today is holyday");
    break;
}

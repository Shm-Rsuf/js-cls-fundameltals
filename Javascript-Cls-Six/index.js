"use strict";

function calAge(birthYear) {
  const age = new Date().getFullYear() - birthYear;
  return age;
}

console.log(calAge(1998));

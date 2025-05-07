// Hoisting-It is defined as a behaviour in javascript in which we try to access the variable before defining the code

// In case of var, it will shows undefined because during the compilation phase,js holds the variable declaration to top of scope but initialization happens in order of the code
console.log(x); // returns undefined
var x=10;

// so it treats the code like it
// var x;
// console.log(x);
// x=10;

// In case of let, we cannot access it as it is initialized at the top of scope but not defined it as it is in temporal dead zone
// console.log(y); // it throws the reference error
// let y=20;

// console.log(z); // it throws the reference error
// const z=40;
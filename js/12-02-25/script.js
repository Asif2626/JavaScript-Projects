var a = 10; // Global Scope
var a = 20; // Redeclared
console.log(a);

let b = 10; // Block scope
// let b = 20; // canot be redeclared
console.log(b);

if (true) {
  let x = 5;
}
// console.log(x);  // show referece error x is not define because they are block scope

if (true) {
  var y = 5;
}
console.log(y); // this is accessible because they are global scope

console.log(p);  // show undefined due to var because this is hoisting
var p = 30; 

// console.log(q); // show ReferenceError Cannot access before initialization
let q = 30;


var a = 1;
{
  let a = 2;
  console.log(a);  // output is 2
}
console.log(a); // output is 1

let m = 10;
m = 20;
console.log(m); // output is 20 they overwrite the value 

// for (var i = 1; i <= 3; i++) {
//   setTimeout(() => console.log(i), 1000); // var is a function scope they can not change value because they have same value of i
// }

// for (let i = 1; i <= 3; i++) {
//   setTimeout(() => console.log(i), 1000); // let is a block scope they can change the value on each iteration they update the value of i
// }

var t = 100;
function test() {
  console.log(t); // Show referece error because let is not hoisted. 
  // let t = 200;
}
test();

function check() {
  console.log(a); // var can't sho error because they are hoisted. they show undefined because the value can't assign at a run time
  var a = 10;
  console.log(a);
}
check();
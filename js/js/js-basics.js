// OutPut
console.log("Hello");

// Variables, Functions & Arrow Functions

const greet = (name = "greet") => `Hello, ${name}`;
console.log(greet("Asif"));
console.log(greet());

// Destructure & Spread
const user = { name: "Asif", age: 25, city: "Lahore" };
const { name, ...rest } = user;
console.log(name, rest);

const nums = [1, 2, 3];
const newNums = [...nums, 4, 5];
console.log(newNums);

// Array Methods
const users = [
  { name: "Ali", age: 25 },
  { name: "Ahmed", age: 17 },
  { name: "Sara", age: 30 },
];

// Adults
const adults = users.filter((u) => u.age > 18);
console.log(adults);

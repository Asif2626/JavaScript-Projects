// // 1. make fabonachi series using array
// // Example [1,1,2,3,5,8,13,..]

// function fabonachi(arr) {
//   let array = [];
//   let sum;
//   for (let i = 0; i < arr.length - 1; i++) {
//     sum = arr[i] + arr[i + 1];
//     // console.log(arr[i]);
//     // console.log(arr[i+1]);
//     array.push(sum);
//     // console.log(array);
//   }
//   return array;
// }
// console.log(fabonachi([1, 1, 2, 3, 5, 8, 13, 21]));

// // 2. find values in common
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [3, 4, 5, 6, 9, 10];
// function findCommonValue(arr1,arr2) {
//   let array = [];
//   for (let i = 0; i <= arr1.length - 1; i++) {
//     for (let j = 0; j <= arr2.length - 1; j++) {
//       if (arr1[i] === arr2[j]) {
//         array.push(arr1[i]);
//         console.log(array);
//       }
//     }
//   }
//   return array;
// }
// console.log(findCommonValue(arr1, arr2));

// // 3. Find Values in common but series & count
// let array1 = [1, 2, 3, 4, 6, 9, 0, 1, 2];
// let array2 = [1, 2, 1, 5, 6, 9, 0];
// function findCommonCount(array1,array2) {

//   let array = [];
//   let count = {};
//   for (let i = 0; i <= array1.length - 1; i++) {
//     for (let j = 0; j <= array2.length - 1; j++) {
//       if (array1[i] === array2[j]) {
//         array.push(array1[i]);
//         console.log(array);
//       }
//     }
//   }
//   for (let num of array) {
//     if (count[num]) {
//       count[num]++;
//     } else {
//       count[num] = 1;
//     }
//   }
//   return { array, count };
// }
// console.log(findCommonCount(array1,array2));

// 4. Find Instance of B in A (array)
let arrayA = [1, 2, 3, 4, 5, 1, 2];
let arrayB = [1, 2, 6];

function findInstance(arr1, arr2) {
  let array = [];
  let count = {};
  for (let i = 0; i <= arr2.length - 1; i++) {
    for (let j = 0; j <= arr1.length - 1; j++) {
      if (arr1[i], arr1[i + 1] === arr2[j], arr2[j + 1]) {
        array.push(arr1[i], arr1[i + 1]);
      }
    }
  }
  for (let num of array) {
    if (count[num]) {
      count[num]++;
    } else {
      count[num] = 1;
    }
  }
  return { array, count };
}
console.log(findInstance(arrayA, arrayB));

// Today: 12-04-25
// 4. Find Instance of B in A (array)
// let arrayA = [1, 2, 3, 4, 5, 1, 2];
// let arrayB = [1, 2];
function findInstance(arr1, arr2) {
  let count = {};
  let array = [];
  for (let num of arr1) {
    for (let i = 0; i <= arr2.length; i++) {
      if (num === arr2[i]) {
        array.push(num);
      }
      
    }
  }
  if (count[array] === arr2) {
        count[array]++;
      } else {
        count[array] = 1;
      }
  return { array, count };
}
console.log(findInstance(arrayA, arrayB));

// 5. make object nad access value using Object key, object value, object enteries
const person = {
  firstName: "Asif",
  lastName: "Ali",
  age: 23
}

console.log(person);
// Object Keys
for(let keys of Object.keys(person)){
  console.log("Keys: ",keys);
}
// Object Values
for(let keys of Object.values(person)){
  console.log("Values: ",keys);
}
// Object Entries
for(let [keys, values] of Object.entries(person)){
  console.log("Keys: ",keys, "& Values: ",values);
}

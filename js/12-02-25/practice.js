// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 100);
// }
// console.log(i);

function countNumbers(arr) {
    let count = {};
    for(let num of arr){
        if(count[num]){
            count[num]++;
        }else{
            count[num] = 1;
        }
    }
    console.log(Object.keys(count));
    return count;
}

// let array = [0,1,2,3,4,5,6,7,8,9];
// array[8]=1; // here this will update the value
// console.log(array);

// function countNumbers(arr) {
//     let count = {};
//     for(let num of arr){
//         if(count[num]){
//             count[num]++;
//         }else{
//             count[num] = 1;
//         }
//     }
//     return count;
// }

let array = [8,8,5,4,3,2,2];
// let result = countNumbers(array);
// console.log(result);

// let count = {};
// count[8] = 1;
// console.log(count);
// count[name] ="Asif";
// console.log(count);

// // Method 1: Using reduce
// const result = array.reduce((total, current) => {
//     total[current] = (total[current] || 0) + 1;
//     return total;
// }, {});
// console.log(result);

// // Method 2: Using forEach
// const occurrences = {};
// array.forEach(num => {
//     debugger
//   occurrences[num] = (occurrences[num] || 0) + 1;
// });
// console.log(occurrences);

// Method 3: For loop
const occurrences3 = {};
for (let i = 0; i < array.length; i++) {
    debugger
  const num = array[i];
  occurrences3[num] = (occurrences3[num] || 0) + 1;
}
console.log(occurrences3);

// // Method 4: Map with count (ES6)
// const occurrences4 = new Map();
// array.forEach(num => {
//   occurrences4.set(num, (occurrences4.get(num) || 0) + 1);
// });
// console.log(Object.fromEntries(occurrences4));

// Output: { '2': 2, '3': 1, '4': 1, '5': 1, '8': 2 }


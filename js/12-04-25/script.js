const A = [1, 2, 3, 4, 5, 1, 2]; 
const B = [1,2]; 
let count = 0; 
let j = 0; 

for (let i = 0; i < A.length; i++) {
  debugger
    if (A[i] === B[j]) {
      console.log("A[i]= ",A[i]);
      console.log("B[j]= ",B[j]);
        j++;
        
        if (j === B.length) {
          console.log("j= ",j);  
          console.log("count= ",count);
          count++;
          console.log("count increment= ",count);
            j = 0;
          console.log("j= ",j);
        }
    }
}

console.log("output= ",count);


// const A = [1,2,3,4,5,1,2];
// const B = [];
// let temp = 0;
// for(let i=0; i<=A.length; i++){
//   for(let j=0; j<=B.length; j++){
//     if(A[i] === B[j]){
//       temp++;
//       continue;
//     }else{
//       break;
//     }
//   }
// }
// console.log(temp);
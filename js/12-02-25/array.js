let array = [7,6,4,3,9,4,3,5,1];

function findMax(arr){ 
    let max = arr[0];  
    
    for(let i = 1; i < arr.length; i++){  
        
        if(arr[i] > max){  
            max = arr[i];  
        }
    }
    
    return max;  
}

console.log(findMax(array));  

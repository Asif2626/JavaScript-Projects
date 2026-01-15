function swap(a,b){
    console.log("Original value of a is: ",a);
    console.log("Original value of b is: ",b);
    let temp = a;
    a = b;
    b= temp;
    console.log("Swaped value of a is: ",a);
    console.log("Swaped value of b is: ",b);
}
swap(10,20);

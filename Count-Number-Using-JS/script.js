let nums = document.querySelectorAll(".num");
let intrerval =4000;

nums.forEach((num) => {
  let startvalue = 0;
  let endValue = parseInt(num.getAttribute("data-val"));
  let duration = Math.floor(intrerval / endValue);
  let counter = setInterval(function(){
    startvalue +=1;
    num.textContent = startvalue;
    if(startvalue == endValue){
      clearInterval(counter);
    }
  },duration
  );
});
//if a number is prime or not


let num=17;
let c=0;
   for(i=1;i<=num;i++){
    if (num%i===0)
       c=c+1;
       }
    if(c===2){
      console.log("Yes it is a prime")
    }else{
      console.log("No it is not a prime")
    }
console.log('exampl2-1')
var n = 28;

  if (n===1)
  {
    console.log('this is not a prime number');
  }
  else if(n === 2)
  {
    console.log('this is a prime number')
  }
for (i =2; i<n; i++){
 
    if(n % i == 0){
          console.log(n,'not a prime number')
          break
    }
    else{ 
        console.log(n,'is a Prime Number');
     break;
}
}




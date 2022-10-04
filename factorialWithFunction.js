//factorial with Function
function factorial(num){ 
var factorial =1;
for( var i=1; i<=num; i++){
    factorial = factorial*i  
}
return factorial;
}
var sevenfactorial = factorial(4);
var fivefactorial = factorial(5);
console.log("7 factorial is :",sevenfactorial);
console.log("5 factorial is :",fivefactorial);

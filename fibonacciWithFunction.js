function Fibonacci(n){
    var fibo =[0,1];
    for (var i=2; i<=n; i++){
        fibo[i] =fibo[i-1]+fibo[i-2]
    }
 return fibo;
} 
var result = Fibonacci(11);
console.log(result); 
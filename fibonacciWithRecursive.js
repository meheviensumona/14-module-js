// recursive hocche funtion er vitore funtion k call kora
//10 tomo poder maan show korbe
function Fibonacci(n){
    if(n == 0){
        return 0;
    }
    if (n == 1){
        return 1;
    }
    else{
        return Fibonacci(n-1) + Fibonacci(n-2);
    }
}
var result = Fibonacci(10);
console.log(result);
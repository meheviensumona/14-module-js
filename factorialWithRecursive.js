//function er vitore function call korake recursive function bola hoi

//4! = 1*2*3*4
//5! = 1*2*3*4*5
//6 = (6-1)!*6
//7 = (7-1)!*7
//8 = (8-1)!*8
//n = (n-1)!*n

function factorial(n){
if(n == 0){
    return 1;
}
else{
    return n * factorial(n-1);
}
}
var result = factorial(5)
console.log("5 factorial is",result)








// var i =10;
// while(i>=1){
//     i--
// }
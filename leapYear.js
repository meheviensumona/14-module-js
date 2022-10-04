//Leap Year
//Example-1
console.log("Example-1")

const year = 2000;
let remminder = year%4;
if(remminder == 0){
    console.log('Is is a leap year');
}
else{
    console.log('Your year is not a leap year')
}
//currect Leap year
//Example-2
console.log("Example-2")
function isLeapyear(year){
  
if(year%4 == 0 &&  year%100 !=0  || year%400 ==0 ){
    console.log('Is is a leap year');
}
else{
    console.log(year,'is not a leap year')
}
}
isLeapyear(1700)



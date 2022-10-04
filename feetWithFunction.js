// convert inch to Feet with (function)
//Example-1
console.log('Example-1')
function  inchToFeet(num){
    var result = num/12;
    result = result.toFixed(2)
    console.log( "your Height is:",result,"Feet")
}

inchToFeet(70);   //Note function k joto bar call korbo toto bar e output dekhabe
inchToFeet(333);
inchToFeet(222);

//Example-2
console.log('Example-2:')

function inch(num){
    result = num/12;
    return result;
}
var senior = [156,244,444];
var mimFeet = inch(senior[0]);
var tushibaFeet = inch(senior[1]);
var ratulFeet = inch(senior[2]);
console.log("Mim Feet is",mimFeet)
console.log("Tushiba Feet is ",tushibaFeet)
console.log("Ratul Feet is",ratulFeet)


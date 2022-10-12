console.log(a);  //can be accessed, but undefined
var a = 10;
console.log(a); //10

console.log(b); //Reference Error, but in temporal dead zone
let b = 33;
const c = 56;
console.log(b+' '+ c); //33 56


fn(); //Prints "Inside Function"
function fn(){
    console.log("Inside Function");
}
fn(); //Prints "Inside Function"
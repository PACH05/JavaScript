//Function Currying

//Using Closures
let mult = function(x){
    return function(y){
        console.log(x*y);
    }
}
let mulBTwo = multiply(2);
mulBTwo(3);


//Using bind() method
let multiply = function(a,b){
    return a*b;
}
let mulByTwo = multiply.bind(this, 2); // sets 'x' parameter to 2

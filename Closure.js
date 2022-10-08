//Closures

//Outer Function
function outer(){
    let a = 10;
    //Inner Function
    function inner(){
        console.log("The value is : "+ a);
    }
    return inner;
}

let fnC = outer(); // fnC stores the return value of the function outer which is another function
console.log(fnC); // Prints the name of the function it stores
fnC()             // fnC becomes a callable function as it holds a function inside it

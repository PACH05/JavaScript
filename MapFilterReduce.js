const nums = [2,4,6,8]

//Map Method
const doubleArr = nums.map((item)=>item*2)  //Argument of the map method is a callback
console.log("Double of array elements are : " + doubleArr)

//Filter Method 
const evens = nums.filter((item)=> item%2==0);  //Argument of the filter method is a callback
console.log("The even numbers in the array are : "+evens);

//Reduce Method

const sum = nums.reduce(function(acc, curr){
    acc = acc + curr;
    return acc;
},0);       //The first argument of the reduce method is the callback function 
//and the second argument is the initial value of acc. 
// Here acc = Accumulator and curr = Current element.
console.log("The sum of the array elements is : " + sum);

// 6. functions


// function declaration
// function add(a,b){
//     console.log(a+b)
// }
// add(2,3)

//function expression
// let add = function(a,b){
//     console.log(a+b)
// }
// add(2,3)

// arrow function
// let add = (a,b)=>{console.log(a+b)}
// add(1,3)

//printing dynamic value 
function greet(name){
    // console.log("hello "+name+" how are you"); //wrong
    console.log(`hello ${name} how are you`) // correct
}
greet("Rohan")
greet("Ram")
greet("Sara")


// parameters vs arguments
// function add(a,b){ // fuc implementation
//     console.log(a+b) // a,b are called as parameters
// }
// add(2,3) // function call 2,3 arguments 


//passing default values
// function add(a=0,b=0){
//     console.log(a+b)
// }
// add()


//rest and spread parameters
// ... in the function are called as rest 
// ... in the Arrays are called as spread 
// function add(a,b,...val){
//         console.log(val);
//     let count = a+b ;
//     for(let i of val){
//         count+=i
//     }
//     console.log("Total: "+count);
// }
// add(1,2);


//first class fucntion
//  1.let fnc = function add(a,b){console.log(a+b)}

// 2.function represent(add){
//     add(2,2)
// }
// represent(function add(a,b){console.log(a+b)})

//  let fnc = function add(a,b){console.log(a+b)}

// function represent(fnc){
//     fnc(2,2)
// }
// represent(fnc)




// Higher Order Function HOF
// 1st way of HOF
//  let fnc = function add(a,b){console.log(a+b)}

// function represent(fnc){ 
//     fnc(2,2) // it is HOF because takes func as a parameter
// }
// represent(fnc)

// // 2 way of HOF 
// function hof(){ // it is HOF because it returns func
//     return function(a,b){
//         console.log("a="+a," b="+b);
//     }
// }
// hof()(10,100)




// pure vs impure function
// A function is said to be pure without any side effects 
// means without any changes on the outer variable

// function add(b){
//     let a = 10
//     console.log(++a+b); impure function
//     console.log(a)
// }
// add(10)

// function add(b){
//     let a = 10
//     let c = a
//     console.log(++c+b);  pure function
//     console.log(a)
// }
// add(10)


//closures
// function parent(){
//     let a = "parent"
//     return function(){
//       console.log("I am child of function called "+a);
//     }
// }
// parent()()

// lexical scoping
// function one(){
//     let a = 1; 
   
//     return function two(){
//         let b = 2
//          console.log(a)
//         console.log(b)
//     }
// }
// one()()

//Immediately Invoked Function Expression IIFE
// (function(a,b){console.log(a,b)})(1,2)

//hoisting

// add(2,3)

// let add=(a,b)=>{
//     console.log(a+b)
// }





JavaScript Quick Revision

1.VARIABLES:
Used to store data values in memory.
JavaScript has 3 ways to declare variables:
=> var (ES5)
* Function scoped
* Gets attached to window object (if declared globally in browser)
* Can be redeclared
* Can be updated
* Hoisted and initialized with undefined
* Does NOT have TDZ
  
=> let (ES6)
* Block scoped
* Cannot be redeclared in the same scope
* Can be updated
* Hoisted but NOT initialized
* Has Temporal Dead Zone (TDZ)
* Does NOT attach to window object
  
=> const (ES6)
* Block scoped
* Cannot be redeclared
* Cannot be updated
* Must be declared and initialized at the same time
* Hoisted but NOT initialized
* Has TDZ
* Does NOT attach to window object
Important point about const:
If const holds an object or array, you cannot reassign it, but you can modify its internal values.
Example:
const obj = {name: "Rohan"}
obj.name = "Ram" // allowed
obj = {} // error

=> Global Scope
A variable declared outside any function or block has global scope.
Example:
let a = 10;
It can be accessed anywhere in the program.

=>Function Scope
Variables declared with var inside a function are accessible anywhere inside that function.
Example:
function test(){
if(true){
var a = 10;
}
console.log(a); // works
} Because var is function scoped, not block scoped.

=> Block Scope
Variables declared with let and const are accessible only inside the block { } where they are declared.
Example:
if(true){
let a = 10;
}
console.log(a); // error

=> Temporal Dead Zone (TDZ) – It is the time between when a variable is hoisted and when it is actually initialized.
During this period, accessing the variable gives a ReferenceError.
Example:
console.log(a); // ReferenceError
let a = 10;
Here:let a is hoisted.But it is not initialized.So accessing it before declaration causes error.
Important:
var does not have TDZ because it is initialized with undefined during hoisting.

=> Hoisting -
Hoisting means JavaScript moves declarations to the top of their scope before execution.But behavior is different for var and let.
* Hoisting with var:
console.log(a); // undefined
var a = 10;
Internally becomes:
var a;
console.log(a);
a = 10;
So var is hoisted and initialized with undefined.
* Hoisting with let:
console.log(a); // ReferenceError
let a = 10;
Internally:
let a; // hoisted but not initialized
console.log(a); // TDZ error
a = 10;

=>Redeclaration difference
var a = 10;
var a = 20; // allowed
let a = 10;
let a = 20; // error

=>Reassignment difference
let a = 10;
a = 20; // allowed
const a = 10;
a = 20; // error

=>Best Practice
Avoid var in modern JS.
Use const by default.
Use let only if value needs to change

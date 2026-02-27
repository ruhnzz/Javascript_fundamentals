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

=> Global Scope:
* A variable declared outside any function or block has global scope.
Example:
let a = 10;
* It can be accessed anywhere in the program.

=>Function Scope
* Variables declared with var inside a function are accessible anywhere inside that function.
Example:
function test(){
if(true){
var a = 10;
}
console.log(a); // works
}
* Because var is function scoped, not block scoped.

=> Block Scope
* Variables declared with let and const are accessible only inside the block { } where they are declared.
Example:
if(true){
let a = 10;
}
console.log(a); // error

=> Temporal Dead Zone (TDZ) 
* It is the time between when a variable is hoisted and when it is actually initialized.
During this period, accessing the variable gives a ReferenceError.
Example:
console.log(a); // ReferenceError
let a = 10;
* Here:let a is hoisted.But it is not initialized.So accessing it before declaration causes error.
* Important:var does not have TDZ because it is initialized with undefined during hoisting.

=> Hoisting 
* Hoisting means JavaScript moves declarations to the top of their scope before execution.But behavior is different for var and let.
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

* Redeclaration difference
var a = 10;
var a = 20; // allowed
let a = 10;
let a = 20; // error

* Reassignment difference
let a = 10;
a = 20; // allowed
const a = 10;
a = 20; // error

Best Practice
* Avoid var in modern JS.
* Use const by default.
* Use let only if value needs to change

---------------------------------------------------------------------------------------------------------------------------------------------------
2. DATA TYPES & TYPE SYSTEM 
* JavaScript is: Dynamically typed,Loosely typed
* Meaning:You don’t declare type explicitly.A variable can change its type at runtime.
Example:
let a = 2 // number
a = "hello" // now string That is called Dynamic Typing.

* Data Types in JavaScript There are 2 main categories:
A) Primitive Types
B) Reference (Non-Primitive) Types

A) Primitive values are:
* Stored directly in memory
* Copied by value
* Immutable (cannot be changed directly)
we have 7 types in primitive
* 1:String- '' "" ``
Example:
let name = "Rohan"
* 2: Number- Includes integers, decimals, Infinity, NaN
Example:
let a = 10
let b = 3.14
* 3:Boolean
true or false
* 4:null
Represents intentional absence of value.
Example:
let a = null
Important:
typeof null → "object" (this is a historical bug in JavaScript)
* 5:undefined
A variable declared but not assigned value.
let a;
console.log(a); // undefined
* 6:Symbol (ES6)
Used to create unique identifiers.
Example:
let myId = Symbol("id");
let obj = { id: 1, name: "abc" };
obj[myId] = 100;
Symbols prevent key name conflicts.
* 7:BigInt
Used for very large integers beyond Number limit.
let a = 9007199254740991n (Number.MAX_SAFE_INTEGER)
Note:
You must add n at the end.

B) Reference (Non-Primitive) Types
* Stored in heap memory.
* Copied by reference (not actual value).
* 1:Object
let obj = { id: 1, name: "abc" };
* 2:Array
let arr = [1,2,3];
Arrays are actually objects internally.
* 3:Function
function add(){
return 10;
}
* Functions are also objects in JavaScript.
* Important: typeof function(){} → "function" But technically functions are special objects.

  Primitive vs Reference (Very Important Interview Question)
* Primitive → Copy by value
let a = 10;
let b = a;
b = 20;
a = 10 (unchanged)
* Reference → Copy by reference
let obj1 = {name:"Rohan"};
let obj2 = obj1;
obj2.name = "Ram";
obj1.name → "Ram" (both changed)

typeof Quirks (Interview Favorite)
* console.log(typeof NaN); // "number"
* console.log(typeof null); // "object" (bug)
* console.log(typeof undefined); // "undefined"
* console.log(typeof []); // "object"
* console.log(typeof function(){}); // "function"
* Important: NaN stands for “Not a Number” But typeof NaN → "number"

Type Coercion (Automatic Type Conversion)
JavaScript automatically converts types when needed.
Example:
* console.log("5" + 1);
Result → "51"
Reason: + with string → concatenation
* console.log("5" - 1);
Result → 4
Reason: - forces numeric conversion
More examples:
* console.log(true + 1); // 2
* console.log(false + 1); // 1
* console.log(null + 1); // 1
* console.log(undefined + 1); // NaN
  
There are two types of coercion:
* Implicit Coercion (automatic)
* Explicit Coercion (manual) example: Number("5") , String(10), Boolean(0)

Truthy and Falsy Values
Falsy values (only 7 falsy values exist in JavaScript):
* false
* 0
* -0
* "" (empty string)
* null
* undefined
* NaN
* Everything else is Truthy.
  
Examples of truthy:
* "0"
* "false"
* []
* {} Empty array and empty object are truthy.
* function(){}
* 1
* -1
* "hello"

------------------------------------------------------------------------------------------------------------------------------------------
3. OPERATORS 

 Arithmetic Operators - Used for mathematical calculations.
* Addition and Concatenation +
* Subtraction -
* *=>Multiplication
* / => Division
* % Modulus (remainder)
* ** Exponentiation (power)
  
2. Comparison Operators - Used to compare two values. Returns true or false.
* Greater than >
* < Less than
* = Greater than or equal
* <= Less than or equal
* == Loose equality
* === Strict equality
* != Loose not equal
* !== Strict not equal
* == → compares value only (type coercion happens)
* === → compares value + type (no coercion)
Example:
5 == "5" // true
5 === "5" // false
* Best Practice: Always use === instead of ==

3. Logical Operators - Used for combining conditions.
* && AND
* || OR
* ! NOT

Short-circuit behavior:
* true || something → stops at true
* false && something → stops at false

4. Assignment Operators
* = Assign
* += Add and assign
* -= Subtract and assign
* *= Multiply and assign
* /= Divide and assign
* %= Modulus and assign
Example:
let a = 10;
a += 5; // insted of a = a+5

5. Unary Operators - Operate on a single operand.
* typeof → returns data type
* ++ → increment
* -- → decrement

Pre vs Post Increment (Very Important)
let a = 5;
* ++a // Pre-increment → first increase, then use
* a++ // Post-increment → first use, then increase
Example:
let a = 5;
console.log(++a); // 6
console.log(a++); // 6
console.log(a); // 7

6. Ternary Operator

* Shortcut for if-else. => condition ? value_if_true : value_if_false
Example:
let age = 18;
let result = age >= 18 ? "Adult" : "Minor";

typeof vs instanceof (Important Interview Topic)

* typeof- Used for primitive type checking, Returns a string
Example:
typeof 10 // "number"
typeof "hello" // "string"
typeof null // "object" (bug)
typeof [] // "object"

* instanceof- Used to check object type, Checks prototype chain

Example:

let arr = [];
arr instanceof Array // true
arr instanceof Object // true

Difference:

* typeof → works well for primitives
* instanceof → works for objects, arrays, custom classes

Example:
function Person(){}
let p = new Person();
p instanceof Person // true

* Strict Not Equal !==

* Nullish Coalescing (ES2020) ?? - Used when you want default value only for null or undefined.
let name = null;
let result = name ?? "Guest"; // "Guest"

Difference:

* || → checks for falsy
* ?? → checks only for null or undefined

Example:

0 || 10 // 10
0 ?? 10 // 0

* Optional Chaining (ES2020) ?. - Prevents error if property doesn’t exist.
let user = {};
console.log(user.address?.city); // undefined (no error)

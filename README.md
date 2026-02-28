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


---------------------------------------------------------------------------------------------------------------------------------
4. Control flow
 
Control flow decides how your program executes based on conditions.

* 1. if statement

Executes block only if condition is true.

Example:

let a = 2;

if (a % 2 === 0) {
console.log("even");
}

Best practice:
Use === instead of ==

* 2. if–else

Executes one block if true, another if false.

let b = 3;

if (b % 2 === 0) {
console.log("even");
} else {
console.log("odd");
}

* 3. if–else if–else

Used for multiple conditions.

let c = 3;

if (c % 2 === 0 && c % 3 === 0) {
console.log("divisible by 6");
}
else if (c % 2 === 0) {
console.log("divisible by 2");
}
else {
console.log("divisible by 3");
}

Important:
Conditions are checked top to bottom.
As soon as one condition is true, remaining are skipped.

* 4. switch statement

Used when checking multiple fixed values.

Your code:

let val = 0;
switch(val){
case 0:
console.log(0);
case 1:
console.log(1);
case 2:
console.log(2);
default:
console.log(3)
break;
}

Important Concept: Fall-through

Since you didn’t use break after each case, all cases after matching one will execute.

For val = 0, output will be:

0
1
2
3

Because it keeps executing until break.

Correct version (if you don’t want fall-through):

switch(val){
case 0:
console.log(0);
break;
case 1:
console.log(1);
break;
case 2:
console.log(2);
break;
default:
console.log(3);
}

Interview Tip:
switch uses strict comparison (===) internally.

* 5. Early Return (Very Important Concept)

Used to exit function early to avoid nested code.

function add(){
let v1 = 2;
if (v1 === 3) {
return true;
}
return false;
}


Early return is very important in:

* API validations
* Error handling
* React components

Important Extra Control Flow Concepts You Should Add

* 1. Nested if

if (a > 0) {
if (a % 2 === 0) {
console.log("positive even");
}
}

But avoid deep nesting → use early return.

* 2. Truthy/Falsy in if

if ("hello") → runs
if (0) → does not run

Because JS converts condition to boolean.

* 3. Short-circuit Control Flow

Logical operators can replace if:

let name = userName || "Guest";

Instead of:

if (!userName) {
name = "Guest";
}

example :

In JavaScript, the || (OR) operator does not return a boolean.
It returns one of the actual values.

How || works:

It returns:

The first truthy value it finds

If none are truthy, it returns the last value

Example:

let name = userName || "Guest";

Case 1: userName = "Rohan"

"userName" is truthy
So expression becomes:

"Rohan" || "Guest"

Since first value is truthy, it returns "Rohan"

name = "Rohan"

Case 2: userName = ""

Empty string is falsy.

"" || "Guest"

Since first value is falsy, it moves to second value.

* Important:

|| does NOT return true or false unless operands are boolean.
* Why this is useful?

It is commonly used to give default values.

* Just like ||, the && operator also does NOT return true/false always.
It returns actual values.

How && works:

It returns:

The first falsy value it finds

If all values are truthy → it returns the last value

Think of it like this:

|| → returns first truthy
&& → returns first falsy

Now let’s see examples.

Example 1:

"Rohan" && "Ram"

Step 1: "Rohan" is truthy → continue
Step 2: "Ram" is also truthy → no falsy found

Result → "Ram" (last value)

So:

let val = "Rohan" && "Ram";
console.log(val); // "Ram"

Example 2:

0 && "Hello"

Step 1: 0 is falsy
Stop immediately.

Result → 0

Example 3:

true && 100

true is truthy → continue
100 is truthy

Result → 100

Example 4:

false && 100

false is falsy
Stop.

Result → false

Practical Use Case

Conditional execution

Instead of:

if (isLoggedIn) {
showDashboard();
}

We write:

isLoggedIn && showDashboard();

If isLoggedIn is true → function runs
If false → it stops immediately

With objects

let user = { name: "Rohan" };

let result = user && user.name;

If user exists → result = "Rohan"
If user is null → result = null (no error)

Important Comparison

|| → gives default value
&& → allows execution only if left side is truthy

Quick Comparison Table

A || B
→ If A is truthy → return A
→ Else → return B

A && B
→ If A is falsy → return A
→ Else → return B

Simple Trick to Remember

|| is like: "If not A, then B"
&& is like: "Only if A, then B"

Very important interview pattern:

let name = userName || "Guest";
let data = isValid && fetchData();

* 4. Conditional (Ternary) as Control Flow

let result = age >= 18 ? "Adult" : "Minor";

------------------------------------------------------------------------------------------------------------------------------------
5: LOOPS 

Loops are used to repeat code until a condition becomes false.

* for loop

Best when you know how many times to iterate.

Syntax:

for (initialization; condition; update) {
// code
}

Example (1 to 5):

for (let i = 1; i <= 5; i++) {
console.log(i);
}

Flow:
1 → check condition → run → increment → repeat

* while loop

Used when number of iterations is not known in advance.

Syntax:

initialization
while (condition) {
// code
update
}

Example:

let i = 1;
while (i <= 5) {
console.log(i);
i++;
}

Important:
If you forget update → infinite loop.

* do...while loop

Runs at least once (even if condition is false).

Syntax:

initialization
do {
// code
update
} while (condition);

Example:

let i = 1;
do {
console.log(i);
i++;
} while (i <= 5);

* Difference:

while → checks condition first
do...while → runs first, checks later

break and continue

* break → completely exits the loop
* continue → skips current iteration

Example:

for (let i = 1; i <= 5; i++) {
if (i === 3) {
continue;
}
console.log(i);
}

Output:
1 2 4 5

 for...in vs for...of (Very Important Interview Topic)


let a = ['a','b','c'];

Let’s understand the difference.

* for...in

Iterates over keys (indexes in array)

Mostly used for objects

Output:

0
1
2

Because it prints indexes.

* for...of

Iterates over values

Used for arrays, strings, iterable objects

Output:

a
b
c

Because it prints values.

Better comparison:

let a = ['a','b','c'];

for (let index in a) {
console.log(index, a[index]);
}

for (let value of a) {
console.log(value);
}

Rule:

Use for...of for arrays.
Use for...in for objects.

Example with Object:

let obj = {name: "Rohan", age: 20};

for (let key in obj) {
console.log(key, obj[key]);
}

for...of will NOT work on plain objects.

Traditional for loop with array

You wrote:

for(let i = 0; i < a.length; i++){
console.log(i, a[i]);
}

This is:

Most flexible

Gives index access

Can move forward/backward

Can skip steps

Important Interview Points You Should Add

* Infinite loop example

while(true){
// runs forever
}

Looping over string

for (let char of "hello") {
console.log(char);
}

* Nested loops

Used in patterns, matrix problems.

Performance note

for loop → generally fastest
forEach → cleaner but slightly slower
for...of → modern and clean

Quick Interview Summary

for → known iterations
while → condition-based
do...while → runs at least once
break → exit loop
continue → skip iteration
for...in → keys/indexes
for...of → values
Use for...of for arrays
Use for...in for objects

------------------------------------------------------------------------------------------------------------------------
6: FUNCTIONS
* Function Declaration


function add(a,b){
console.log(a+b)
}
add(2,3)

This works because function declarations are hoisted.

* Function Expression


let add = function(a,b){
console.log(a+b)
}
add(2,3)

Here the function is stored inside a variable.

* Arrow Function


let add = (a,b)=>{console.log(a+b)}
add(1,3)

You can also write shorter:

let add = (a,b) => console.log(a+b)

* Printing Dynamic Value


function greet(name){
console.log(`hello ${name}`);
}



* Parameters vs Arguments

let add = function(a,b){
console.log(a+b)
}
add(2,3)

a, b → parameters
2, 3 → arguments

* Default Parameters

function add(a=0,b=0){
console.log(a+b)
}
add()

* Rest and Spread

function add(a,b,...val){
console.log(val);
let count = a+b ;
for(let i of val){
count+=i
}
console.log("Total: "+count);
}
add(1,2);

Here ...val is rest parameter.
And yes, ... in arrays is called spread.

* First Class Function
Functions can:

1. Be stored in variables
2. Be passed as arguments
3. Be returned from another function

//  1.let fnc = function add(a,b){console.log(a+b)}

// 2.function represent(add){
//     add(2,2)
// }
// represent(function add(a,b){console.log(a+b)})



* Higher Order Function (HOF)

A function is HOF if:

1. It takes another function as argument
2. OR returns a function

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



* Pure vs Impure Function

This is NOT impure:

function add(b){
let a = 10
console.log(++a+b);
console.log(a)
}

It is still pure because:

* It does not modify any external variable.
* It does not depend on external state.

A real impure function example:

let a = 10;
function add(b){
a++;
return a + b;
}

Here it changes outer variable → impure.

Pure function example:

function add(a,b){
return a+b;
}

No side effects. Same input → same output.

* Closures

function parent(){
let a = "parent"
return function(){
console.log("I am child of function called "+a);
}
}
parent()()

Child function remembers variable a even after parent execution ends → closure.

* Lexical Scoping

Inner function can access variables of outer function because of lexical scope.

* IIFE : Immediately Invoked Function Expression 

(function(a,b){
console.log(a,b)
})(1,2)

* Hoisting

Function declarations are hoisted.
Arrow functions and function expressions are NOT hoisted.

So this will throw error:

add(2,3)

let add = (a,b)=>{
console.log(a+b)
}

Because let variables are in Temporal Dead Zone.

-----------------------------------------------------------------------------------------------------------------------------
7. ARRAYS 

What is an Array?

An array is an ordered collection of values stored in a single variable.

Example:

let arr = [1, 2, 3, 4];

Important Properties:

* Zero-based index

* Dynamic size (can grow/shrink)

* Can store mixed data types

Arrays in JavaScript vs Other Languages

* In JavaScript:Arrays can store different data types.

* They are dynamic.Internally they are objects.

Example:

let arr = [1, null, "abc", undefined, [10,20], {id:1,name:"Rohan"}];

In languages like C, C++, Java:Arrays are fixed size.Must store same data type only.

Creation

let arr = [1,2,3];
let arr2 = new Array(1,2,3); // less common

 Access & Modify

* Access:arr[0]

* Modify:arr[0] = 100

Important Basic Methods (Mutating Methods)

These change the original array.

* push(): Adds element at end.

* pop(): Removes element from end.

* shift(): Removes element from beginning.

* unshift(): Adds element at beginning.
* splice(): Most powerful array method.It modifies original array.

Syntax:
arr.splice(startIndex, deleteCount, item1, item2, ...)

splice Uses: arr = [1,2,3,4,5]

* Remove elements: arr.splice(2,2) //[1,2,5]

* Add elements: arr.splice(2,0,6,7) //[1,2,6,7,5]

* Replace element: arr.splice(2,1,3) // [1,2,3,7,5]

* Important:splice modifies original array.

* slice(): Used to extract part of array.

Syntax:
arr.slice(start, end)

* End index is exclusive.

* Does NOT modify original array.

* Returns new array.

Example:
let newArr = arr.slice(1,4);

Difference:

* splice → modifies original
* slice → does not modify original

reverse()

* Reverses array in place.
* Modifies original array.

arr.reverse();

sort()

* Sorts array alphabetically by default.
* arr.sort() works fine for string and characters

Example:

let arr = [100,2,30];
arr.sort(); // fails for numbers

Output:
[100,2,30] → wrong numeric order

* Because sort converts to string and compares.

* For numbers, always use compare function:

* Ascending: arr.sort((a,b) => a - b);

* Descending: arr.sort((a,b) => b - a);

* Important: sort() modifies original array.

Iteration Methods (Very Important)

* These use callback functions.

A) forEach()

* Used to loop through array.

* Does not return new array.

* Cannot break early.

arr.forEach((val) => {
console.log(val);
});

B) map()

* Returns a new array.

* Used to transform data.

* Same length as original.

let newArr = arr.map(val => val * 10);

// let newarr=arr.map((val)=>{return val*10})//[10, 20, 30, 40, 50]

// let newarr = arr.map((val)=>{if(val>3){return val*10}})//(5) [undefined, undefined, undefined, 40, 50]

// let newarr = arr.map((val)=>{if(val>3){return val*10} else{return "not found" }}) //['not found', 'not found', 'not found', 40, 50]

* Important: If you don’t return inside map → it gives undefined.

C) filter()

* Returns new array.

* Filters based on condition.

* May return fewer elements.

let filtered = arr.filter(val => val > 3); //4,5

D) reduce()

* Most powerful method.
* Reduces array to single value.

* Syntax: arr.reduce((accumulator, currentValue) => {}, initialValue)

Example:

let total = arr.reduce((acc,val) => acc + val, 0);

* Used for:Sum, Product, Counting, Grouping

E) find()

* Returns first matching element.

* Returns undefined if not found.

let f = arr.find(val => val === 2);
let obj= [{id:1,key:1,name:"abc"},{id:2,key:2,name:"def"},{id:3,key:1,name:"ghi"}]
let f = obj.find((val)=>{if(val.key===1){return val}})//{id: 1, key: 1, name: 'abc'} 
let f = obj.find((val)=>{if(val.key===10){return val}}) //undefined 


F) some()

* Returns true if at least one element satisfies condition.

  let marks = [10,20, 40,95]

marks.some(val => val > 90); //true

G) every()

* Returns true only if all elements satisfy condition.

 let ans = marks.every((val)=>val>0)//true
 
let ans = marks.every((val)=>val>50) //false

Mutating vs Non-Mutating Methods (Interview Question)

* Mutating (change original):push, pop, shift, unshift, splice, sort, reverse

* Non-mutating:slice, map, filter, reduce, find, some, every

Important Interview Differences

map vs forEach

* map:Returns new array, Used for transformation

* forEach:Returns undefined, Used for side effects

find vs filter

* find:Returns first match, Returns single element

* filter:Returns all matches, Returns array

some vs every

* some:Checks if at least one passes

* every:Checks if all pass

Important Extra Concepts You Should Add

* Array length property - arr.length

Spread operator: The spread operator expands (spreads out) elements of an iterable like an array or object into individual elements.
if we don't use spread and simple copy 
let a = [1,2,3]
b = a
the chnages made in b will reflect in a to avoid this we use spread which will copy real values not reference
let copy = [...arr];

Array destructuring: Array destructuring allows you to extract values from an array and assign them to variables in a single statement.
let [a,b] = arr;
let arr = [1, 2, 3, 4];
let [x, , y] = arr;
console.log(x); // 1
console.log(y); // 3

includes(): includes() is an array method that checks whether a specific value exists in the array.
It returns true or false.
let arr = [1, 2, 3, 4];

console.log(arr.includes(3)); // true
console.log(arr.includes(5)); // false

Quick Interview Summary

Array → ordered collection
Zero-based indexing
Dynamic and can store mixed types
splice modifies, slice doesn’t
sort needs compare function for numbers
map → transform
filter → condition
reduce → single value
find → first match
some → any true
every → all true





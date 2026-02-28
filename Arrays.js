//7. ARRAYS

//What is Arrays?
// let a = 1,2,3,4
let a = [1,2,3,3]

//Arrays in JS and Arrays in Other Programming language?
let b = [1,2,3,4] // number type 
let c = [1,null,"abc",undefined,[10,20],{id:1,name:"rohan"}]
//int other programming langugaes like c,c++,java it is not possible 
// to store diiferent datatype values in one single array
//but it is possible in JavaScript and python

//creation
// let arr = [1,2,3]

//Access
// arr[0]
// arr[1]
// arr[2]
//modify
// arr[0] = 100

//Arrays Methods
// let arr = [1,2,3,4,5]
//push
// arr.push(6)
//pop
// arr.pop()
//shift
// arr.shift()
//unshift
// arr.unshift(1)

//splice
//arr.splice(start index,no.of elemets to remove)
// arr.splice(2,2) // 1,2,5
// splice to add elements at particular index 
// arr.splice(2,0,6,7) // 1,2,6,7,5
// splice to replace element at particular index
// arr.splice(2,1,3) //1,2,3,7,5
// arr.splice(3,1,4) // 1 2 3 4 5

// slice
// let newarr = arr.slice(1,4)

//splice vs slice
// splice workd and manipulate the original array
// slice will work and manipualte on array and store in new array


//reverse
// arr.reverse()

//sort 
// let arr = [100,2,30]
// arr.sort()
// let names= ["Rahul","Alia","Zain","Jhon"]
  // without compare function
  //strings and character can be sorted without compare func

  // with compare function
  // numbers must use compare function
  //sort ascending order
//   let arr = [5,1,4,3,2]
//   let asc = arr.sort((a,b)=>a-b)
  //sort in decending
//   let desc = arr.sort((a,b)=>b-a)

// note: sort will makes changes in original array


// forEach
// let arr = [1,2,3,4,5]
// arr.forEach((val)=>console.log(val*10))


//map
// let newarr=arr.map((val)=>{return val*10})//[10, 20, 30, 40, 50]
// let newarr = arr.map((val)=>{if(val>3){return val*10}})//(5) [undefined, undefined, undefined, 40, 50]
// let newarr = arr.map((val)=>{if(val>3){return val*10} else{
//     return "not found"
// }}) //['not found', 'not found', 'not found', 40, 50]

//filter
// let f = arr.filter((val)=>val>3) // 4,5

//reduce
// arr.reduce(function(acc,val),start value of accumlator)
// let total = arr.reduce((acc,val)=>acc+val,0)
//acc = 0 0+1= 1
//acc = 1 1+2 = 3
//acc = 3 3+3 = 6
//acc = 6 6+4 = 10
// acc =10 10+5 =15

//find
// let f = arr.find((val)=>val===2)
// let obj= [{id:1,key:1,name:"abc"},{
//     id:2,key:2,name:"def"},
//     {id:3,key:1,name:"ghi"}]
// let f = obj.find((val)=>{if(val.key===1){return val}})//{id: 1, key: 1, name: 'abc'} 
// let f = obj.find((val)=>{if(val.key===10){return val}}) //undefined 

//some
let marks = [10,20, 40,95]
// let ans = marks.some((val)=>val>90) //true
// let ans = marks.some((val)=>val>100) //false

//every
// let ans = marks.every((val)=>val>0)//true
//let ans = marks.every((val)=>val>50) //false





// 8. OBJECTS

//what is a object?
// objects are used to store key value pairs
// let obj = {} // empty object
// let obj = {name:"harsh",age:12}

//how to acess objects
//obj.name
//obj["name"]

// dot vs []
// let aa = "name"
// obj.aa //undefined
// obj[aa] //'harsh'
// . will look for prop called aa inside obj it will not consider the value of aa
//  it will treat aa as a prop in obj
// [] will consider the value of aa by converting 
// obj[aa] = convert to object["name"]

//Nesting and Deep Access
let user = {name:"harsh",age:24,
    address: {city:"Delhi", 
        location:{lat:24,lng:23}
    }
}

//Object Destructuring
let {lat,lng} = user.address.location; 
// let {lat:latitude,lng} = user.address.location; can stire with other variable name in this way
// let {lat,long} = user.address.location; //undefined
// long will not work in destructuring we should use same 
// property name as variable name 


//looping techniques
// let obj = {name:"harsh",age:12}
// 1. for in
// for(let key in obj){
//     console.log(key,obj[key])
// }
// 2. Object.keys()
// Object.key(obj) //(2) ['name', 'age']
// 3. Object.entries()
//Object.entries(obj)

// //Copying of Objects
// let obj = {name:"harsh",age:12}

// 1. Spread Operator
// let obj2 = {...obj,profession:"teacher"}
// obj2.age = 100
// 2. Object.assign
// let obj2 = Object.assign({profession:"teacher"},obj)
// 3. Deep clone

// let obj = {name:"harsh",age:12,Address:{city:"hyd"}}
// // let obj2 = {...obj}
// // obj2.Address.city="goa"
// let obj2 = JSON.parse(JSON.stringify(obj))
// obj2.Address.city="goa"


//Optional chaining
// let obj = {name:"harsh",age:12,Address:{city:"hyd"}}
// obj?.Address?.city //'hyd'
// obj?.Adrs?.city //undefined

// Computed Property
// let role = "teacher"
// let users = {name:"abc",age:21,[role]:"xyz"}

//key can be boolean and Number also
// let obj3 = {true:"yes", 32:"age"}

// what if key is fisrt-name
let object = {"first-name":"abc"}

// destructuring of first-name
let {"first-name":first}= object

// print key value pair using Object.entries
let obj = {name:"harsh",age:12,Address:{city:"hyd"}}
Object.entries(obj).forEach((val)=>{
    console.log(val[0],val[1])
})

// Arrays - TypeScript - Arrays are a collection of values of the same type
// Syntax - let arrayName: type[] = [value1, value2, value3]

let names1 = [] // assigns never type

let names2: [] = [] // assigns never type

let names: string[] = []

// names1.push("John") // error - push method doesn't exist on type never

// names2.push("John")  // error - push method doesn't exist on type never

names.push("John") // works

console.log(names)

// Alternate way

let names3: Array<string> = []

names3.push("John") // works

console.log(names3)

// or for numbers

let numbers: number[] = [] 
let numbers2: Array<number> = []

// Array of objects

type User2 = {
    name: string,
    isDeveloper: boolean
}

const users: User2[] = [] // array of objects


//users.push() // error - no arguments
users.push({name: "John", isDeveloper: true},{name: "Jane", isDeveloper: false}) // works

console.log(users)

// Array of arrays

let names4: string[][] = [] // array of arrays

names4.push(["John", "Jane"]) // works

console.log(names4)
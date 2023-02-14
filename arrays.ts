// Arrays - TypeScript - Arrays are a collection of values of the same type
// Syntax - let arrayName: type[] = [value1, value2, value3]

let names1 = [] // assigns never type

let names2: [] = [] // assigns never type

let names: string[] = []

// names1.push("John") // error - push method doesn't exist on type never

// names2.push("John")  // error - push method doesn't exist on type never

names.push("John") // works

console.log(names)
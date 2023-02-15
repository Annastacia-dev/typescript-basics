// Tuples - Array-like structure.

const drink: (number | string | boolean )[] = [true, 'brown', 21] 

// If you want to have the types in a specific order, use a tuple

//const newDrink1: [number, string, boolean] = ['brown', 21, true] //error - type 'string' is not assignable to type 'number'
const newDrink: [number, string, boolean] = [21, 'brown', true] // This is a tuple, you can't reverse the order - useful for API calls

let rgb: [number, number, number] = [255, 255, 255]

type Student = [number, string]

//const student: Student = ['John', 21] // This is wrong, the order is wrong, error
const student2: Student = [21, 'John'] // This is correct

//student2[0] = '22' // errror - type 'string' is not assignable to type 'number'

//student2.push(true) //error -  argument type 'true' is not assignable to parameter type 'string | number'

console.log(student2)



export{}
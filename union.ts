// Union - A union type is a type formed from two or more other types, representing values that may be any one of those types. A union type can be written as a type literal, with each type separated by a vertical bar (|). - pipe sign

// Used when you are not sure what type a variable will be, use this instead of any

// Syntax - let variableName: type1 | type2 | type3 = value

let value: string | number = "John"

value = 123

console.log(value)

type User3 = {
    id: number
    name: string
}

type Admin = {
    id: number
    username: string
}

let user: User3 | Admin = { id: 1, name: "John" }

user = { id: 1, username: "John" }

console.log(user)

// useful for functions that can accept & return different types
// Example

function printId(id: number | string) {
    // console.log("Your ID is: " + id)
    if (typeof id === "string") {
        console.log("Your ID is: " + id.toUpperCase())
    } else{
        console.log("Your ID is: " + id)
    }
}

printId(101)
printId("202")
printId("birdie")

// Array

// const ids1: number[] = [1, 2, 3, 4, "5"] // error

// const ids2: string[] = ["hi", "hello", 3, 4, "5"] // error

const ids: (number | string | boolean)[] = [1, 2, 3, false, "5"] // no error


// union can also be used to declare a strict value
// Example

let gender: 'female' | 'male'

//gender = 'other' // error

gender = 'female' // no error

export{}
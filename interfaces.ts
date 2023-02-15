//Interfaces are used to define the structure of an object

//Syntax - interface InterfaceName {property: type}

//Example 

interface User {
    readonly _id: string, // readonly - you can't change the value of the property
    name: string,
    age: number,
    isDeveloper: boolean,
    profile?: string // optional property
    //you can also have functions in interfaces
    greeting: () => string // way 1
    //greeting(name: string): string // way 2
    rating: (name: string) => number
}

const user: User = {
    _id: "123",
    name: "John",
    age: 21,
    isDeveloper: true,
    greeting: () => "Hello",
    rating: () => 5 //you don't have to pass the name parameter
    
}

console.log(user)
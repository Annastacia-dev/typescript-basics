let greeting: string = "Hello Anne";

let number: number = 10;

let g = greeting.toUpperCase();
let n = number.toString();

console.log(g);
console.log(n);

// TypeScript variables
// Type Inference - TypeScript will infer the type of the variable based on the value assigned to it
// number - 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

let userId: number = 7957;
// only methods available to number

let userPhoneNumber = 1234567890;

userId.toFixed();

userPhoneNumber.toFixed();

// boolean - true or false
let isDone: boolean = false;

isDone.valueOf();

// Any Keyword - any type of value

let random; // any type of value
// if typescript can't infer the type of the variable, it will default to any

function getRandom(){
    return Math.random();
}

random = getRandom();

random = "Hello World";

random = 10;

console.log(random);

// noImplicitAny - if set to true, typescript will throw an error if it can't infer the type of the variable




































export{}
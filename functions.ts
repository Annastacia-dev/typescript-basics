function sum (num: number){
    // return num + num;
    return "hello world"; // returns hello world because return type is not specified
}

console.log(sum(10));

function getUpper(text: string){
    return text.toUpperCase();
}

console.log(getUpper("hello world"));

function SignUpUser(username: string, password: string, email: string, vendor?: boolean){
    return username + " " + password + " " + email;
}

console.log(SignUpUser("John", "1234", "john@email.com", false));

let logInUser = (name:string, vendor:boolean) => {
    return `${name} is a vendor: ${vendor}`
}

console.log(logInUser("John", false));

// Specifying return type

function square(num: number): number{
    return num * num;
}

// Declaring return type for arrow functions

const squareArrow = (num: number): number => {
    return num * num;
}

// Returning more than one type
// eg conditional check that return a boolean or a string

function checkUser(user: string): boolean | string{
    if(user === "John"){
        return true;
    } else {
        return "User not found";
    }
}

console.log(checkUser("Jane"));

//  Array

const f1Drivers = ["Lewis", "Max", "Seb"];

const driversUpper = f1Drivers.map((driver):string => {
    return `The driver is ${driver.toUpperCase()}`
})

console.log(driversUpper);

export{}
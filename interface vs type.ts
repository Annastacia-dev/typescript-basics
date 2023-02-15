// Interface vs Type

interface Person {
    name: string;
    age: number;
}

interface Person{
    nickname: string;
} // you can merge interfaces

let user1: Person;

user1 = {
    name: "John",
    age: 21,
    nickname: "Johnny"
}

console.log(user1)

// extending interfaces

interface Admin extends Person{
    role: "admin" | "user"
}

let admin: Admin;

admin = {
    name: "Alice",
    age: 21,
    nickname: "Alicia",
    role: "admin"
}

// Type
//cannot merge types & you can't extend types

type Person2 = {
    name: string;
    age: number;
}

// type Person2 = {
//     nickname: string;
// } // error - duplicate identifier 'Person2'

// type Admin3 extends Person2 = {
//     role: "admin" | "user"
// } // error - cannot find name 'extends'

type Admin2 = Person2 & {
    role: "admin" | "user"
} // you can use intersection types to extend types


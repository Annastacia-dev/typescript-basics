// readonly keyword & ? optional

type User = {
    readonly _id: string, //readonly - can't be changed
    name: string,
    age: number,
    email: string,
    hobbies: string[],
    isDeveloper: boolean,
    creditCard?: string //? - optional
}

function createUser(user: User){
    console.log(`The user is ${user.name} and is ${user.age} years old. His email is ${user.email} and his hobbies are ${user.hobbies}. Is he a developer? ${user.isDeveloper} and his id is ${user._id}`)
}

let userOne :User = {
    _id: "1234",
    name: "John",
    age: 30,
    email: "john@dev.com",
    hobbies: ["coding", "reading", "writing"],
    isDeveloper: true,
}

createUser(userOne);

// userOne._id = "5678"; //error - can't change readonly property

userOne.age = 23; //works

console.log(userOne);


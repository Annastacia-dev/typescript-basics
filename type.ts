// Type alliases - create a new name for a type

// type - name for any type
type User = {
    name: string,
    age: number,
    email: string,
    hobbies: string[],
    isDeveloper: boolean
}

function createUser(user: User){
    console.log(`The user is ${user.name} and is ${user.age} years old. His email is ${user.email} and his hobbies are ${user.hobbies}. Is he a developer? ${user.isDeveloper}`)
}

createUser({ name: "John", age: 30, email: "john@gmail.com", hobbies: ["coding", "reading", "writing"], isDeveloper: true });






export {} //this is a module, so we need to export an empty object to avoid errors
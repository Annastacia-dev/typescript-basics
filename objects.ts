// Objects - TypeScript

const User = {
    name: "John",
    age: 30,
    email: "john@dev.com",
    hobbies: ["coding", "reading", "writing"],
    isDeveloper: true
}

function createUser({name, age, email, hobbies, isDeveloper}: {name: string, age: number, email: string, hobbies: string[], isDeveloper: boolean}){
    console.log(`The user is ${name} and is ${age} years old. His email is ${email} and his hobbies are ${hobbies}. Is he a developer? ${isDeveloper}`)
}

createUser(User);

// when a function returns an object

function createCourse(name: string, duration: number, instructor: string):{name: string, duration: number, instructor: string}{
    return {
        name: name,
        duration: duration,
        instructor: instructor
    }
}

export{}







export{}
// in typescript, object has a specific type
const car: {name: string, year: number} = {
    name: 'Ferrari',
    year: 2020
}

console.log(car); // { name: 'Ferrari', year: 2020 }

// type inference
const bike = {
    name: 'cool bike'
}
bike.name = 'cooler bike' // it's ok because type of name is string
//bike.name = 2025 // Type number is not assignable to type string
//bike.year = 2025; // Property year does not exist on type { name: string; }

console.log(bike) //{ name: 'cooler bike' }

// const vehicle: {name: string, description: string} = {
//     name: "bus"
// } // Property description is missing in type { name: string; } but required in type { name: string; description: string; }

const vehicle: {name: string, description?: string} = {
    name: "bus"
}

vehicle.description = "electric bus" // description is an optional property of vehicle object

const person: {[name: string]: number} = {} // Index signatures allow to define the type of property for object without specific property name
person.Alex = 25;
person.John = 20;
//person.Abert = "20" // Type string is not assignable to type number
console.log(person); // { Alex: 25, John: 20 }
// an object in TypeScript cannot have more than one index signature

const test: { [name: number]: boolean, [name: string]: boolean } = {}; // combine string and number index signatures in a single object as long as the value types are the same
test[1] = true;
test["one"] = false;
console.log(test); // { '1': true, one: false }

// The syntax [name: number]: boolean is an index signature in TypeScript.
// It defines the type of properties that an object can have, where:
// name is the name of the index signature (it can be any valid identifier).
// number specifies that the keys of the object are of type number.
// boolean specifies that the values associated with these keys are of type boolean.

// Example of using `any` to create a dynamic object, but it can lead to errors at runtime. Use union types or `unknown` instead.
const user: { [key: string]: any } = {};
user["name"] = "Alice";     // string
user["age"] = 25;           // number
user["isAdmin"] = true;     // boolean
user["address"] = { city: "NY", zip: 10001 }; // object
user["hobbies"] = ["reading", "gaming"];  // array
console.log(user);

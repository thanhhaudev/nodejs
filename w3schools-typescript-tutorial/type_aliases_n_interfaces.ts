// TypeScript allows types to be defined separately from the variables that use them.
// Type aliases and Interfaces allow types to be easily shared between different variables/objects
// Interfaces are generally used to define the shape of objects.
// Type aliases can define the shape of objects, union types, tuples, and other types.

type age = number
type name = string
type Person = {
    name: name,
    age: age,
}

const newAge: age = 15
const newName: name = "John"
const newPerson: Person = {
    name: newName,
    age: newAge
}

// Type aliases can be extended using intersections (&).
type RichPerson = Person & {
    money: number,
}

const richPerson: RichPerson = {
    name: newName,
    age: newAge,
    money: 1000000000000000,
}

// Interfaces is similar to type alias, expect it only apply to object types.
// Interfaces can be extended by other interfaces or classes using the extends keyword.
interface Rectangle {
    height: number,
    width: number
}

const rectangle: Rectangle = {
    height: 100,
    width: 50,
}

interface ColoredRectangle extends Rectangle { // this creating a new interface with the same properties as original and add something new.
    color: string,
}

const coloredRectangle: ColoredRectangle = {
    height: 100,
    width: 50,
    color: "red",
}

// Interfaces can be merged, meaning you can declare the same interface multiple times, and TypeScript will merge them.
// Type aliases cannot be merged.
interface Car {
    make: string;
    model: string;
}

// const myCar: Car = {
//     make: "Toyota",
//     model: "Corolla"
// }; // Property year is missing in type { make: string; model: string; } but required in type Car

// Merging the Car interface
interface Car {
    year: number; // the new properties are applied to all objects that use the merged interface, including those defined before the merge.
}

// Now, the Car interface includes the year property
// after merging the Car interface with the year property, all objects of type Car will require the year property, including those defined before the merge.
const anotherCar: Car = {
    make: "Honda",
    model: "Civic",
    year: 2020
};


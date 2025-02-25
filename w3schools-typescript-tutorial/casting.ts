// sometimes we may need to convert one type to another type, this is called type casting
// like a function of a library that returns a value of type unknown, but we know the type of the value, so we can cast it to the correct type.

let x: unknown = 'hello' // this is possible to cast unknown to string
// casting with `as` keyword, this directly tells the compiler to treat the value as the specified type
console.log((x as string).length) // length is a property of string type
x = 4;
console.log((x as string).length) // undefined, because x is not a string and does not have a length property
// casting does not change the type of the variable, it only tells the compiler to treat the value as the specified type

//console.log((4 as string).length) // Error TS2352: Conversion of type 'number' to type 'string' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
// TypeScript will still attempt to typecheck casts to prevent casts that don't seem correct. In this case, casting a number to a string is not allowed because the two types are not compatible.

// Casting with <> syntax, this is called JSX-style casting. This type casting will not work with TSX file
// Works the same as `as` keyword
let y: unknown = 'world'
console.log((<string>y).length) // length is a property of string type



// Force casting
// To override type errors that TypeScript may throw when casting, first cast to `unknown` and then to the desired type
let z = '!!!!'
console.log(((z as unknown) as number)) // prints !!!! because the type casting does not change the actual value of z. It only tells the TypeScript compiler to treat the value as a different type for type-checking purposes. The runtime value remains the same.

let v: unknown = "123";
// TypeScript treats v as a number type, so at the compile time, Property length does not exist on type number.
// console.log(((v as unknown) as number).length) // Error: Property 'length' does not exist on type 'number'.ts(2339)

console.log(((v as unknown) as number).toFixed(2)) // This is ok at compile time, but at runtime, it will throw an error because the value of v is a string, and toFixed() is a method of the number type.

// Type casting in TypeScript is primarily used to bypass compile-time type checking.
// It allows you to tell the TypeScript compiler to treat a value as a different type, even if the actual runtime type does not change.
// This can be useful when you know more about the type of a value than the compiler does.
// By default, null and undefined handling is disabled, and can be enabled by setting strictNullChecks to true.
// null and undefined are primitive types and can be used like other types, such as string.

let xx: number | undefined| null;
xx = 10; // OK
xx = null; // OK

interface House {
    sqrt: number;
    yard?: {
        sqrt: number;
    };
}

// optional chaining
// this allow us to access an object's property that might be undefined or null without throwing an error.
function printYardSize(house: House) {
    const yardSize = house.yard?.sqrt; // if house.yard is undefined or null, yardSize will be undefined
    if (yardSize) {
        console.log(`Yard size is ${yardSize}`)
    } else {
        console.log('No yard')
    }
}

let home: House = {
    sqrt: 300,
}

printYardSize(home); // No yard


// nullish coalescing
// this operator allows us to provide a default value when the value is null or undefined.
function printMillage(m: number | null | undefined) {
    const millage = m ?? 0; // 0 is the fallback value if m is null or undefined
    console.log(`Millage is ${millage}`);
}

printMillage(199);
printMillage(null);

// null assertion
// this operator is used to tell the compiler that a value will not be null or undefined.
// use this operator to receive an error immediately instead of unexpected behavior at runtime.
let msg: string | null = 'hello';

console.log(msg.toUpperCase()) // if msg is null, this will throw an error
console.log(msg!.toUpperCase()) // this will not throw an error because we are asserting that msg is not null

// array bound handling
// this feature allows us to handle array bound errors at compile time.
let array: number[] = [1, 2, 3];
// Even with strictNullChecks enabled, by default, TypeScript will assume array access will never return undefined or null.
// noUncheckedIndexedAccess requires us to handle the possibility of undefined or null values when accessing array elements.
let aVal = array[0]; // if `noUncheckedIndexedAccess` is enabled, this type will be `number | undefined` instead of `number`
let bVal = array[10]; // ok
console.log(bVal.toFixed(2)); // if `noUncheckedIndexedAccess` is enabled, this will require a undefined check

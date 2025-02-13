function getTime(): number { // return type
    return new Date().getTime();
}

function printHello(): void { // void return type, mean this function return nothing
    console.log("hello")
}

// If no parameter type is defined, TypeScript will default to using any
function sum(a: number, b: number): number { // parameters are typed, similar syntax as variable declaration.
    return a + b;
}

// optional parameter
// If no return type is defined, TypeScript will attempt to infer it through the types of the variables or expressions returned.
function add(a: number, b: number, c?: number) {
    return a + b + (c || 0) // is c is not truthy (undefined, null) then use 0 instead
}

// if exponent is undefined, its value will be 10 (number)
// infer the type from the default value
function pow(base: number, exponent = 10) {
    return base ** exponent
}

// named parameters
// destructuring from {dividend: number, divisor :number}
function divide({dividend, divisor}: {dividend: number, divisor :number}) {
    return dividend/divisor;
}
console.log(divide({dividend: 10, divisor: 2}));

// rest parameters
// can be typed like normal parameters, but the type must be an array as rest parameters are always arrays.
function addMultiple(a: number, b: number, ...rest: number[]) {
    return a + b + rest.reduce((p, c) => p + c, 0)
}

// type alias
// function types can be specified separately from functions with type aliases.
type Negate = (value: number) => number; // similarly to arrow functions
const negateFunction: Negate = (value) => value * -1; // in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
console.log(negateFunction(10));

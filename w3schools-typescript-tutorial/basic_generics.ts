// Generics are used to create reusable components. It allows you to write a function, type, or class without specifying the type it works with.
// Instead, you can specify the type when you use it. This way, you can write a single implementation that can work with different types.

// Function with Generics
function printMessage<T, S>(message: T, sender: S): void {
    console.log(`Message: ${message}, Sender: ${sender}`);
}

printMessage<string, string>("Hello, World!", "John"); // Message: Hello, World!, Sender: John
printMessage<number, string>(100, "Doe"); // Message: 100, Sender: Doe
// TypeScript can also infer the type of the generic parameter from the function parameters.
printMessage("Hello, World!", "John"); // Message: Hello, World!, Sender: John

// Class with Generics
class ValueHolder<T> {
    private readonly value: T | undefined; // the default value of the generic type is undefined if not specified

    constructor(value: T) {
        this.value = value;
    }

    public getValue(): T | undefined {
        return this.value;
    }
}

let value = new ValueHolder<string>("Hello, World!");
console.log(value.getValue()); // Hello, World!

// Interface with Generics
interface Pair<T, U> {
    first: T;
    second: U;
}

let pair: Pair<string, number> = { first: "one", second: 1 };

// Type Alias with Generics
type StringPair = Pair<string, string>;
let stringPair: StringPair = { first: "one", second: "two" };
console.log(stringPair); // { first: 'one', second: 'two' }

// Extends constraint
// You can use the `extends` keyword to specify a constraint on the type parameter to allow only certain types.
// In the following example, the type parameter `T` must be a subtype of `string` or `number` and defaults to `string`.
function printValue<T extends string | number = string>(value: T): void {
    console.log(`Value: ${value}`);
}

printValue("Hello, World!"); // Value: Hello, World!
printValue(100); // Value: 100
//printValue(true); // Error: Argument of type 'true' is not assignable to parameter of type 'string | number'.

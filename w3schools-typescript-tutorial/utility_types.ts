// utility types are used to create new types by transforming existing types.
// TypeScript provides several built-in utility types that can be used to manipulate types.

interface Point {
    x: number;
    y: number;
}

// Partial<Type> - Constructs a type with all properties of Type set to optional.
let pointPart: Partial<Point> = {};

interface Vehicle {
    name: string;
    model: string;
    mileage?: number;
}

// Required<Type> - Constructs a type consisting of all properties of Type set to require.
let myCar: Required<Vehicle> = {
    name: "Toyota",
    model: "Corolla",
    mileage: 30000 // Error: Property 'mileage' is missing in type '{ make: string; model: string; }' but required in type 'Required<Vehicle>'.
}

// Record<Keys, Type> - A shorthand for defining an object type with a specific key and value type.
const nameAgeMap: Record<string, number> = {
    "Alice": 30,
    "Bob": 25,
    "Charlie": 35
}

interface Product {
    id: number;
    name: string;
    price: number;
    description?: string;
}

// Omit<Type, Keys> - Constructs a type by omitting specific properties from Type.
const orange: Omit<Product, 'price' | 'description'> = {
    id: 1,
    name: "Orange",
    // description: "A round citrus fruit" -> got description does not exist in type Omit<Product, "price" | "description">
}

// Pick<Type, Keys> - Constructs a type by picking the set of property Keys from Type and removing the rest.
const gift: Pick<Product, 'name'> = {
    name: "Gift"
}

// Exclude<Type, ExcludedUnion> - Exclude from Type those types that are assignable to ExcludedUnion.
type compositeType = string | number | boolean;
const excludedType: Exclude<compositeType, string> = 1; // string can't be assigned to excludedType

// Extract<Type, Union> - Extract from Type those types that are assignable to Union.
const extractedType: Extract<compositeType, string> = "Hello, World!"; // string can be assigned to extractedType

// NonNullable<Type> - Exclude null and undefined from Type.
type nullableType = string | null | undefined;
const nonNullableType: NonNullable<nullableType> = "Hello, World!"; // null and undefined can't be assigned to nonNullableType

// ReturnType<Type> - Obtain the return type of function type.
function greet(name: string): string {
    return `Hello, ${name}!`;
}
type greetReturnType = ReturnType<typeof greet>
const greeting: greetReturnType = "Hello, John!";
console.log(greeting); // Hello, John!

// Parameters<Type> - Obtain the parameters of a function type.
type greetParameters = Parameters<typeof greet>;
const nameParam: greetParameters = ["John"];
console.log(nameParam); // [ 'John' ]

// Readonly<Type> - Constructs a type with all properties of Type set to readonly.
const readOnlyPoint: Readonly<Point> = { x: 10, y: 20 };
// readOnlyPoint.x = 20; // Cannot assign to 'x' because it is a read-only property.
// this only prevents at compile time, it can be changed at runtime

// and many more...

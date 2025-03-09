// using keyof with explicit type annotation
// when you use keyof with an explicit type annotation, TypeScript checks if the property exists in the type
// and creates a union type of all property names of the type.
function printProductDetail(p: Product, property: keyof Product) {
    // keyof Product is "id" | "name" | "price" | "description"
    console.log(`${property}: ${p[property]}`);
}
let product: Product = {
    id: 1,
    name: "Apple",
    price: 10,
    description: "A juicy red fruit"
}

printProductDetail(product, "name"); // name: Apple
printProductDetail(product, "price"); // price: 10
// printProductDetail(product, "discount"); // Argument of type "discount" is not assignable to parameter of type keyof Product


// using keyof without explicit type annotation
// when you use keyof without an explicit type annotation, TypeScript creates a union type of all property names of the object.
function printObjectKey(obj: object) {
    for (let key in obj) {
        console.log(key);
    }
}

let myMotor: Vehicle = {
    name: "Honda",
    model: "CBR1000RR"
}

printObjectKey(myMotor); // name, model

// using typeof with index signatures
type nameMap = { [key: string]: number };
// because any string can be a key in the nameMap type, so the property can be any string
// keyof nameMap is string
function createNameMap(property: keyof nameMap, value: number) {
    return {[property]: value}; // using computed property names, the property name is determined at runtime
}

let nameMapObj = createNameMap("age", 30);
console.log(nameMapObj); // { age: 30 }
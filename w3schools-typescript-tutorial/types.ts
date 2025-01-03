// type assignment
let num: number = 5; // explicit type declaration
let str = "Hello"; // implicit type declaration
//num = "one"; // error: Type 'string' is not assignable to type 'number'.

// special types
let val: any = 5; // any type, this type disables type checking, allows you to do anything with a variable.
val = "one"; // no error.
// This can be a useful way to get past type checking, but it is not recommended because it defeats the purpose of using TypeScript.
// TypeScript will not be able to provide type safety, and tools which rely on type data, such as auto-completion, will not work

let unk: unknown = 1; // similar to any, but safer alternative to any because it is not assignable to any other type without a type assertion.
unk = "one"; // this is ok because unknown can hold any type.
console.log(unk); // this is ok, because console.log can take any type, and we don't use any other action on unk.

//console.log(unk.toUpperCase()); // this is not ok, because toUppercase() is not a method of unknown type. Got error: Property 'toUpperCase' does not exist on type 'unknown'.
if (typeof unk == "string") { // type assertion before calling toUpperCase().
    console.log(unk.toUpperCase()); // this is ok, because we checked the type of unk before calling toUpperCase().
}

unk = {
    action: function() {
        console.log("Action performed.");
    }
} as { // this is not necessary, but it is a good practice to define the type of unk. In case we pass unk to another function, the type will be known.
    action: () => void
}; // type assertion to assign a function to unk.

//unk.action(); // at this point, unk type of unknown. So we will get 'unk' is of type 'unknown'

if (typeof unk == "object" && unk != null) { // type assertion before calling action(). in js, null is equal to object, so we need to check if unk is not null.
    //unk.action(); // 'unk' is possibly 'null'
    (unk as { action: () => void }).action(); // assert unk to { action: () => void } type before calling action().
}
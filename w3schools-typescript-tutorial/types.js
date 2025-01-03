// type assignment
var num = 5; // explicit type declaration
var str = "Hello"; // implicit type declaration
//num = "one"; // error: Type 'string' is not assignable to type 'number'.
// special types
var val = 5; // any type, this type disables type checking, allows you to do anything with a variable.
val = "one"; // no error.
// This can be a useful way to get past type checking, but it is not recommended because it defeats the purpose of using TypeScript.
// TypeScript will not be able to provide type safety, and tools which rely on type data, such as auto-completion, will not work
var unk = 1; // similar to any, but safer alternative to any because it is not assignable to any other type without a type assertion.
unk = "one"; // this is ok because unknown can hold any type.
console.log(unk); //

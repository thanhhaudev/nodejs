// array is an object that can store a collection of items, array passed by reference.
// if an array contains objects, then only references to the objects are stored in the array, not the objects themselves.

// array uses zero-based index to access elements. if using a negative index, it will start from the end of the array.
// if using an index that is greater than the length of the array, it will return undefined.
// if using string as an index key, it considers it as a property of the object, not an array element so it will not be counted in the length of the array or work with array methods.

// it's best practice when using const to declare an array, to use the readonly modifier to prevent the array from being reassigned.

const names: string[] = ['John', 'Doe', 'Jane'];
console.log(names); // [ 'John', 'Doe', 'Jane' ]
names.push('Smith'); // add an element to the end of the array
console.log(names); // [ 'John', 'Doe', 'Jane', 'Smith' ]

const fixedNames: readonly string[] = ['John', 'Doe', 'Jane']; // readonly modifier, prevent reassigning or modifying the array
// fixedNames.push('Smith'); // error: Property 'push' does not exist on type 'readonly string[]'

const numbers = [1, 2, 3, 4, 5]; // type inference, numbers type is number[]. type is inferred from the values in the array.
const arr = [1, 'two', 3, 'four', 5]; // mixed type array, inferred as (string | number)[]
// in TypeScript, best practice is to use a single type in an array, to avoid confusion and errors.
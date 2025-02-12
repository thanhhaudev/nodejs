// A tuple is a typed array with a pre-defined length and types for each index.

// define our tuple
let ourTuple: [number, boolean, string]; // tuple allow each element in the array to be a known type of value

// initialize correctly
ourTuple = [5, false, 'Coding God was here'];

//ourTuple = ['hello', 1, true]; // Error: Type of elements in the tuple does not match
//ourTuple = [5, false, 'Coding God was here', 1]; // Error: Tuple length does not match
console.log(ourTuple); // [ 5, false, 'Coding God was here' ]

ourTuple.push('some value');
console.log(ourTuple); // [ 5, false, 'Coding God was here', 'some value' ]
// => so a tuple only has a fixed length when it is declared, but it can be modified after that
// best practice is using readonly tuple

// Readonly Tuple
let readOnlyTuple: readonly [number, boolean, string] = [5, false, 'Coding God was here'];
//readOnlyTuple.push('some value'); // Error: Property 'push' does not exist on type 'readonly [number, boolean, string]'

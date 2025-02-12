// Union types are used when a value can be more than a single type.
function printStatusCode(code: string | number) { // `|` is OR. This means the code parameter can be string or number
    console.log(`My status code is ${code}.`)
    //console.log(`My status code is ${code.toUpperCase()}.`) // Property toUpperCase does not exist on type number
}

printStatusCode(404);
printStatusCode('404');
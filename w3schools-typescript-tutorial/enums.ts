// enum is a special "class" that represents a group of constants
// enum come with two types: string & number

enum Numbers {
    One, // By default, enums will initialize the first value to 0 and add 1 to each additional value
    Two,
    Three,
    Four,
    Five,
}

let aNum: Numbers = Numbers.One;
console.log(aNum) // 0
//aNum = 10; // Type 10 is not assignable to type Numbers

enum Types {
    New = 1,
    Old // 2, auto increment from first value (Numeric Enums)
}

enum CardinalDirections {
    North = 'North',
    East = "East",
    South = "South",
    West = "West"
}

// Technically, you can mix and match string and numeric enum values, but it is recommended not to do so.
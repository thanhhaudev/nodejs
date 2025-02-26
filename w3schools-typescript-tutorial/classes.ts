class Employee {
    // The members of a class (properties & methods) are typed using type annotations, similar to variables.

    // private visibility modifier is used to make the property accessible only within the class.
    // readonly keyword is used to make the property read-only, which means the property can be assigned a value only once.
    private readonly name: string;

    // this is a shorthand syntax to declare and initialize the property in the constructor.
    // name is a parameter of the constructor, which is used to initialize the property.
    // age is a parameter property, which is a shorthand syntax to declare and initialize the property in the constructor.
    public constructor(name: string, private age: number) { // public visibility modifier is used to make the constructor accessible outside the class.
        this.name = name; // cannot be changed after initialization because it is a read-only property.
    }

    public getName(): string {
        return this.name; // this keyword is used to refer to the current instance of the class.
    }
}

const employee = new Employee("John", 10);
console.log(employee); // Employee { age: 10, name: 'John' }

interface Shape {
    getArea: () => number;
}

// Inheritance: use interface to define the shape of the class. A class can implement multiple interfaces, separated by a comma.
class Circle implements Shape {
    constructor(private radius: number) {}

    public getArea(): number {
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle implements Shape {
    constructor(protected readonly width: number, protected readonly height: number) {}

    public getArea(): number {
        return this.width * this.height;
    }

    public toString(): string {
        return `Rectangle { width: ${this.width}, height: ${this.height} }`;
    }
}

// Square extends Rectangle, so Square inherits the properties and methods of Rectangle.
// The Rectangle constructor requires width and height parameters.
// The Square constructor calls super(side, side); to pass the side value to both width and height parameters of the Rectangle constructor.
class Square extends Rectangle {
    constructor(side: number) {
        super(side, side); // Call the constructor of the parent class. This is necessary when you are extending a class and need to initialize the parent class's properties
    }
}

// Overriding: A subclass can override the methods of the parent class by providing a new implementation with the same method signature.
// A method signature in TypeScript (and other programming languages) includes the method's name, the parameter list (with types), and the return type. It does not include the method's body or implementation.
class Triangle implements Shape {
    constructor(private base: number, private height: number) {}

    public getArea(): number {
        return 0.5 * this.base * this.height;
    }

    // Override keyword is used to indicate that the method is overriding a method of the parent class. It's optional but recommended to use it for clarity.
    // Use noImplicitOverride compiler option to enforce the use of the override keyword.
    // toString method is replaced the default implementation of the parent class.
    public toString(): string {
        return `Triangle { base: ${this.base}, height: ${this.height} }`;
    }
}

// An abstract class is a class that cannot be instantiated directly. It's used as a base class for other classes.
// This is a way to define a common interface for a group of classes that have similar behavior without providing a complete implementation.
// It's also used to define abstract methods that must be implemented by the subclasses.
abstract class Polygon {
    public abstract getArea(): number; // An abstract method does not have an implementation. It's up to the subclass to provide an implementation.

    public toString(): string {
        return `Polygon[area=${this.getArea()}]`;
    }
}

// this class extends the Polygon abstract class and provides an implementation for the getArea method.
class Hexagon extends Polygon {
    constructor(private side: number) {
        super();
    }

    public getArea(): number {
        return 3 * Math.sqrt(3) * this.side ** 2 / 2;
    }
}

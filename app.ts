// string
let myName: string = 'Yong';
// myName = 28; // error, can't reassign a different type

// number
let myAge: number = 27.5;
// myAge = 'Max'; // error

// boolean
let hasHobbies = false;
// hasHobbies = 1; // still error, TS doesn't do implicit casting

// assign types
// let myRealAge; // if I don't assign a value initially, TS treats it as type Any
// myRealAge = 26; // can assign a number
// myRealAge = '27'; // can assign a string
// we don't get any advantages of TS, if we simply use type Any.

let myRealAge: number; // explicitly assign type
myRealAge = 27;
// myRealAge = '27';

// array
let hobbies: any[] = ["Cooking", "Sports"];
// hobbies = [100]; // error, the above assignment restricts the array to hold strings only.
hobbies = [100];
// hobbies = 100; // error, hobbies must be an array, number won't do

// tuples, not available in JS
let address: [string, number] = ["Superstreet", 99]; // limit to a tuple with just two elements, order is important

// enum
enum Color {
    // behind the scene, each stands for an integer
    Gray,
    Green = 100,
    Blue
}

let myColor: Color = Color.Blue;
console.log(myColor);

// any, try to avoid any
let car: any = "BMW";
console.log(car);
car = { // re-assign to another type
    brand: "BMW",
    series: 3
};
console.log(car);

function returnMyName(): string {
    return myName;
}

console.log(returnMyName());

// void
function sayHello(): void {
    console.log("Hello");
}

// argument types
function multiply(value1: number, value2: number): number {
    return value1 * value2;
}

console.log(multiply(2, 5));

// function types
let myMultiply: (val1: number, val2: number) => number;
myMultiply = multiply;




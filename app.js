// string
var myName = 'Yong';
// myName = 28; // error, can't reassign a different type
// number
var myAge = 27.5;
// myAge = 'Max'; // error
// boolean
var hasHobbies = false;
// hasHobbies = 1; // still error, TS doesn't do implicit casting
// assign types
// let myRealAge; // if I don't assign a value initially, TS treats it as type Any
// myRealAge = 26; // can assign a number
// myRealAge = '27'; // can assign a string
// we don't get any advantages of TS, if we simply use type Any.
var myRealAge; // explicitly assign type
myRealAge = 27;
// myRealAge = '27';
// array
var hobbies = ["Cooking", "Sports"];
// hobbies = [100]; // error, the above assignment restricts the array to hold strings only.
hobbies = [100];
// hobbies = 100; // error, hobbies must be an array, number won't do
// tuples, not available in JS
var address = ["Superstreet", 99]; // limit to a tuple with just two elements, order is important
// enum
var Color;
(function (Color) {
    // behind the scene, each stands for an integer
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Blue;
console.log(myColor);
// any, try to avoid any
var car = "BMW";
console.log(car);
car = {
    brand: "BMW",
    series: 3
};
console.log(car);
function returnMyName() {
    return myName;
}
console.log(returnMyName());
// void
function sayHello() {
    console.log("Hello");
}
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(2, 5));
// function types
var myMultiply;
myMultiply = multiply;
// objects
var userData = {
    name: "Max",
    age: 27
};
// userData = {}; // can't assign, the type of the object is deduced already.
// userData = {
//     a: "Hello", // name of the properties don't match
//     b: 22
// };
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
// union types, restrict to some certain types
var myRealRealAge = 27;
myRealRealAge = "27";
// check types
var finalValue = 30;
if (typeof finalValue == "number") {
    console.log("Final value is a number");
}
// never type, it's not returning nothing, it's never returning
function neverReturns() {
    throw new Error("An error");
}
// Nullable types
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull;
canAlsoBeNull = null;
var canThisBeAny = null;
canThisBeAny = 20;

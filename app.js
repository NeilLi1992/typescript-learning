"use strict";
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
    Color[Color["Green"] = 0] = "Green";
    Color[Color["Blue"] = 1] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Blue;
console.log(myColor);
console.log(Color.Gray);

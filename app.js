function makeArray(naem) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return args;
}
console.log(makeArray("Yong", 1, 2, 6));
// Destructing
var myHobbies = ["Cooking", "Sports"];
var hobby1 = myHobbies[0], hobby2 = myHobbies[1];
console.log(hobby1, hobby2);
var userData = { userName: "Yong", age: 26 };
var myName = userData.userName, age = userData.age;
console.log(myName, age);
// template literals
var userName = "Max";
var greeting = "This is a heading!\n    I'm " + userName + "\n";
console.log(greeting);
//# sourceMappingURL=app.js.map
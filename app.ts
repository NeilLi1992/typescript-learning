function makeArray(naem: string, ...args: number[]) {
    return args;
}

console.log(makeArray("Yong", 1, 2, 6));

// Destructing
const myHobbies = ["Cooking", "Sports"];

const [hobby1, hobby2] = myHobbies;

console.log(hobby1, hobby2);

const userData = {userName: "Yong", age: 26};
const {userName: myName, age} = userData;

console.log(myName, age);

// template literals
const userName = "Max";
const greeting = `This is a heading!
    I'm ${userName}
`;
console.log(greeting);
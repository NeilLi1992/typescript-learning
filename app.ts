function makeArray(naem: string, ...args: number[]) {
    return args;
}

console.log(makeArray("Yong", 1, 2, 6));

// Destructing
const myHobbies = ["Cooking", "Sports"];

const [hobby1, hobby2] = myHobbies;

console.log(hobby1, hobby2);
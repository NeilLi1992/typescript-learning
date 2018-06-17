class Person {
    name: string;
    private type: string; // doesn't get inherited
    protected age: number = 26; // get inherited

    constructor(name: string, public username: string) {
        this.name = name;
    }

    printAge() {
        console.log(this.age);
        this.setType("Old guy");
    }

    private setType(type) {
        this.type = type;
        console.log(this.type);
    }
}

const person = new Person("Yong", "yli989");
console.log(person.name, person.username);
person.printAge();
// person.setType("Cool guy");

// Inheritance
class Yong extends Person {
    constructor(username) {
        super("Yong", username); // when extending a base class, always call 'super' first.
        this.age = 31;
    }
}

const yong = new Yong("yli989");
console.log(yong);

// Getters & Setters
class Plant {
    private _species: string = "Default";

    get species() {
        return this._species;
    }

    // call like a property access
    set species(value: string) {
        if (value.length > 3) {
            this._species = value;
        } else {
            this._species = "Default";
        }
    }
}

let plant = new Plant();
console.log(plant.species);
plant.species =  "AB";
console.log(plant.species);
plant.species = "Green Plant";
console.log(plant.species);

// Static properties & methods
class Helpers {
    static PI: number = 3.14;
    static calcCirumference(diameter: number): number {
        return this.PI * diameter;
    }
}

console.log(2 * Helpers.PI);
console.log(Helpers.calcCirumference(8));

// Abstract Classes
abstract class Project { // can't be instantiated directly
    projectName: string = "Default";
    budget: number;

    // once extended this class, we need to implement 'changeName' method in the inherited class.
    abstract changeName(name: string): void;

    calcBudget() {
        return this.budget * 2;
    }
}

class ITProject extends Project {
    changeName(name: string): void {
        this.projectName = name;
    }
}

let newProject = new ITProject();
console.log(newProject);
newProject.changeName("Super IT Project");
console.log(newProject);

// private constructors
class OnlyOne {
    private static instance: OnlyOne;
    public readonly name: string;

    private constructor(name: string) {}

    static getInstance() {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne("The Only One");
        }
        return OnlyOne.instance;
    }
}

// let wrong = new OnlyOne("The Only One");
let right = OnlyOne.getInstance();
console.log(right.name);
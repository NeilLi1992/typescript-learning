// Exercise 1 - How was your TypeScript Class?
class Car {
    public name: string;
    public acceleration: number = 0;

    constructor(name: string) {
        this.name = name;
    }

    honk(): void {
        console.log("Toooooooooot!");
    }

    accelerate(speed: number): void {
        this.acceleration += speed;
    }
}

var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
 
// Exercise 2 - Two objects, based on each other ...
class Base {
    constructor(public width: number, public length: number) {
        this.width = width;
        this.length = length;
    }
}

class Rectangle extends Base {
    constructor(width: number, length: number) {
        super(width, length);
    }

    calcSize(): number {
        return this.width * this.length;
    }
}

let baseObj = new Base(0, 0);
let rectangle = new Rectangle(5, 2);
console.log(rectangle.calcSize());
 
// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
class Person {
    private _firstName: string;

    constructor(name: string) {
        this._firstName = name;
    }
    
    get firstName(): string {
        return this._firstName;
    }

    set firstName(val: string) {
        if (val.length > 3) {
            this._firstName = val;
        }
        else {
            this._firstName = "";
        }
    }
}

let person = new Person("");
console.log(person.firstName);
person.firstName = "Ma";
console.log(person.firstName);
person.firstName = "Maximilian";
console.log(person.firstName);
class Person {
    name: string;
    private type: string;
    protected age: number = 26;

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
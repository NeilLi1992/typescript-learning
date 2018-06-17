var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.age = 26;
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
        this.setType("Old guy");
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person("Yong", "yli989");
console.log(person.name, person.username);
person.printAge();
// person.setType("Cool guy");
// Inheritance
var Yong = /** @class */ (function (_super) {
    __extends(Yong, _super);
    function Yong(username) {
        return _super.call(this, "Yong", username) || this;
    }
    return Yong;
}(Person));
var yong = new Yong("yli989");
console.log(yong);
//# sourceMappingURL=app.js.map
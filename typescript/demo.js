var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    Student.prototype.say = function () {
        console.log('my name is' + this.fullName);
    };
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Jane", "M.", "User");
document.body.innerHTML = greeter(user);

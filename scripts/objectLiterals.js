"use strict";
var firstname = "kalidas";
var lastname = "sake";
var person = {
    firstname: firstname,
    lastname: lastname
};
console.log(person.firstname);
console.log(person.lastname);
function createPerson(firstname, lastname, age) {
    var fullname = firstname + " " + lastname;
    return {
        firstname: firstname,
        lastname: lastname,
        fullname: fullname,
        isSenior: function () {
            return age > 60;
        }
    };
}
var p = createPerson("kali", "Geller", 6);
console.log(p.firstname);
console.log(p.lastname);
console.log(p.fullname);
console.log(p.isSenior());
// destructuring the array
var employee = ["Kalidas", "Sake", "Kolgaon"];
//let [firstname, lastname, addr] = employee;
var fname = employee[0], lname = employee[1], addr = employee[2], _a = employee[3], gender = _a === void 0 ? "male" : _a; //we can also add default values 
console.log(fname);
console.log(lname);
console.log(addr);
console.log(gender);
var user = "Kalidas";
var greet = "Welcome $(user) to ES15";
console.log(greet);
//# sourceMappingURL=objectLiterals.js.map
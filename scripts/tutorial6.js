"use strict";
function greetNewPerson(name) {
    var greet;
    if (name === "kalidas") {
        greet = "Hello kalidas";
    }
    else {
        greet = "hi there";
    }
    console.log(greet);
}
greetNewPerson("kalidas");
var a = 10;
var b = 2;
if (a === 10) {
    var a = 1;
    var b_1 = "20"; //let has block scope and they are not hoisted
    console.log(a);
    console.log(b_1);
}
console.log(a);
console.log(b);
//# sourceMappingURL=tutorial6.js.map
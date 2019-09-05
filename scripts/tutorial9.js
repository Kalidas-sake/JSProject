"use strict";
var getRegValue = function () {
    return 10;
};
console.log(getRegValue());
// no arguments and single statement
var getArrowFun = function () { return 10; }; // return keyword is not used when {...} are not used.
console.log(getArrowFun());
// with single argument
var getArgFun = function (m) { return 10 + m; };
console.log(getArgFun(5));
// with multiple args
var getMultiArgFun = function (m, n) { return 10 + m + n; }; //ES6 script prefers not to use var declarations 
console.log(getMultiArgFun(5, 10));
// with multiple staements
var multiStatementArrowFun = function () {
    console.log("I am function");
    alert("Hello");
    return 100;
};
multiStatementArrowFun();
console.log(typeof multiStatementArrowFun);
//# sourceMappingURL=tutorial9.js.map
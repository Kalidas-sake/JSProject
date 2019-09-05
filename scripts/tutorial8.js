"use strict";
var num1 = 10;
//const num2; //'const' declarations must be initialized.ts(1155)
var num2 = 20;
var obj = {
    name: "kalidas"
};
console.log(obj.name);
obj.name = "john";
console.log(obj.name);
// obj = {      //Cannot assign to 'obj' because it is a constant.ts(2588)
//     age : 24
// }
var obj1 = {
    name: "kali"
};
obj1 = {
    name: "abc"
};
//# sourceMappingURL=tutorial8.js.map
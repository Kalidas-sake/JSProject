var getRegValue = function(){
    return 10;
}

console.log(getRegValue());

// no arguments and single statement
var getArrowFun = () => 10;     // return keyword is not used when {...} are not used.
console.log(getArrowFun());


// with single argument
const getArgFun = (m : number) => 10+m;
console.log(getArgFun(5));

// with multiple args
const getMultiArgFun = (m : number, n : number) => 10+m+n;          //ES6 script prefers not to use var declarations 
console.log(getMultiArgFun(5, 10));


// with multiple staements
const multiStatementArrowFun = () => {
    console.log("I am function");
    alert("Hello");
    return 100;
}

multiStatementArrowFun(); 

console.log(typeof multiStatementArrowFun);
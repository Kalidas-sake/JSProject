function createBicycle(cadence, speed, gear) {
    let newBicycle = {};
    newBicycle.cadence = cadence;
    newBicycle.speed = speed;
    newBicycle.gear = gear;
    return newBicycle;
}

let bicycle1 = createBicycle(50, 20, 4);

class Bicycle {
    constructor(cadence, speed, gear) {
        this.cadence = cadence;
        this.speed = speed;
        this.gear = gear;
        console.log(this);
    }
}

let bicycle2 = new Bicycle(20, 10, 1);




// Ways of calling function in JavaScript

function foo() {
    console.log(this);
}

foo();      // Method #1

var obj = {};
obj.foo = function() {
    console.log("this");
}

obj.foo();  // Method #2

new foo()   // Method #3

            // Method #4


/* this every method of function calling has different 
    meaning with respect to their execution context
    
    Execution context is like if we call fun with 
    Method #1 => its execution context is global eg. window
    Method #2 => its execution context is object context  

    */
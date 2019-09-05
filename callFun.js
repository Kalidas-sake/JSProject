// function ment to be called in constructor mode 
function Bicycle(cadence, speed, gear, tirePressure) {
    this.cadence = cadence;
    this.speed = speed;
    this.gear = gear;
    this.tirePressure = tirePressure;
    this.inflateTires = function() {
        this.tirePressure += 3;
    }
}


// calling function in constructor mode
let bicycle1 = new Bicycle(20, 20, 2, 30);
bicycle1.inflateTires();


function Mechanic(name) {
    this.name = name;
}

let mike = new Mechanic("Mike");
mike.inflateTires = bicycle1.inflateTires;

console.log(bicycle1);
mike.inflateTires.call(bicycle1);
console.log(bicycle1);
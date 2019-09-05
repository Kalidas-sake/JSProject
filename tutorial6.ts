function greetNewPerson(name: string){     //typescript strictly requires type declaration of variable (string)
    let greet;
    if(name === "kalidas"){
        greet = "Hello kalidas";
    }else{
        greet = "hi there";
    }
    console.log(greet);
}

greetNewPerson("kalidas");

var a=10;
var b=2;

if(a===10){
    var a=1;
    let b="20";         //let has block scope and they are not hoisted
    console.log(a);
    console.log(b);
}
console.log(a);
console.log(b);
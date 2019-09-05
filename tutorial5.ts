function greetPerson(name: string){     //typescript strictly requires type declaration of variable (string)
    if(name === "kalidas"){
        var greet = "Hello kalidas";
    }else{
        var greet = "hi there";
    }
    console.log(greet);
}

greetPerson("kaleedas");
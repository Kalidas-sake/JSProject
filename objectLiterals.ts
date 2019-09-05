let firstname = "kalidas";
let lastname = "sake";

let person = {
  firstname,
  lastname
};

console.log(person.firstname);
console.log(person.lastname);


function createPerson(firstname, lastname, age){
  let fullname = firstname + " " + lastname;
  return {
    firstname,
    lastname,
    fullname,
    isSenior(){
     return age>60;
    }
  };
}

let p = createPerson("kali", "Geller", 6);

console.log(p.firstname);
console.log(p.lastname);
console.log(p.fullname);
console.log(p.isSenior());


 

// destructuring the array

let employee = ["Kalidas", "Sake", "Kolgaon"];

//let [firstname, lastname, addr] = employee;
let [fname, lname, addr, gender="male"] = employee;   //we can also add default values 
console.log(fname);
console.log(lname);
console.log(addr);
console.log(gender);


let user = "Kalidas";


let greet = `Welcome $(user) to ES15`;

console.log(greet);
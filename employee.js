/*function createEmployee(firstName, lastName, gender, designation){
    let newObj = {};
    newObj.firstName = firstName;
    newObj.lastName = lastName;
    newObj.gender = gender;
    newObj.designation = designation;

    return newObj;
}

let emp1 = createEmployee("Kalidas", "Sake", "M", "Reginal Manager");
let emp2 = createEmployee("Jim", "Halper", "M", "Sales Associate");
let emp3 = createEmployee("Priya", "Xen", "F", "Assistant to Manager");
*/

//using constructor function
function CreateEmployee(firstName, lastName, gender, designation){  
    //var this = {};    //js adds this line automatically in constructor function
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.designation = designation;
    //return this;  //js adds this line automatically in constructor function
}

let emp1 = new createEmployee("Kalidas", "Sake", "M", "Reginal Manager");
let emp2 = new createEmployee("Jim", "Halper", "M", "Sales Associate");
let emp3 = new createEmployee("Priya", "Xen", "F", "Assistant to Manager");

function createEmployee(firstName, lastName, gender, designation){
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


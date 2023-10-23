// Write your solution in this file!
const employee = {name:"Sam"};


function updateEmployeeWithKeyAndValue(employee){
    //let newemployee = {...employee};
    //newemployee["streetAddress"] = "11 Broadway" ;
    //return newemployee;

    //or also achieved through

    return {...employee, name:"Sam", streetAddress:"11 Broadway"}


}

updateEmployeeWithKeyAndValue(employee);


let streetAddress ="streetAddress";

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){

    employee[key] = value;
    return employee;
    //console.log(employee);
}

destructivelyUpdateEmployeeWithKeyAndValue(employee,streetAddress,"12 Broadway"); 

//delete from employee
let name ="name"
function deleteFromEmployeeByKey(employee,key){
    let newemployee = {...employee};
    newemployee["streetAddress"] = "11 Broadway" ;
    delete newemployee[key];
    return newemployee;  


}

deleteFromEmployeeByKey(employee,name);

//destructively delete


function destructivelyDeleteFromEmployeeByKey(employee,key) {
    delete employee.name;
    delete employee.streetAddress;
    return employee;
    //console.log(employee);
}

deleteFromEmployeeByKey(employee,key);
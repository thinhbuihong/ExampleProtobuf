const fs = require("fs");
const Schema = require("./employees_pb");

const thinh = new Schema.Employee();
thinh.setId(345);
thinh.setName("thinh dep zai");
thinh.setSalary(999);

const rick = new Schema.Employee();
rick.setName("rick");
rick.setSalary(93);
rick.setId(76);

const john = new Schema.Employee();
john.setId(8);
john.setName("john");
john.setSalary(93);

const employees = new Schema.Employees();
employees.addEmployees(rick);
employees.addEmployees(john);
employees.addEmployees(thinh);

// console.log(employees.toString())
const bytes = employees.serializeBinary();
// // console.log(bytes)

fs.writeFileSync("employeesBinary", bytes)

const employees2 = Schema.Employees.deserializeBinary(bytes);
console.log(employees2.toString())
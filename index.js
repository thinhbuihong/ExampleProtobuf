const fs = require("fs");

const employees = [];

employees.push({
	name: "hussein",
	salary: 1000,
	id: 234,
})
employees.push({
	name: "thinh",
	salary: 1000,
	id: 234,
})
employees.push({
	name: "cong",
	salary: 1000,
	id: 234,
})
fs.writeFileSync("jsondata.json", JSON.stringify(employees));

console.log(JSON.stringify(employees))
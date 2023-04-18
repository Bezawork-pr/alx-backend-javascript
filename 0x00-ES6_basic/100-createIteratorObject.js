export default function createIteratorObject(report) {
	let keys = []
	let employees = []
	for (let department of Object.values(report.allEmployees)){
		keys.push(department);
	}
	for (let dep of keys){
		for (let emp of dep)
			{
				employees.push(emp)
			}
	}

	return employees;
}

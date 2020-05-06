function log(target, key) {
	console.log(key + ' se ha llamado');
}

class Person {
	private name: string;

	constructor(name: string) {
		this.name = name;
	}

	@log
	sayMyNAme() {
		console.log(this.name);
	}
}

const person: Person = new Person('Chinasky');
person.sayMyNAme(); // 'Chinasky'

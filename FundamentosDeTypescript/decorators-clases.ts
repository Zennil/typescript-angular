function init(target) {
	return class extends target {
		nombre = 'Henry';
		apellido = 'Chinasky';

		sayMyName() {
			return `${this.nombre} ${this.apellido}`;
		}
	};
}

@init
class P {
	sayMyName() {}

	constructor() {}
}

const p = new P();
console.log(p.sayMyName()); // Henry Chinasky

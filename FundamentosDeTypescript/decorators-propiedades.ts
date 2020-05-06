function logProperty(target, key) {
	let _val = this[key];
	const getter = () => {
		console.log(`Get: ${key} => ${_val}`);
		return _val;
	};
	const setter = (newValue) => {
		console.log(`Set: ${key} => ${newValue}`);
		_val = newValue;
	};

	const objecProperty = {
		get: getter,
		set: setter,
	};

	Object.defineProperty(target, key, objecProperty);
}

class P1 {
	@logProperty
	public name: string;

	constructor(name: string) {
		this.name = name;
	}
}

const p1 = new P1('Poe');
p1.name = 'Edgar'; // Set: name => Edgar
const nameFromClass = p1.name; // Get: name => Edgar

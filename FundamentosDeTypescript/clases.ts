class Transporte {
	private velocidad: number;
	private formaDeMovilidad: string;

	constructor(velocidad: number, formaDeMovilidad: string) {
		this.velocidad = velocidad;
		this.formaDeMovilidad = formaDeMovilidad;
	}

	getVelocidad(): number {
		return this.velocidad;
	}

	setVelocidad(velocidad: number) {
		this.velocidad = velocidad;
	}

	getFormaDeMovilidad(): string {
		return this.formaDeMovilidad;
	}

	setFormaDeMovilidad(formaDeMovilidad: string) {
		this.formaDeMovilidad = formaDeMovilidad;
	}
}

const transporte: Transporte = new Transporte(20, 'aire');

class Auto extends Transporte {
	private cantidadDePuertas: number;

	constructor(cantidadPuertas: number, velocidad: number, formaDeMovilidad: string) {
		super(velocidad, formaDeMovilidad);
		this.cantidadDePuertas = cantidadPuertas;
	}

	getVelocidad() {
		return super.getVelocidad() + 11;
	}

	getCantidadDePuertas(): number {
		return this.cantidadDePuertas;
	}

	setCantidadDePuertas(cantidadDePuertas: number) {
		this.cantidadDePuertas = cantidadDePuertas;
	}
}

const auto: Auto = new Auto(4, 33, 'suelo');

auto.getFormaDeMovilidad();

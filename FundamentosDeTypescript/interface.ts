type Dni = number;

interface Persona {
    altura?: number;
    edad: number;
    nombre: string;
    apellido: string;
    dni: Dni;
}

const persona: Persona = {
    edad: 25,
    nombre: 'Edgar',
    apellido: 'Poe',
    dni: 929717
};
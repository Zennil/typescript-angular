class PersonaShape {
    private edad: number;
    private altura: number;
    private dni: string;

    constructor(edad: number, altura: number, dni: string) {
        this.edad = edad;
        this.altura = altura;
        this.dni = dni;
    }
}

class Alumno extends PersonaShape {
    private matricula: string;

    constructor(matricula: string, edad: number, altura: number, dni: string) {
        super(edad, altura, dni);
        this.matricula = matricula;
    }
}

let personaShape: PersonaShape = new PersonaShape(27, 1.67, '39371');
let alumno: Alumno = new Alumno('11921', 27, 1.67, '39371');

personaShape = alumno;
// alumno = personaShape;
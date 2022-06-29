let formulario = document.querySelector('form')

let consulta = (e) => {
    e.preventDefault();

    let nombre = document.querySelector('#propietario').value;
    let tipo = document.querySelector('#tipo').value;
    let direccion = document.querySelector('#direccion').value;
    let telefono = document.querySelector('#telefono').value;
    let nombreMascota = document.querySelector('#nombreMascota').value;
    let enfermedad = document.querySelector('#enfermedad').value;

    let busqueda = document.querySelector('#resultado')

    if (tipo == 'perro') {
        let perro = new Mascota(nombre, direccion, telefono, tipo, nombreMascota, enfermedad)
        busqueda.innerHTML = `${perro.datosPropietario()}. <br> ${perro.tipo}`

    } else if (tipo == 'gato') {
        let gato = new Mascota(nombre, direccion, telefono, tipo, nombreMascota, enfermedad)
        busqueda.innerHTML = `${gato.datosPropietario()}. <br> ${gato.tipo}`

    } else {
        let conejo = new Mascota(nombre, direccion, telefono, tipo, nombreMascota, enfermedad)
        busqueda.innerHTML = `${conejo.datosPropietario()}. <br> ${conejo.tipo}`
    }
}

formulario.addEventListener('submit', consulta)

class Propietario {
    constructor(nombre, direccion, telefono){
        this.nombre = nombre
        this.direccion = direccion
        this.telefono = telefono
    }
    datosPropietario(){
        return `<li>El nombre del dueño es: ${this.nombre}. El domicilio es:  ${this.direccion}, y el número telefónico de contacto es: ${this.telefono}</li>`
    }
}

class  Animal extends Propietario{
    constructor(nombre, direccion, telefono, tipo){
        super(nombre, direccion, telefono)
        this._tipo = tipo
    }
    get tipo() {
        return `<li>El tipo de animal es un: ${this._tipo}, mientras que el nombre de la mascota es:  ${this.nombreMascota} y la enfermedad es: ${this.enfermedad}</li>`
    }
}

class  Mascota extends Animal{
    constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad){
        super(nombre, direccion, telefono, tipo)
        this._nombreMascota = nombreMascota
        this._enfermedad = enfermedad
    }
    get nombreMascota() {
        return this._nombreMascota
    }
    get enfermedad() {
        return this._enfermedad
    }
    set nombreMascota(nombreMascotaNueva) {
        this._nombreMascota = nombreMascotaNueva
    }
    set enfermedad(enfermedadNueva) {
        this._enfermedad = enfermedadNueva
    }
}
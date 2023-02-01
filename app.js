
//JAVA SCRIPT
// Objetos

let name = "ryan"
let lastName = "Ray"
let age = 19

console.log(name);
console.log(lastName);
console.log(age);


// Agrupo en KEYS:
 user = {
    name: "Milena ",
    lastName:"Muñoz",
    age: 19,
    hobby:["correr","jugar","dormir"],
    direccion:{
    calle: "Bichofeo",
    numero: 522,
     }
}
console.log(user)


//Metodos 
// son funciones del objeto
function mostrarNombre() {
    return "Fernando Muñoz"
}
user = {
    name: "Fernando",
    lastName:"Muñoz",
    age: 19,
    hobby:["correr","jugar","dormir"],
    direccion:{
    calle: "Bichofeo",
    numero: 522,
    },
    mostrarNombre: mostrarNombre
}
console.log(user.mostrarNombre())

// THIS
user = {
    name: "Samirah",
    lastName:"Muñoz",
    age: 19,
    mostrarNombre(){
      return this.name+ " " +this.lastName 
    }
}
console.log(user.mostrarNombre())

// Ejemplo Cuenta Bancaria
cuenta = {
    numero: 12345,
    saldo: 0,
    deposito(cantidad){
        this.saldo= this.saldo + cantidad
        
    },
    retiro(cantidad){
        this.saldo= this.saldo - cantidad
    }
}
cuenta.deposito(100)
cuenta.deposito(500)
cuenta.deposito(400)
cuenta.retiro(500)
console.log(cuenta)

// CONSTRUCTOR DE OBJETOS
function Personas(){
    this.nombre=""
    this.apellido=""
    this.años=""
    this.mostrarNombre = function(){
        return `${this.nombre} ${this.apellido}`
    }
}
const usuario1 = new Personas()
usuario1.nombre= "Caro"
usuario1.apellido= "Ramirez"

const usuario2 = new Personas()

console.log(usuario1)
console.log(usuario2)


// Objeto Constructor crea el mismo objeto

const persona= new Object()
console.log(persona)
const persona2= {}
console.log(persona2)

//me devuelve los keys y valores
user = {
    name: "Milena ",
    lastName:"Muñoz",
    age: 10,
}
console.log(Object.keys(user))
console.log(Object.values(user))


//
function Personas(nombre,apellido){
    this.nombre= nombre
    this.apellido= apellido
    this.displayName = function(){
        return `${this.nombre} ${this.apellido}`
    }
}
const cachu = new Personas ("Cachu","Muñoz")
const shanshi= new Personas ("shanshi", "Muñoz")
const Abby= new Personas ("Abby", "Muñoz")

console.log(shanshi)
console.log(cachu)

// cambio nombre de cachu por el de macky
console.log(shanshi.displayName())
cachu.nombre = "macky"
console.log(shanshi.displayName())
console.log(cachu.displayName())

// creo metodo
shanshi.saludar = function(){
    return `hello yo soy ${this.nombre}`
}
console.log(shanshi.saludar())

// creo prototipo para q metodo saludar actue con todos los objetos
Personas.prototype.saludar= function(){
    return `hello yo soy ${this.nombre}`
}
console.log(cachu.saludar())
console.log(Abby.saludar())


//Clases

class personas {
    constructor( nombre, apellido) {
        this.nombre = nombre
        this.apellido = apellido
    }
}



    
const user1 = new personas("A","B")
const user2 = new personas("C","D")
console.log(user1)
console.log(user2)


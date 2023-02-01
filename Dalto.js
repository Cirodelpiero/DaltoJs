console.log("Curso deJavaScript Dalto")
document.write("JavaScript Dalto <br>")

// Variables
var variable= 20
let Variable= 30
const pi= 3.14
let nombre= "Fernando <br>"
let name= prompt("what is your name?")


alert(variable)
console.log(Variable)
console.log(variable)
document.write(nombre)
console.log(name)

// OPERADORES
numero1= 53
numero2= 7
console.log(numero1+numero2)

frase= ""+numero1+numero2  // concatenado 537 en vez de sumarlos
console.log(frase)

//OPERADORES INTERMEDIOS
//Comparacion
numb= 10
numb2= 20
document.write((numb==numb2) + "<br>"); 
document.write((numb!=numb2) + "<br>");
//Logicos
// And Or Not devuelven true and false

//ARRAYS
let arreglo= ["nombre","24","BS AS"] //nombre es 0 .24 es 1. BS AS es posicion 2
console.log(arreglo)
console.log(arreglo[1])

//ARRAYS ASOCIATIVOS
let pc={
    nombre: "PC ",
    procesador:  "Intel Core",
    ram: "16gb",
    espacio: "1TB"
};
console.log(pc)
console.log(pc["procesador"])  // llama a procesador, al key y nos dan el value intel core

//Bucles e Interacion
//IF
numeroParaSumar= 5;
if (numeroParaSumar<10){
     document.write ("es menor que 10 <br>");
}else {
     document.write("es mayor que 10 <br>" )

}
    

//WHILE
numeroParaSumar= 0;
while (numeroParaSumar<10){
    numeroParaSumar++
    document.write (numeroParaSumar + "<br>");
}

// DO WHILE
numeroParaSumar= 0;
do {
    numeroParaSumar++
    document.write (numeroParaSumar + "<br>");
}
while (numeroParaSumar<10)

//BREAK
numeroParaSumar= 0;
while (numeroParaSumar<100){
    numeroParaSumar++
    document.write (numeroParaSumar + "<br>");
    if (numeroParaSumar==20){                   // corta en el numero 20
        break
    }
}

//CONTINUE
numeroParaSumar= 0;
while (numeroParaSumar<25){
    numeroParaSumar++
    document.write (numeroParaSumar + "<br>");
    if (numeroParaSumar==15){                   // 
        continue
    }
}

//FOR
for (let i=0; i<5;i++){               //creciente
    console.log(i+"<br>")
}

for (let i=6; i>0;i--){               //decreciente
    console.log(i+"<br>")
}

//tambien
let i=6;
for(i;i>=0;i--){
    console.log(i+ "<br>")
    if (i==3){                      // corta cuando i es 3
    break;
    }
}

let m=6;
for(m;m>=0;m--){
    console.log(m+ "<br>")
    if (m==3){                      // continua cuando i es 3
    continue;
    }
}

//FOR IN
const animales= ["gato","perro","trex"]
for(animal in animales){
    document.write(animal + "<br>")   // devuelve posociones 0.1.2
}

//FOR OF
const anim= ["gato","perro","trex"]
for(animal of anim){
    document.write(animal + "<br>")   // devuelve elementos
}

//LABEL
array1=["maria","josefa","roberta"]
array2=["pedro","marcelo",array1]

for (let array in array2){
    if(array==2){                          //ver ejemplo
        for (let array of array1){
            document.write(array + "<br>")}
        }else {
            document.write(array2[array]+ "<br>")}
        
}
    
//FUNCIONES
function saludar(){
    repuesta=prompt("como estas?")
    if (repuesta=="bien"){
        console.log("me alegro")
        
    }else {
        console.log("una lastima")
        
    }
}
saludar()                 // llamo a la funcion

function saludo(){
    console.log("hola")
    return "hola como estas?"  // sin return da indefined
}
sal=saludo()
console.log(sal)

//PARAMETROS DE FUNCIONES
function suma(numb1,numb2) {
    let res=numb1+numb2;
    document.write(res);
}
suma(16,14)
suma(20,30)

function sum(numb3,numb4){    //ver ejemplo
    let res=numb3+numb4;
    return res
}
let resultado= sum(20.25)
document.write(resultado)
//----------------------------
// function hola(nombre){
//     let frase= `¡hola ${nombre} como estas?`
//     console.log(frase)
// }
// hola("jj")                  // llamo a la funcion

// ES LO MISMO HACER LA FUNCION ASI
const hola= function(nombre){
    let frase= `¡hola ${nombre} como estas?`
    console.log(frase)
}
hola("jj")    

// FUNCION FLECHA
const salu= (nombre)=>{
    let fras= `¡hola ${nombre} como estas?`
    console.log(fras)
}
salu("mm")



// CLASES
class Animal{                             
    
    constructor(especie,edad,color){    // creo clase
        this.especie= especie;
        this.edad= edad;
        this.color= color;
        this.info= `soy ${this.especie}, tengo ${this.edad} años y tengo color ${this.color} `
    }

    verInfo(){
    console.log(this.info)}


ladrar() {
    if(this.especie=="perro"){
        console.log("wow <br>");
    }else {
        console.log("no puede ladrar <br>");
    }
}  

set modificarEdad(newEdad){          // creo setter
    this.edad= newEdad;}
get getEdad(){
    return this.edad
}

}
// modificarEdad(){                  // no creo setter pero en las buenas practicas no se usa asi
//     this.nombre="pedro"
// }
 
let Perro= new Animal("perro","5","blanco ") // creo objetos
let Gato= new Animal("persa","2","marron ") 
let Pajaro= new Animal("bichofeo","1","beige") 

console.log(Perro)
console.log(Gato)             //llamo desde el metodo
console.log(Pajaro.info)     //llamo desde el atributo
Perro.verInfo();

Perro.ladrar()
Gato.ladrar()
Pajaro.ladrar()

Perro.modificarEdad="10 <br>";  // llamo a la funcion del setter
console.log(Perro.edad)

console.log(Perro.edad)
console.log(Perro)


document.write(Perro.getEdad)



// Perro.modificarEdad()
// console.log(Perro.edad)

// CARACTERISTICAS:
// ABTRACCION
// MODULARIDAD
// ENCAPSULAMIENTO
// POLIMORFISMO

class celulares{
    constructor(color,peso,ram){
        this.color= color;
        this.peso= peso;
        this.memoriaRam= ram;
        this.encendido= false;
    }
    presionarBotonEncendido(){
        if (this.encendido==false){
            alert("celu prendido");
            this.encendido=true;
        }else{
            alert("celu apagado");
            this.encendido=false;
        }
    }
    reiniciar(){
        if (this.encendido == true){
            alert("reiniciando celular");
        }else{
            alert("el celu esta apagado")
        }
    }

}
celu1 = new celulares ("rojo", "2gr","1gb")

celu1.presionarBotonEncendido()
celu1.reiniciar()
alert(celu1.presionarBotonEncendido)

// HERENCIA

class samsung extends celulares{
    constructor(color,peso,ram,resolucion){
        super(color,peso,ram);
        this.resolucion= resolucion

    }
}
samsung = new celulares ("blanco", "4gr","10gb","full hd");

console.log(celu1)
samsung.presionarBotonEncendido()
samsung.presionarBotonEncendido()
samsung.presionarBotonEncendido()
samsung.presionarBotonEncendido()

// ----------------------------------------------------------------------------

// METODO DE CADENA

let cadena= "cadena de prueba"
let resultad = cadena.concat(" hola <br>")   //agrega otro string
document.write(resultad)

let cadena2= "cadena"
res= cadena.startsWith(cadena2)             // true si empiezan igual
document.write(res + "<br>")

result=cadena.endsWith(cadena2)             // true si terminan igual
document.write(result +"<br>") 

inc= cadena.includes(cadena2)             // true si incluye la palabra
document.write(inc +"<br>") 

ind= cadena.indexOf("de")             // indice en que posicion comienza la frase
document.write(ind +"<br>") 

lastind= cadena.lastIndexOf("de")        // indice en que posicion comienza la ultima frase repetida
document.write(lastind +"<br>")

pad= cadena.padStart(20,8)        // rellena con 20 caracteres con el numero 8,desde el INICIO, descontando los caracteres del string
document.write(pad +"<br>")

pade= cadena.padEnd(20,"F")        // rellena con 20 caracteres con el numero 8,desde el FINAL, descontando los caracteres del string
document.write(pade +"<br>")

rep= cadena.repeat(4)        // repite la cantidad de veces el string
document.write(rep +"<br>")

let jj= "hola,como,estas,todo,bien"     // me devuelve "ESTAS", funciona como un array
spl= jj.split(",")
document.write(spl[2] + "<br>")

let nn= "hola como estas todo bien"     // me devuelve "TODO", funciona como un array
sp= nn.split(" ")
document.write(sp[3]+ "<br>")

let xx= "hola como estas todo bien"     // rebana la palabra "como"
sn= xx.split("como")
document.write(sn +"<br>")


sub= jj.substring(5,9)                 //crea un nuevo string. me devuelve "COMO"
document.write(sub +"<br>")

tolow= jj.toUpperCase()                 //convierte a mayuscula y tolowercase a minuscula
document.write(tolow +"<br>")


tri= cadena.trim()              // elimina los espacios del inicio y final y  trimStar del inicio, trimEnd espacios del final
document.write(tri +"<br>")


document.write(jj.length +"<br>")      // cuenta caracteres

p=25
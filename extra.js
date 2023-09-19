let array = [1,2,3,4,5,6,7,8,9,10]; //punto2

//punto3
let [posicion0, ,posicion2, ,posicion4] = array;
let [ ,posicion1, ,posicion3] = array;
const otroArray = [posicion1, posicion3 ,...array.slice(5)];
console.log(otroArray); 

//punto4
let mascota = {
    nombre: 'Bony',
    tipoMascota: 'Perro',
    color: 'Dorado',
    raza: 'Golden retriever'
}

let {nombre, tipoMascota, color, raza} = mascota;
console.log("Hola les presento a mi mascota su nombre es: " + nombre + ", es un hermoso " + tipoMascota +
 ", de color: " + color + " y su raza es: " + raza);
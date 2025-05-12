let frase = "Hola";
console.log(frase);

// la consola da hola mundo 
let lista = ["agua","leche","azucar"]
console.log(lista);
// la consola da agua leche azucar

function suma(a,b) {
    return a + b; 
}
let string = "1231563456456"; // Esto debe ser un string, no un array con un solo string
let longitud = string.length;
console.log(longitud); // Salida: 13
// la consola da 13

let string2 ="localizamos un texto dentro de otro texto"
let posicion = string2.indexOf("Localizamos")
console.log(posicion); // Salida: 0

// serch()
//slice ()
let string3 = "pepe, lolo, juan"
let resultado = string3.slice(0,4);
console.log(resultado); // Salida: "pepe"
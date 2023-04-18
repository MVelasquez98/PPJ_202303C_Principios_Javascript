let numero = 10;
let nombre = "matias";
let estaVacio = true;
let peso = 69.7;
// let number numero=10;
console.log(numero);
numero = 150;
console.log(numero);
numero = "200";
console.log(numero);
console.log("Hola mi nombre es " + nombre);
console.log(`Hola mi nombre es ${nombre}`);
let suma = numero + 1;
console.log(suma);
numero = 200;
suma = numero + 1;
console.log(suma);

let cafes = ['cortado', 'expresso', 'macciato', 'lagrima'];
console.log(cafes);
console.log(cafes[1]);
let x = "300";
let y = parseInt(x) - 1;
console.log(y);

//Estructura IF-Else
let edad = 13;
console.log(edad > 18);
if (edad > 18) {
    console.log("Bienvenido a la pagina");
} else {
    console.log("No tenes suficiente edad");
}

let apellido = "";
console.log(apellido == "");
if (apellido == "") {
    console.log("No nos diste tu apellido");
} else {
    console.log("Este es tu apellido " + apellido);
}

if (edad < 12) {
    console.log("Todavia sos muy pequeño")
} else if (edad < 19) {
    console.log("Todavia sos un adolescente");
} else if (edad < 35) {
    console.log("Aun sos muy joven");
} else {
    console.log("Piensa en cuidarte más");
}

let mostrado = true;
let usuarioPermiteMensajes = true;
// && AND (Y)
if (mostrado && usuarioPermiteMensajes) {
    console.log("Este es el mensaje");
}
// !true(false) && true
if (!mostrado && usuarioPermiteMensajes) {
    console.log("Este es el mensaje");
}
// || OR (O)
mostrado = false;
if (mostrado || usuarioPermiteMensajes) {
    console.log("Este es el mensaje del OR");
}

let z = 20;
z = z + 10;
z += 10;
console.log(z);
let mensaje = "Hola Mundo";
console.log(mensaje.toLowerCase());
console.log(mensaje.toUpperCase());

let vocales = ['a', 'e', 'i', 'o'];
vocales.push('u');
console.log(vocales);
console.log(vocales.length);

function calcularPrecioTotal(precio, porcentajeImpuestos) {
    let gastosEnvio = 10;
    let precioConImpuestos = (1 + porcentajeImpuestos / 100) * precio;// 5 * 1.20
    let precioTotal = gastosEnvio + precioConImpuestos;
    return parseFloat(precioTotal.toFixed(2));//4.50
}

function mostrarMesnaje() {
    console.log("Bienvenido al sitio web");
}

let precioTotal = calcularPrecioTotal(23.34, 21);
console.log(precioTotal);
mostrarMesnaje();

function esPar(numero) {
    //10/2=5;
    //10%2=0;
    //11%2=1
    if (numero % 2 == 0) {
        return "es par";
    } else {
        return "es impar";
    }
}

let numeroCliente = parseInt(prompt("Introduci un numero"));
let resultado = esPar(numeroCliente);
alert(`El numero ${numeroCliente} ${resultado}`);
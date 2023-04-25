//Estructura de repeticion en ciclos FOR

for (let i = 0; i < 10; i++) {
    //console.log(i);
}

let frutas = ['manzana', 'banana', 'naranja', 'frutilla'];
for (let i = 0; i < frutas.length; i++) {
    //console.log(frutas[i]);
}
//Setencia break
for (let i = 0; i < frutas.length; i++) {
    //console.log(i);
    if (frutas[i] == 'banana') {
        //console.log('Es banana');
        break;
    }
}

//setencia continue
for (let i = 0; i < frutas.length; i++) {
    //console.log(i);
    if (frutas[i] == 'banana') {
        continue;
    }
}

//setencia continue
for (let i = 0; i < frutas.length; i++) {
    //console.log(frutas[i].toUpperCase());
}
let i = 0;
//ESTRUCTURA CICLiCA WHILE
let encontrado = false;
while (i < frutas.length && encontrado == false) { //LA CONDICION DE SALIDA, PENSAR EN FALSO PARA QUE CUANDO SEA TRUE SALGA DEL BUCLE
    console.log(i);
    if (frutas[i] == 'naranja') {
        encontrado = true;
    }
    i++;
}

//AMBITOS DE VARIABLES
let x = 20;//variable global
function imprimirMensaje(mensaje) {
    let numero = 20; // variable local
    x += numero;
    console.log("ESTOY EN LA FUNCION Y X VALE " + x)
    console.log(numero);
    console.log(mensaje);
}
imprimirMensaje("Hola mundo");
console.log("ESTOY FUERA DE LA FUNCION Y X VALE " + x);
//numero += 10; EN este punto la variable no existe en el espacio de memoria

//ACCEDIENDO AL DOM
//UTILIZAR EL DEFER EN EL SCRIPT
console.dir(document);
let divContendor = document.getElementById("contenedor");
divContendor.innerHTML="Hola soy un contenedor con texto nuevo";
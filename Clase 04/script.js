let compras = ["arroz", "fideos", "leche", "cafe", "cereal", "yogurt"];
let btnLista = document.getElementById("buttonLista");
let btnClear = document.getElementById("clearLista");
let lista = document.getElementById("listaCompras");

btnClear.addEventListener('click', () => {
    lista.innerHTML = "";
});
btnLista.addEventListener('click', function () {
    compras.forEach((elemento) => {
        let nuevoElementoLista = `<li>${elemento}</li>`;
        lista.innerHTML += nuevoElementoLista;
    });
});
//()=>{} arrow function o funcion anonima de flecha
//function (){} funcion anonima
//forEach para recorrer los elementos del array
let inputPassword = document.getElementById("password");
inputPassword.addEventListener("keypress", (evento) => {
    let codCaracter = evento.charCode;
    if (codCaracter != 0) {//chequeo que el carcter no sea nulo
        if (codCaracter < 97 || codCaracter > 122) {//verificar que el codigo ASCCI no sea MAYUSCULA
            evento.preventDefault();
            alert("Solo se pueden ingresar letras minusculas")
        }
    }
});
let btnEnviar = document.getElementById("btnEnviar");
btnEnviar.addEventListener("click", () => {
    let valor = inputPassword.value;
    let div = document.createElement('div');
    div.innerHTML = valor.toUpperCase();
    div.style.color = "red";
    let body = document.querySelector("body");
    body.appendChild(div);
});

let paises = document.getElementsByClassName("pais");
// console.log(paises[0].innerHTML);
// console.log(paises[1].innerHTML);
// console.log(paises[2].innerHTML);
for (const pais of paises) {
    console.log(pais.innerHTML);
}
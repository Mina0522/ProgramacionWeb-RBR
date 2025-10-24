const areaR = document.getElementById("areaR");
const botones = document.querySelectorAll("button");
const lista = document.querySelector(".historial");

let operacionActual = "";
let historial = [];
let num1 = null;
let operador = null;

function calculadora (num1, num2, ope) {
    let r;

    switch (ope) {

        case '+': 
            r = num1 + num2;
            break;
        case '-': 
            r = num1 - num2;
            break;
        case '*': 
            r = num1 * num2;
            break;
        case '/': 
            if (num2 === 0) {
                console.log ("Error, no se pude dividir entre cero");
                return;
            }

            r = num1 / num2;
            break;
        default: 
            console.log ("Opcion no valido, escriba bien la opcion.");
            return;
    }
    return r;
}

function actualizar() {
    areaR.value = operacionActual || "0";
}

function mostrarHistorial() {
    lista.innerHTML = "<h3>Historial</h3>" + historial.join("<br>");
}

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const valor = boton.textContent;

        if (!isNaN(valor) || valor === '.') {
            operacionActual += valor;
            actualizar();
        }

        else if (valor === "C") {
            operacionActual = "";
            num1 = null;
            operador = null;
            actualizar();
        }

        else if (valor === "+" || valor === "-" || valor === "*" || valor === "/") {
            if (operacionActual === "") return;
            num1 = Number(operacionActual);
            operador = valor;
            operacionActual = "";
            actualizar();
        }

        else if (valor === "=") {
            if (operador === null || operacionActual === "") return;
            const num2 = Number(operacionActual);
            const resultado = calculadora(num1, num2, operador);
            if (resultado !== undefined) {
                historial.push(`${num1}${operador}${num2}=${resultado}`);
                mostrarHistorial();
                operacionActual = resultado.toString();
                actualizar();
                num1 = resultado;
                operador = null;
            }
        }
    });
});
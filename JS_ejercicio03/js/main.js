import { calcular } from "./math.js";
import { actualizar, mostrarHistorial } from "./ui.js";

const areaR = document.getElementById("areaR");
const botones = document.querySelectorAll("button");
const lista = document.querySelector(".historial");

let operacionActual = "";
let num1 = null;
let operador = null;
let historial = [];

mostrarHistorial(lista, historial);

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const valor = boton.textContent;
        if (!isNaN(valor) || valor === '.') {
            operacionActual += valor;
            actualizar(areaR, operacionActual);
        }
        else if (valor === "C") {
            operacionActual = "";
            num1 = null;
            operador = null;
            actualizar(areaR, operacionActual);
        }
        else if (["+", "-", "*", "/"].includes(valor)) {
            if (operacionActual === "") return;
                num1 = Number(operacionActual);
                operador = valor;
                operacionActual = "";
                actualizar(areaR, operacionActual);
            }

        else if (valor === "=") {
            if (operador === null || operacionActual === "") return;
                const num2 = Number(operacionActual);
                const resultado = calcular(num1, num2, operador);
            if (resultado !== undefined) {
                historial.push(`${num1}${operador}${num2}=${resultado}`);
                mostrarHistorial(lista, historial);
                operacionActual = resultado.toString();
                actualizar(areaR, operacionActual);
                num1 = resultado;
                operador = null;
            }
        }
    });
});

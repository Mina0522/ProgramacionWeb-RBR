import { crear, actualizar } from "./ui.js";
import { historial, cargar, limpiar } from "./storage.js";

export function iniciar () {
    const contenedor = document.querySelector('.contenedor');
    const btnagg = document.querySelector('.agg');
    const btnlimpiar = document.querySelector('.limpiarH');
    const inputTarea = document.querySelector('#input-tarea');

    let tareas = carga();
    actualizar(contenedor, tareas);

    btnagg.addEventListener('click', () => {
        const texto = inputTarea.value.trim();
        if (texto) {
            const nuevaTarea = {
                id: Date.now().toString(),
                texto,
                terminada: false
            };
            tareas.push(nuevaTarea);
            crear(nuevaTarea);
            historial();
            inputTarea.value = '';
        }
    });

    btnlimpiar.addEventListener('click', () => {
        tareas = [];
        contenedor.innerHTML = '';
    });

}
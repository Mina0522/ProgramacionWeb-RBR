import { historial } from "./storage.js";

export function crear(tarea) {
    const div = document.createElement('div');
    div.classList.add('tarea');
    div.setAttribute('data-id', tarea.id);

    div.innerHTML = `
        <label>
            <input type="checkbox" ${tarea.terminada ? 'checked' : ''}>
            ${tarea.texto}
        </label>
        <button class="eliminar">Eliminar</button>
    `;

    const checkbox = div.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', (e) => {
        const id = div.getAttribute('data-id');
        tareas = tareas.map(t =>
            t.id === id ? { ...t, terminada: e.target.checked } : t
        );
        historial();
    });

    const btnEliminar = div.querySelector('.eliminar');
    btnEliminar.addEventListener('click', () => {
        tareas = tareas.filter(t => t.id !== div.getAttribute('data-id'));
        div.remove();
        historial();
    });

    contenedor.appendChild(div);
}

export function actualizar(contenedor, tareas) {
    contenedor.innerHTML = "";
    tareas.forEach(tarea => crear(tarea));
}
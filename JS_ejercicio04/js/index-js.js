const contenedor = document.querySelector('.contenedor');
const btnagg = document.querySelector('.agg');
const btnlimpiar = document.querySelector('.limpiarH');
const inputTarea = document.querySelector('#input-tarea');

let tareas = JSON.parse(localStorage.getItem('tareas')) || [];


function historial() {
    localStorage.setItem('tareas', JSON.stringify(tareas));
}

function crear(tarea) {
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

function actualizar() {
    tareas.forEach(tarea => crear(tarea));
}

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
    localStorage.removeItem('tareas');
    tareas = [];
    contenedor.innerHTML = '';
});

function borrar() {
    const botonesEliminar = document.querySelectorAll('.tarea .eliminar');
    botonesEliminar.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.target.parentElement.remove();
        });
    });
}

window.onload = function () {
    borrar();
    actualizar();
};

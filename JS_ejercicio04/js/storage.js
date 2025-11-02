export function historial (tareas) {
    localStorage.setItem('tareas', JSON.stringify(tareas));
}

export function cargar () {
    return tareas = JSON.parse(localStorage.getItem('tareas')) || [];
}

export function limpiar () {
    localStorage.removeItem('tareas');
}
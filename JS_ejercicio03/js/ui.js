export function actualizar(areaR, texto) {
    areaR.value = texto || "0";
}

export function mostrarHistorial(lista, historial) {
    lista.innerHTML = "<h3>Historial</h3>" + historial.join("<br>");
}

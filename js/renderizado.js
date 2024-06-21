

/*export function renderizarTablero(tablero) {
    const mapa_contenedor = document.getElementById('contenedor_tablero')
    mapa_contenedor.innerHTML = tablero;
}*/



export function renderizarTablero() {
    let numero_celda = 1;
    for (let i = 1; i <= 40; i++) {
        let plantilla = `<div id="celda_${numero_celda}" class="grid-item celda"></div>`
        document.getElementById('contenedor_tablero').innerHTML += plantilla;
        numero_celda++;
    }
}

export function asignarFuncionCelda() {
    for (let i = 1; i <= 40; i++) {
        document.getElementById('celda_' + i).addEventListener('click', () => {
            console.log('seleccionaste la celda numero ' + i)
            // aca deberia ir una funcion que comience con las situaciones
        })
    }
}

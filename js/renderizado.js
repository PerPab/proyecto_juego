
export function renderizarTablero() {
    for (let i = 1; i <= 5; i++) {
        let plantilla = `<div id="1-${i}" data-index="${i}" data-row="${i}" data-col="${i}" class="grid-item celda inactiva"></div>`
        document.getElementById('contenedor_tablero').innerHTML += plantilla;
    }
    for (let i = 1; i <= 5; i++) {
        let plantilla = `<div id="2-${i}" data-index="${i}" data-row="${i}" data-col="${i}" class="grid-item celda inactiva"></div>`
        document.getElementById('contenedor_tablero').innerHTML += plantilla;
    }
    for (let i = 1; i <= 5; i++) {
        let plantilla = `<div id="3-${i}" data-index="${i}" data-row="${i}" data-col="${i}" class="grid-item celda inactiva"></div>`
        document.getElementById('contenedor_tablero').innerHTML += plantilla;
    }
    for (let i = 1; i <= 5; i++) {
        let plantilla = `<div id="4-${i}" data-index="${i}" data-row="${i}" data-col="${i}" class="grid-item celda inactiva"></div>`
        document.getElementById('contenedor_tablero').innerHTML += plantilla;
    }
    for (let i = 1; i <= 5; i++) {
        let plantilla = `<div id="5-${i}" data-index="${i}" data-row="${i}" data-col="${i}" class="grid-item celda inactiva"></div>`
        document.getElementById('contenedor_tablero').innerHTML += plantilla;
    }
    for (let i = 1; i <= 5; i++) {
        let plantilla = `<div id="6-${i}" data-index="${i}" data-row="${i}" data-col="${i}" class="grid-item celda inactiva"></div>`
        document.getElementById('contenedor_tablero').innerHTML += plantilla;
    }
    for (let i = 1; i <= 5; i++) {
        let plantilla = `<div id="7-${i}" data-index="${i}" data-row="${i}" data-col="${i}" class="grid-item celda inactiva"></div>`
        document.getElementById('contenedor_tablero').innerHTML += plantilla;
    }
    for (let i = 1; i <= 5; i++) {
        let plantilla = `<div id="8-${i}" data-index="${i}" data-row="${i}" data-col="${i}" class="grid-item celda ${i == 3 ? 'seleccionada' : 'inactiva'}"></div>`
        document.getElementById('contenedor_tablero').innerHTML += plantilla;
    }
}


/** for (let i = 1; i <= 5; i++) {
        let plantilla = `<div id="8-${i}" data-index="${i}" data-row="${i}" data-col="${i}" class="grid-item celda ${i == 3 ? 'seleccionada' : 'inactiva'}"></div>`
        document.getElementById('contenedor_tablero').innerHTML += plantilla;
    } */


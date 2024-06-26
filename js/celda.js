import { mostrarModalUno } from "./modales.js";


// funciones para asiganr clases y eventos a las celdas, preguntar si se queire avanzar y realizar el avance del jugador

export function avanzarCelda(nuevaCelda, index) {
    const newcells = document.querySelectorAll('.celda');
    newcells.forEach((celda) => {
        if (celda.classList.contains('disponible')) {
            celda.classList.add('inactiva');
            celda.classList.remove('disponible');
        }

        if (document.getElementById(nuevaCelda)) {
            document.getElementById(nuevaCelda).classList.add('seleccionada');
            document.getElementById(nuevaCelda).classList.remove('disponible');
        }
    })
    if (document.getElementById(index)) {
        document.getElementById(index).classList.add('inactiva');
        document.getElementById(index).classList.remove('seleccionada');
    }
}

function PreguntarMovimientoCelda(index) {
    const cells = document.querySelectorAll('.celda');
    cells.forEach(celda => {
        celda.addEventListener('click', (e) => {
            if (e.target.classList.contains('disponible')) {
                let nuevaCelda = e.target.id;
                mostrarModalUno(nuevaCelda, index);   // aca debe abrirse el modal con los dialogos
            }
        })
    })
}

export function mostrarCeldasDisponibles() {
    const cells = document.querySelectorAll('.celda');
    cells.forEach(celda => {
        celda.addEventListener('click', (e) => {
            if (e.target.classList.contains('seleccionada')) {
                let index = e.target.id;
                let rowNumber = parseInt((e.target.id).charAt(e.target.id.length - 1));
                let colNumber = parseInt((e.target.id).charAt(0));
                if (document.getElementById(`${colNumber}-${rowNumber + 1}`)) {
                    if (document.getElementById(`${colNumber}-${rowNumber + 1}`).classList.contains('inactiva')) {
                        document.getElementById(`${colNumber}-${rowNumber + 1}`).classList.remove('inactiva');
                        document.getElementById(`${colNumber}-${rowNumber + 1}`).classList.add('disponible');
                        document.getElementById(`${colNumber}-${rowNumber + 1}`).addEventListener('click', PreguntarMovimientoCelda(index))
                    }
                }
                if (document.getElementById(`${colNumber}-${rowNumber - 1}`)) {
                    if (document.getElementById(`${colNumber}-${rowNumber - 1}`).classList.contains('inactiva')) {
                        document.getElementById(`${colNumber}-${rowNumber - 1}`).classList.remove('inactiva');
                        document.getElementById(`${colNumber}-${rowNumber - 1}`).classList.add('disponible');
                        document.getElementById(`${colNumber}-${rowNumber - 1}`).addEventListener('click', PreguntarMovimientoCelda(index))
                    }
                }
                if (document.getElementById(`${colNumber - 1}-${rowNumber}`)) {
                    if (document.getElementById(`${colNumber - 1}-${rowNumber}`).classList.contains('inactiva')) {
                        document.getElementById(`${colNumber - 1}-${rowNumber}`).classList.remove('inactiva');
                        document.getElementById(`${colNumber - 1}-${rowNumber}`).classList.add('disponible');
                        document.getElementById(`${colNumber - 1}-${rowNumber}`).addEventListener('click', PreguntarMovimientoCelda(index))
                    }
                }
                if (document.getElementById(`${colNumber + 1}-${rowNumber}`)) {
                    if (document.getElementById(`${colNumber + 1}-${rowNumber}`).classList.contains('inactiva')) {
                        document.getElementById(`${colNumber + 1}-${rowNumber}`).classList.remove('inactiva');
                        document.getElementById(`${colNumber + 1}-${rowNumber}`).classList.add('disponible');
                        document.getElementById(`${colNumber + 1}-${rowNumber}`).addEventListener('click', PreguntarMovimientoCelda(index))
                    }
                }
            }
        })
    }
    )
}


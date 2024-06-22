

/*function mostrarModal(nuevaCelda, index) {
    Swal.fire({
        title: "Quieres avanzar a la casilla " + nuevaCelda,
        text: "Quieres avanzar a la casilla " + nuevaCelda,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Aceptar"
    }).then((result) => {
        if (result.isConfirmed) {
            avanzarCelda(nuevaCelda, index)
        }
    });
}*/
/**function avanzarCelda(nuevaCelda, index) {
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
 */

function avanzarCelda(nuevaCelda, index) {
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

function mostrarModal(nuevaCelda, index) {
    document.getElementById('modal-general').innerHTML = `
    <div class="container-fluid body-modal">
    <div class="container-fluid text-center contenedor-imagen-modal">
        <img class="img-modal" src="./img/house.jpg">
    </div>
    <div class="container-fluid contenedor-texto-modal text-center">
        <p>quieres entrar a esta celda ${nuevaCelda}?</p> 
    </div>
    <div class="container-fluid text-center contenedor-boton-modal">
        <button id="btn-aceptar-modal">aceptar</button>
        <button id="btn-cancelar-modal">cancelar</button>
    </div>
</div>`
    document.getElementById('modal-general').showModal()

    document.getElementById('btn-aceptar-modal').addEventListener('click', () => {
        avanzarCelda(nuevaCelda, index)
        document.getElementById('modal-general').close()
    })

    document.getElementById('btn-cancelar-modal').addEventListener('click', () => {
        document.getElementById('modal-general').close()
    })

    //avanzarCelda(nuevaCelda, index) /// esta funcion tiene que ir por fuera del modal
}

function PreguntarMovimientoCelda(index) {
    const cells = document.querySelectorAll('.celda');
    cells.forEach(celda => {
        celda.addEventListener('click', (e) => {
            if (e.target.classList.contains('disponible')) {
                let nuevaCelda = e.target.id;
                mostrarModal(nuevaCelda, index);   // aca debe abrirse el modal con los dialogos
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


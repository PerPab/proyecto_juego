
import { avanzarCelda } from "./celda.js"
// diferentes modales para cada situacion

export function mostrarModalTresCombate() { //en el tercer modal se muestra una resolcucion a la opcion elegida
    document.getElementById('modal-general').innerHTML = `
    <div class=" body-modal">
    <div class="container-fluid text-center contenedor-imagen-modal">
        <img class="img-modal" src="./img/wolf.jpeg">
    </div>
    <div class="container-fluid contenedor-texto-modal text-center">
        <p>en el tercer modal se muestra una resolcucion a la opcion elegida</p> 
    </div>
    <div class="container-fluid text-center contenedor-boton-modal">
        <button id="btn-aceptar-modal">Aceptar</button>
        
    </div>
</div>`
    document.getElementById('modal-general').showModal()
    document.getElementById('btn-aceptar-modal').addEventListener('click', () => {
        document.getElementById('modal-general').close()
    })
}


export function mostrarModalDosCombate() { //en el segundo modal se desencadena la accion, pueden existir 3 tipos de modales de accion || combate-puzzles-exploracion
    document.getElementById('modal-general').innerHTML = `
    <div class="body-modal">
    <div class="contenedor-imagen-modal">
        <img class="img-modal" src="./img/wolf.jpeg">
    </div>
    <div class="contenedor-texto-modal">
        <p>en el segundo modal se desencadena la accion, pueden existir 3 tipos de modales de accion || combate-puzzles-exploracion</p> 
    </div>
    <div class="contenedor-boton-modal">
        <button id="btn-atacar-modal">Atacar</button>
        <button id="btn-huir-modal">Huir</button>
        <button id="btn-usar-modal">Usar Objeto</button>
    </div>
</div>`
    document.getElementById('modal-general').showModal()
    document.getElementById('btn-atacar-modal').addEventListener('click', () => {
        mostrarModalTresCombate()
    })
}

export function mostrarModalUno(nuevaCelda, index) {  //este modal muestra la presentacion a la situacion de la celda
    document.getElementById('modal-general').innerHTML = `
    <div class=" body-modal">
    <div class="container-fluid text-center contenedor-imagen-modal">
        <img class="img-modal" src="./img/house.jpg">
    </div>
    <div class="container-fluid contenedor-texto-modal text-center">
        <p>quieres entrar a esta celda ${nuevaCelda}?</p> 
        <p>este modal muestra la presentacion a la situacion de la celda</p> 
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
        mostrarModalDosCombate()
    })

    document.getElementById('btn-cancelar-modal').addEventListener('click', () => {
        document.getElementById('modal-general').close()
    })
}
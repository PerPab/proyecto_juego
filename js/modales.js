
import { avanzarCelda } from "./celda.js"
// diferentes modales para cada situacion


export function mostrarModalCuatroCombate() { //en el tercer modal se muestra una resolcucion a la opcion elegida
    document.getElementById('modal-general').innerHTML = `
    <div class=" body-modal">
    <div class="container-fluid text-center contenedor-imagen-modal">
        <img class="img-modal" src="./img/wolf.jpeg">
    </div>
    <div class="container-fluid contenedor-texto-modal">
        <p>En el ultimo modal de combate se muestra un mensaje de cierre del combate y si se ganó algun loot se muestra aca.
        al aceptar se regresa a la grilla o si el personaje murio hay un mensaje sobre eso y se regresa al menu.</p> 
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

export function mostrarModalTresCombate() { //en el tercer modal se muestra una resolcucion a la opcion elegida
    document.getElementById('modal-general').innerHTML = `
    <div class="body-modal">
    <div class="container-fluid text-center contenedor-imagen-modal">
        <img class="img-modal" src="./img/wolf.jpeg">
    </div>
    <div class="container-fluid contenedor-texto-modal">
        <p>las pelean utilizan la (dados + fuerza del jugador + item equipado) -  (tirada de dados de defensa +la constitucion del enemigo)
        si el resultado es cero o menor a cero entonces se resistió el ataque, en cambio si el resultado es mayor a cero, ese valor se le resta del pool de vida del enemigo, 
        cuando llega a cero muere y el combate termina.
        la accion se desarrolla dentro de un ciclo hasta agotar vida. el jugador en su turno puede abrir el inventario para usar items curativos u ofensivos, si las cosas se ponen feas
        tambien puede seleccionar la opcion escapar, que contrasta (dados + agilidad del jugado) - (dados + agilidad del enemigo) si la tirada es exitosa entonces se escapa del combate
        pero no se recibe loot ni se regenera vida</p> 
    </div>
    <div class="container-fluid text-center contenedor-boton-modal">
        <button id="btn-aceptar-modal">Atacar</button>
        <button id="btn-aceptar-modal">Escapar</button>
        <button id="btn-aceptar-modal">Usar item</button>
        
    </div>
</div>`
    document.getElementById('modal-general').showModal()
    document.getElementById('btn-aceptar-modal').addEventListener('click', () => {
        mostrarModalCuatroCombate()
    })
}


export function mostrarModalDosCombate() { //en el segundo modal se desencadena la accion, pueden existir 3 tipos de modales de accion || combate-puzzles-exploracion
    document.getElementById('modal-general').innerHTML = `
    <div class="body-modal">
    <div class="contenedor-imagen-modal">
        <img class="img-modal" src="./img/wolf.jpeg">
    </div>
    <div class="contenedor-texto-modal">
        <p>en el segundo modal se desencadena la accion, pueden existir 3 tipos de modales de accion || combate-puzzles-exploracion. 
        El jugador puede elegir Intentar huir, esta accion utiliza la agilidad del jugador vs la percepcion del enemigo, 
        si logra huir puede evitar el combate pero si falla la prueba el combate se inicia y el enemigo golpea primero.
        Si elige la opcion de entrar en combate, inicia la pelea y el jugador golpea primero. 
        </p> 
    </div>
    <div class="contenedor-boton-modal">
        <button id="btn-atacar-modal">Atacar</button>
        <button id="btn-huir-modal">Huir</button> 
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
    <div class="container-fluid contenedor-texto-modal">
        <p>quieres entrar a esta celda ${nuevaCelda}?</p> 
        <p>este modal muestra la presentacion a la situacion de la celda.
        Al aceptar se mueve hacia esa celda y puede darse una situacion: las situaciones se catalogan en 1- combates,
        2- puzzles, 3- neutrales.
        1- en las situaciones de combate se puede intentar huir o pelear hasta agotar vida, pueden retornar loot de un enemigo muerto.
        2- en las situaciones de puzzles pueden ser, buscar objetos (percepcion o utilizando un item), evitar caer en una trampa (percepcion o agilidad, o contitucion si se cae en la trampa pero se resiste el danio),
        o abrir puertas cerradas que van a conectar con lugares importantes del mapa, para esto se necesitan llaves o claves que se encuentran explorando, y se guardan como items en el inventario,
        tambien el jugador podría usar item + fuerza para romper la puerta o item + agilidad para intentar abrirla con ganzúa.
        3- las situaciones neutrales pueden ser que el jugador tenga una charla con un npc para empujar la narrativa de la historia, o encuentre alguna escena y sea narrada, si un enemigo no se genera en esta celda puede darse 
        que el jugador simplemente siga avanzando sin nada particular</p> 
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
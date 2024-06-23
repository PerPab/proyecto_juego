export let personaje = {
    nombre: "Nombre del personaje", // Atributo de tipo string
    fuerza: 10,                     // Atributo de tipo int
    agilidad: 8,                    // Atributo de tipo int
    percepcion: 7,                  // Atributo de tipo int
    constitucion: 9,                // Atributo de tipo int
    inventario: ["Espada", "Escudo", "Poción"], // Atributo de tipo array
    vida: 100
}



function abrirInventario(personaje) {
    const grillaItems = document.getElementById('grilla-items-inventario')
    personaje.inventario.forEach((element) => {
        const li = document.createElement('li');
        li.textContent = element;
        grillaItems.append(li)

    });
    document.getElementById('modal-inventario-jugador').showModal()
}

let btnInventario = document.getElementById('btn-abrir-inventario');
let btnCerrarInventario = document.getElementById('btn-cerrar-inventario');

btnInventario.addEventListener('click', () => {
    abrirInventario(personaje)
})

btnCerrarInventario.addEventListener('click', () => {
    const grillaItems = document.getElementById('grilla-items-inventario')
    grillaItems.innerHTML = ``
    document.getElementById('modal-inventario-jugador').close();
})
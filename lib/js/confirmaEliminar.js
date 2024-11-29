export function confirmaEliminar() {
 return confirm("Confirma la eliminación de este juego")
}

// Permite que los eventos de html usen la función.
window["confirmaEliminar"] = confirmaEliminar
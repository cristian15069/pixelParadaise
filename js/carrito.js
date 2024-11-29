
// Función para mostrar los artículos en el carrito
function mostrarCarrito() {
    // Obtener los artículos del carrito desde localStorage
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Mostrar los artículos en alguna sección de la página
    const carritoContainer = document.getElementById('carrito-container');
    carritoContainer.innerHTML = ''; // Limpiar el contenido anterior

    carrito.forEach((item, index) => {
        const itemHTML = `
            <div class="item-carrito">
                <span>${item.titulo}</span>
                <span>${item.precio}</span>
                <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
            </div>
        `;
        carritoContainer.innerHTML += itemHTML;
    });
}

// Función para eliminar un artículo del carrito
function eliminarDelCarrito(index) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
}

// Llamar a la función mostrarCarrito para mostrar los artículos al cargar la página
window.onload = function() {
    mostrarCarrito();
};
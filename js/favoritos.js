function agregarAFavoritos(event) {
  // Obtener la tarjeta padre del botón en el que se hizo clic
  const card = event.target.closest('.card');

  // Obtener los datos del libro de la tarjeta
  const titulo = card.dataset.titulo;
  const autor = card.dataset.autor;
  const isbn = card.dataset.isbn;
  const imagen = card.dataset.imagen;

  // Obtener la lista de favoritos del almacenamiento local
  const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

  // Verificar si el libro ya está en la lista de favoritos
  const existeEnFavoritos = favoritos.some(libro => libro.isbn === isbn);

  // Si el libro no está en la lista de favoritos, agregarlo
  if (!existeEnFavoritos) {
    favoritos.push({ titulo, autor, isbn, imagen });
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
    alert(`"${titulo}" se ha agregado a favoritos.`);
  } else {
    alert(`"${titulo}" ya está en favoritos.`);
  }
}

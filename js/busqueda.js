function search() {
  var query = document.getElementById('buscaInput').value.toLowerCase();
  var searchField = document.getElementById('campoBuscar').value; // Obtener el valor seleccionado del campo de búsqueda
  var books = document.querySelectorAll('.card'); // Seleccionar todos los elementos con la clase 'card' que representan libros

  books.forEach(function(book) {
    var content = book.dataset[searchField].toLowerCase(); // Obtener el contenido del campo de búsqueda específico del libro

    // Comprobar si la consulta coincide con el contenido del campo de búsqueda del libro al inicio del texto
    if (content.startsWith(query)) {
      book.style.display = 'block'; // Mostrar el libro si coincide con la búsqueda
    } else {
      book.style.display = 'none'; // Ocultar el libro si no coincide con la búsqueda
    }
  });

  var noResultados = document.getElementById('noResultados');
  var count = 0;
  books.forEach(function(book) {
    if (book.style.display !== 'none') {
      count++;
    }
  });

  if (count === 0) {
      noResultados.style.display = 'block';
  } else {
      noResultados.style.display = 'none';
  }
}

document.getElementById('buscaInput').addEventListener('input', search);
document.getElementById('campoBuscar').addEventListener('change', search);

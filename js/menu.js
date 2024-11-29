document.getElementById('botonBuscar').addEventListener('click',function(){menuBusqueda();});
document.getElementById('botonBuscar2').addEventListener('click', function() {menuBusqueda();});

function menuBusqueda() {
  var busqueda = document.querySelector('#menuBusqueda');
  var propiedad = busqueda.style.top;

  if ( propiedad === '-100%') {
    busqueda.style.top = '0'; 
    busqueda.style.position = 'fixed'; 
  } else {
    busqueda.style.top = '-100%';
    busqueda.style.position = 'absolute'; 

  }
}
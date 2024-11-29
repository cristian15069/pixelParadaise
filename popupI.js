
var btnAbrirPopupA = document.getElementById('btn-abrir-popupA'),
	overlayA = document.getElementById('overlayA'),
	popupA = document.getElementById('popupA'),
	btnCerrarPopupA = document.getElementById('btn-cerrar-popupA');

btnAbrirPopupA.addEventListener('click', function(){
	overlayA.classList.add('active');
	popupA.classList.add('active');
});

btnCerrarPopupA.addEventListener('click', function(e){
	e.preventDefault();
	overlayA.classList.remove('active');
	popupA.classList.remove('active');
});

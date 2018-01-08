$(document).ready( function(){
	console.log('documento listo!');
	/*
	*Escondiendo icono de menú
	*/
	$('.js-menu').hide();

	/*
	*asignando función a los botones recipe y make it
	*/
	$('.js-show-recipe').click(function(){
		$('.page').removeClass('make');
	})

	$('.js-show-make').click(function(){
		$('.page').addClass('make');
	})
});

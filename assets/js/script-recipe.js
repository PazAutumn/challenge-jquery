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
		/*
		*agregando y quitando la clase active
		*/
		$('.js-show-recipe').addClass('active');
		$('.js-show-make').removeClass('active');
		
	})

	$('.js-show-make').click(function(){
		$('.page').addClass('make');
		/*
		*agregando y quitando la clase active
		*/
		$('.js-show-make').addClass('active');
		$('.js-show-recipe').removeClass('active');
	})

	$('.js-back').click(function(){
		window.location.href = "index.html";
	})
});

/* *#06#
IMEI
351907072171847
*/
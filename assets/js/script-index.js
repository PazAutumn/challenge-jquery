$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
	/*
	*Escondiendo icono de la flecha
	*/
	$('.js-back').hide();
	/*
	*Llamando a la función printNews
	*/
	printNews();
	/*
	*Llamando a la función renderActivities
	*/

	renderActivities(activities);
	console.log(renderActivities);

});
/*
*Asignando el texto nuevas recetas al párrafo
*/
function printNews () {
	$('.callout-news').find('p').text('NUEVAS RECETAS');
}

/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);
	/*
	*Recorrer variable recipesArray
	*/
	for (var i = 0; i < recipesArray.length; i++){
		if(recipesArray[i].highlighted === true){
			renderRecipe(recipesArray[i]);
		}
	}
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);
	$('.list-recipes').append('<a class="item-recipe" href="#"><span class="attribution">' +
		'<span class="title-recipe">'+ recipe.title +'</span><span class="metadata-recipe">' +
		'<span class="author-recipe">'+ recipe.source.name + '</span>' +
		'<span class="bookmarks-recipe"><span class="icon-bookmark"></span></span></span></span>' +
		'<img src="assets/img/recipes/640x480/'+ recipe.name +'.jpg" /></a>');
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
	for(var i = 0; i < activitiesArray.length; i++){
		renderActivity(activitiesArray[i]);
	}
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	/* El if no es necesario para validar ya que si recipe estuviese vacío 
	*la función render Activity no se ejecutaría
	*if (recipe.length > 0){
	*	$('.wrapper-message').hide();
	*}
	*/
	$('.wrapper-message').hide();
	$('.list-activities').append(
		'<a href="#" class="item-activity"><span class="attribution"><span class="avatar">' +
		'<img src="'+ recipe.userAvatar +'" class="image-avatar">' +
		'</span><span class="meta"><span class="author">' + recipe.userName +
		'</span> made <span class="recipe">'+ recipe.recipeName +'</span>' +
		':'+ recipe.text +'<span class="location"> &mdash;'+ 
		recipe.place +'</span></span></span><div class="bg-image"'+
		'style="background-image: url('+ recipe.image +');"></div></a>');
}



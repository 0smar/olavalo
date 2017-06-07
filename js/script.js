$( document ).ready(function() {
    $('.overlay').height($('.overlay').width());
    $('.recipe-image').height($('.recipe-image').width());
    $('.color-square').height($('.color-square').width());

});

/* Open when someone clicks on the span element */
function openNav() {
	console.log("open");
    $("#myNav").width("100%");
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    $("#myNav").width("0%");
}
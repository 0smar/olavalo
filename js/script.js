$( document ).ready(function() {
    $('.overlay').height($('.overlay').width());
    $('.recipe-image').height($('.recipe-image').width());
    $('.color-square').height($('.color-square').width());
    $('.color-square-img').height($('.color-square-img').width());

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

window.sr = ScrollReveal();
sr.reveal('.from-bottom', { duration: 1200 });
sr.reveal('.desc-from-bottom', { duration: 1200 }, 350 );
sr.reveal('.recipe-from-bottom', { duration: 700 }, 250 );
sr.reveal('.step-from-bottom', { duration: 1200 }, 350 );
sr.reveal('.step-from-left', { origin: 'left', duration: 1800, distance: '100px' }, 550 );
sr.reveal('.square-from-left', { origin: 'left', duration: 1800, distance: '100px' }, 350 );
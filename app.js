$(window).scroll(function(){

	var posizione = $(window).scrollTop();
	$("html").toggleClass("scrolled",posizione > 130);

});


$("article").hover(function(){
	$(this).addClass('on');
}, function(){
	$(this).removeClass('on');

});
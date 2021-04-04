const burger = document.querySelector('.header__burger'),
	menu = document.querySelector('.header__menu'),
	close = document.querySelector('.header__menu-overlay');

burger.addEventListener('click', () => {
	menu.classList.add('active')
});

close.addEventListener('click', () => {
	menu.classList.remove('active')
}); 

$(document).ready(function(){
	$('.company__carucel').slick({
		
	});
  });

$(document).ready(function(){
	$('.team__carucel').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		adaptiveHight: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="../icons/prev-arrow.png"></button>',
	  });
  });
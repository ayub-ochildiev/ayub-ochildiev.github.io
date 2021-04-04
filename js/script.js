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
		autoplay: true,
		autoplaySpeed: 1500,
		prevArrow: '<button type="button" class="slick-prev"><img src="icons/left-arrow.png"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="icons/right-arrow.png"></button>',
	});
  });

$(document).ready(function(){
	$('.team__carucel').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		adaptiveHight: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="icons/left-arrow.png"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="icons/right-arrow.png"></button>',
	  });
  });
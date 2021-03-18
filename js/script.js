const burger = document.querySelector('.header__burger'),
	menu = document.querySelector('.menu'),
	close = document.querySelector('.menu__overlay');

burger.addEventListener('click', () => {
	menu.classList.add('active')
});

close.addEventListener('click', () => {
	menu.classList.remove('active')
}); 
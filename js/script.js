'use strict';
//Инпут паттерн
let nameInput = document.querySelector('#name');
let emailInput = document.querySelector('#email');
let labels = document.querySelectorAll('.label');
nameInput.addEventListener('input', () => checkInput(nameInput, '0'));
emailInput.addEventListener('blur', () => checkInput(emailInput, '1'));

function checkInput(input, index) {
	if (input.validity.valid === false) {
		return labels[index].innerHTML = "Недопустимый формат";
	} else {
		return labels[index].innerHTML = "";
	}
}

//Форма поиска
let search = document.querySelector('.header__search');
let searchForm = document.querySelector('.search-form');
let searchCloseBtn = document.querySelector('.search-form__btn');
search.addEventListener('click', function () {
	searchForm.classList.toggle('active_search');
});
searchCloseBtn.addEventListener('click', function () {
	if (searchForm.classList.contains('active_search')) {
		searchForm.classList.remove('active_search');
	}
});

//Слайдер
let swiperWrapper = document.querySelector('.cardsblock__cards');
let swiperSlide = document.querySelector('.swiper-slide');

let swiperSettings = {
	//Стрелки
	navigation: {
		nextEl: '.cardsblock__next',
		prevEl: '.cardsblock__prev',
	},
	pagination: {
		el: '.cardsblock__pagination',
		type: 'fraction',
		renderFraction: function (currentClass, totalClass) {
			return '<span class = ' + currentClass + ' ></span> ' + ' из ' + ' <span class =  ' + totalClass + '></span > ';
		},
	},
	//Отображение слайдов
	slidesPerView: 1,
	centeredSlides: true,
	//Отступы между слайдами
	spaceBetween: 10,
	loop: true,
	loopedSlides: 2,
	breakpoints: {
		900.98: {
			spaceBetween: 30,
			slidesPerView: 3,
		},
		767.98: {
			spaceBetween: 10,
			slidesPerView: 2,
		},
		0: {
			pagination: {
				el: '.cardsblock__pagination',
				type: 'bullets',
			},
		}
	}
}
let swiper = new Swiper('.cardsblock__body', swiperSettings);
window.addEventListener('resize', function (event) {
	swiper.destroy();
	swiper = new Swiper('.cardsblock__body', swiperSettings);
});

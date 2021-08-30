
//  ABOUT
$(document).ready(function () {
	$('.about__text--toggle').click(function () {
		$('.about__text--hide').slideToggle(700);
		return false;
	});
});

// WORKS

let swiper = new Swiper('.swiper1', {
	effect: 'flip',
	grabCursor: true,
	loop: true,
	pagination: {
		el: '.swiper-pagination1',
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});


//   OUR TEAM

let swiper2 = new Swiper('.swiper2', {
	effect: 'coverflow',
	grabCursor: true,
	loop: true,
	centeredSlides: true,
	slidesPerView: 'auto',
	coverflowEffect: {
		rotate: 50,
		stretch: 0,
		loop: true,
		depth: 100,
		modifier: 3,
		slideShadows: true,
	},
	pagination: {
		el: '.swiper-pagination2',
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});


//   BUTTON MODAL  

let elements = $('.modal-overlay, .modal');

$('button').click(function () {
	elements.addClass('active');
});

$('.close-modal').click(function () {
	elements.removeClass('active');
});

//   slick слайдер

//   $('.swiper-contain').slick({
// 	cssEase: 'linear',
// 	slidesToShow: 1,
// 	// slidesToScroll: 1,
// 	autoplay: true,
// });



//   let modal = $modal();
//   document.querySelector('#show-modal').addEventListener('click', function(e) {
//   modal.show();
//   });
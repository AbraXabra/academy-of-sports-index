// Открывашка меню
$('.lp__top-menu-icon').click(function(){
	$('.lp__menu-mobile-bg').css("display", "block");
	return false;
});
$('.lp__menu-mobile-close').click(function(){
	$('.lp__menu-mobile-bg').css("display", "none");
	return false;
});

// Слайдер видов спорта
$(".lp__ss").slick({
	prevArrow: "<div class='lp__sports-slider-prev'></div>",
	nextArrow: "<div class='lp__sports-slider-next'></div>",
	slidesToShow: 5,
	infinite: true,
	centerMode: true,
	centerPadding: '0',
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				centerMode: true,
				centerPadding: '0'
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1
			}
		}
	]
});

// Слайдер спонсоров
$(".lp__sponsor-slider").slick({
	prevArrow: "<div class='lp__sponsor-slider-prev'></div>",
	nextArrow: "<div class='lp__sponsor-slider-next'></div>",
	slidesToShow: 6,
	rows: 1,
	responsive: [
		{
			breakpoint: 1600,
			settings: {
				slidesToShow: 5,
				rows: 1
			}
		},
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 4,
				rows: 1
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				rows: 3
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				rows: 3
			}
		}
	]
});

// Галочка в меню
$(document).ready(function(){	
	$('.lp__menu-drop').click(function(){
		$(this).toggleClass('js-drop');
	});
});

// Слайдер видов спорта 2
$(".lp__ts").slick({
	prevArrow: "<div class='lp__sports-slider-prev'></div>",
	nextArrow: "<div class='lp__sports-slider-next'></div>",
	slidesToShow: 3,
	infinite: true,
	centerMode: true,
	centerPadding: '0',
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				centerMode: true,
				centerPadding: '0'
			}
		},
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1
			}
		}
	]
});

// Слайдер системы
$(".lp__lab-slider").slick({
	prevArrow: "<div class='lp__lab-slider-prev'></div>",
	nextArrow: "<div class='lp__lab-slider-next'></div>",
	slidesToShow: 2,
	rows: 2,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2,
				rows: 1
			}
		},
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
				rows: 1
			}
		}
	]
});

// Слайдер тарифов
$(".lp__price-slider").slick({
	prevArrow: "<div class='lp__price-slider-prev'></div>",
	nextArrow: "<div class='lp__price-slider-next'></div>",
	slidesToShow: 3,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1
			}
		}
	]
});

// Слайдер проблем
$(".lp__problem-slider").slick({
	prevArrow: "<div class='lp__problem-slider-prev'></div>",
	nextArrow: "<div class='lp__problem-slider-next'></div>",
	slidesToShow: 4,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1
			}
		}
	]
});
$(document).ready(function(){

	"use strict";
	
    // CAROUSEL BANNER
    $(".carousel-sliders").owlCarousel({
		animateOut: 'fadeOut',
    	animateIn: 'flipInX',
	    loop: true,
	    autoplay: true,
        autoplayTimeout: 5000,
	    nav: true,
	    dots: false,
	    navContainer: '.banner .custom-nav',
	    items: 1,
	});

	// CAROUSEL TESTIMONIALS
	$(".carousel-testimonials").owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		items: 1
	});
});

window.onscroll = function() {toggleMenu()};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop + navbar.offsetHeight;

function toggleMenu() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("fixed")
  } else {
    navbar.classList.remove("fixed");
  }
}
// printing
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
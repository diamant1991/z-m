
$(document).ready(function() {

  var owl = $(".objects-carousel");
  owl.owlCarousel({
      items : 3,
      itemsDesktop : [991,2],
      itemsDesktopSmall : [767,1]
  });
	  // Custom Navigation Events
	  $(".next").click(function(){
	    owl.trigger('owl.next');
	  })
	  $(".prev").click(function(){
	    owl.trigger('owl.prev');
	  })

	  $(".nav-menu a,.scroll-btn").click(function () {
	    elementClick = $(this).attr("href")
	    destination = $(elementClick).offset().top - 60;
	    $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
	    return false;
	  });
});

if (document.documentElement.clientWidth > 991) {
	new WOW().init();
	(function(){
	"use strict";

	  var parallax = document.querySelectorAll(".parallax"),
	      speed = -0.15;

	  window.onscroll = function(){
	    [].slice.call(parallax).forEach(function(el,i){

	      var windowYOffset = window.pageYOffset,
	          elBackgrounPos = "0 " + (windowYOffset * speed) + "px";
	      
	      el.style.backgroundPosition = elBackgrounPos;

	    });
	  };

	})();
}

jQuery(document).ready(function($){
	$('.countdown').dsCountDown({
		endDate: new Date("april 25, 2016 23:59:00"),
		titleHours: 'часов', 
		titleMinutes: 'мин', 
		titleSeconds: 'секунд',
		titleDays: 'дней'
	});
	$('.countdown2').dsCountDown({
		endDate: new Date("april 25, 2016 23:59:00"),
		titleHours: 'часов', 
		titleMinutes: 'мин', 
		titleSeconds: 'секунд',
		titleDays: 'дней'
	});
})
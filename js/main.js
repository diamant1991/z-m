
$(document).ready(function() {

  var owl = $(".objects-carousel");
  owl.owlCarousel({
      items : 3,
      itemsDesktop: [991,3],
      itemsDesktopSmall : [767,2]
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

$(function() {
    //scrollpane parts
    var scrollPane = $( ".scroll-pane" ),
      scrollContent = $( ".scroll-content" );
 
    //build slider
    var scrollbar = $( ".scroll-bar" ).slider({
      slide: function( event, ui ) {
        if ( scrollContent.width() > scrollPane.width() ) {
          scrollContent.css( "margin-left", Math.round(
            ui.value / 100 * ( scrollPane.width() - scrollContent.width() )
          ) + "px" );
        } else {
          scrollContent.css( "margin-left", 0 );
        }
      }
    });
 
    //append icon to handle
    var handleHelper = scrollbar.find( ".ui-slider-handle" )
    .mousedown(function() {
      scrollbar.width( handleHelper.width() );
    })
    .mouseup(function() {
      scrollbar.width( "100%" );
    })
    .append( "<span class='ui-icon ui-icon-grip-dotted-vertical'></span>" )
    .wrap( "<div class='ui-handle-helper-parent'></div>" ).parent();
 
    //change overflow to hidden now that slider handles the scrolling
    scrollPane.css( "overflow", "hidden" );
 
    //reset slider value based on scroll content position
    function resetValue() {
      var remainder = scrollPane.width() - scrollContent.width();
      var leftVal = scrollContent.css( "margin-left" ) === "auto" ? 0 :
        parseInt( scrollContent.css( "margin-left" ) );
      var percentage = Math.round( leftVal / remainder * 100 );
      scrollbar.slider( "value", percentage );
    }
 
    //if the slider is 100% and window gets larger, reveal content
    function reflowContent() {
        var showing = scrollContent.width() + parseInt( scrollContent.css( "margin-left" ), 10 );
        var gap = scrollPane.width() - showing;
        if ( gap > 0 ) {
          scrollContent.css( "margin-left", parseInt( scrollContent.css( "margin-left" ), 10 ) + gap );
        }
    }
 
    //change handle position on window resize
    $( window ).resize(function() {
      resetValue();
      reflowContent();
    });
  });
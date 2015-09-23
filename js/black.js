
// jQuery navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature -jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
  
  //feature -jQuery WAYPOINS: $('#about').addClass('fade');
  
  $('#katie').waypoint(function() {
    $('#katie').addClass('bounceInUp');
	 }, { offset: '50%' });
  
});
 //MASONRY: $('.grid')
  

$(function(){
 
    var $container = $('#container');
   
    $container.imagesLoaded( function(){
      $container.masonry({
        itemSelector : '.masonryImage'
      });
    });
   
  });
  
// You can avoid the document.ready if you put the script at the bottom of the page
$(document).ready(function() {
  // Bind to the click of all links with a #hash in the href
  $('a[href^="#"]').click(function(e) {
    // Prevent the jump and the #hash from appearing on the address bar
    e.preventDefault();
    // Scroll the window, stop any previous animation, stop on user manual scroll
    // Check https://github.com/flesler/jquery.scrollTo for more customizability
    console.log(this.hash);
    $(window).stop(true).scrollTo(this.hash, {duration:1000, interrupt:true,easing:'easeInBack'});
  });
});



$.scrollify({
        section : "section",
        sectionName : "section-name",
        easing: "easeOutExpo",
        scrollSpeed: 1100,
        offset : 0,
        scrollbars: true,
        before:function() {},
        after:function() {},
        afterResize:function() {}
    });
	
	$(document).ready(function() {

  var owl = $("#owl-demo"),
      status = $("#owlStatus");

  owl.owlCarousel({
    navigation : true,
    afterAction : afterAction
  });

  function updateResult(pos,value){
    status.find(pos).find(".result").text(value);
  }

  function afterAction(){
    updateResult(".owlItems", this.owl.owlItems.length);
    updateResult(".currentItem", this.owl.currentItem);
    updateResult(".prevItem", this.prevItem);
    updateResult(".visibleItems", this.owl.visibleItems);
    updateResult(".dragDirection", this.owl.dragDirection);
  }

  /*
  All owl object information listed below:

  base.owl = {
    "userOptions" : base.userOptions,
    "baseElement" : base.$elem,   
    "userItems"   : base.$userItems,
    "owlItems"    : base.$owlItems,
    "currentItem" : base.currentItem,
    "prevItem"    : base.prevItem,
    "visibleItems": base.visibleItems,
    "isTouch"     : base.browser.isTouch,
    "browser"     : base.browser,
    "dragDirection": base.dragDirection
  }
  */


  
});


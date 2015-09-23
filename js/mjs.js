// JavaScript Document
$( function() {

  // initialize Masonry
  var $container = $('#container').masonry();
  // layout Masonry again after all images have loaded
  $container.imagesLoaded( function() {
    $container.masonry();
  });
  
});
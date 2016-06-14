(function(module) {
  var view = {};

  view.slideUp = function() {
    $('.video-container , #see-work').on('click', function(e){
      console.log('clicked!');
      $('#slideUp').slideUp(1000, function() {
        console.log('hi!');
      });
      // $('.video-container').toggleClass('video-container-hide');
      // $('.homepage-hero-module').toggleClass('homepage-hero-white');
      // $('.homepage-hero-module').removeClass('homepage-hero-module');
    });
  };


  view.slideUp();


  view.module = view;
})(window);

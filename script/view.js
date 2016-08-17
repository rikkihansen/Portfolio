(function(module) {
  var view = {};


  view.slideUp = function() {
    $('.row').hide();
    $('.video-container , #see-work').on('click', function(e){
      console.log('clicked!');
      $('#slideUp').slideUp(1000, function() {
        view.nextPage();
        console.log('hi!');
      });
    });
  };

  // view.nextPage = function() {
  //   $('.homepage-hero-module').hide();
  //   $('.row').show();
  // };


  view.slideUp();


  view.module = view;
})(window);

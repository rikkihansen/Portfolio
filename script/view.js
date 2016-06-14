(function(module) {
  var view = {};


  view.slideUp = function() {
    $('#page2').hide();
    $('.video-container , #see-work').on('click', function(e){
      console.log('clicked!');
      $('#slideUp').slideUp(1000, function() {
        view.nextPage();
        console.log('hi!');
      });
    });
  };

  view.nextPage = function() {
    $('.homepage-hero-module').hide();
    $('#page2').show();

  };


  view.slideUp();


  view.module = view;
})(window);

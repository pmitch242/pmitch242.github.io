$(document).ready(function () {

  // Bootstrappopover function
  $(function () {
    $('[data-toggle="popover"]').popover()
  });

  $('.popover-dismiss').popover({
    trigger: 'focus'
  })
  
  // Smooth Scroll for all browsers
  $(".navbar a").on('click', function (event) {
    if (this.hash !== '') {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate({
        scrollTop: $(hash).offset().top
      },
        700);
    }
  });

});
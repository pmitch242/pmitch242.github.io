$(document).ready(function () {

  $(function () {
    $('[data-toggle="popover"]').popover()
  });

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
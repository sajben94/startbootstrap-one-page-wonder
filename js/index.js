(function ($) {

    var navbar = $('.navbar-nav');
    var navLink = navbar.find('a');
    var menu = $('.navbar-brand');
    navLink.on('click',function (event) {
      $('html,body').animate({ scrollTop: $(this.hash).offset().top-80},1000);
      event.preventDefault();
    });

    menu.on('click',function (event) {
      $('html,body').animate({ scrollTop: $(this.hash).offset().top-170},1000);
      event.preventDefault();
    })

})(jQuery);

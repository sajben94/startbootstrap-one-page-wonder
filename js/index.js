(function ($) {

    var navbar = $('.navbar-nav');
    var navLink = navbar.find('a');
    var menu = $('.navbar-brand');
    navLink.on('click',function (event) {
      var id=this.hash;
      $('body').animate({ scrollTop: $(this.hash).offset().top-80},1000,"easeOutCirc",function () {
          // window.location.hash= id;
      });
      event.preventDefault();

    });

    menu.on('click',function (event) {
      $(' body').animate({ scrollTop: 0});
      event.preventDefault();
    })

})(jQuery);

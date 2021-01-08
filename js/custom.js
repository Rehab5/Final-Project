//Button up
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 1000) {
      $(".up").fadeIn(1000);
    } else {
      $(".up").fadeOut(1000);
    }
  });

  $(".up").on("click", function () {
    $("html,body").animate({
      scrollTop:0
    });
  });

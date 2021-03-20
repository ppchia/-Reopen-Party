$(window).mousemove(function (evt) {
  var pagex = evt.pageX;
  var pagey = evt.pageY;

  var x = pagex - $("#section_about").offset().left;
  var y = pagey - $("#section_about").offset().top;

  $(".mountain").css("transform", "translateX(" + (pagex / -20 + 50) + "px)");

  $(".h6").css("transform", "translateX(" + x / -17 + "px)");
  $(".b22").css("transform", "translateX(" + x / -25 + "px)");
  $(".eb").css("transform", "translateX(" + x / -25 + "px)");
  $(".ea").css("transform", "translateX(" + x / -25 + "px)");
  $(".ab").css("transform", "translateX(" + x / -40 + "px)");
});

// ---------

$(document).ready(function () {
  $(function () {
    $("#invite").click(function () {
      $("html,body").animate(
        { scrollTop: $("#section_about").offset().top },
        500
      );
    });
  });
});

$(document).ready(function () {
  $(function () {
    $("#b1").click(function () {
      $("html,body").animate(
        { scrollTop: $("#section_BIRD").offset().top },
        500
      );
    });
  });
});

$(document).ready(function () {
  $(function () {
    $("#b2").click(function () {
      $("html,body").animate(
        { scrollTop: $("#section_ORCHID").offset().top },
        500
      );
    });
  });
});

$(document).ready(function () {
  $(function () {
    $("#b3").click(function () {
      $("html,body").animate(
        { scrollTop: $("#section_LILY").offset().top },
        500
      );
    });
  });
});

$(document).ready(function () {
  $(function () {
    $("#b4").click(function () {
      $("html,body").animate(
        { scrollTop: $("#section_ANTHURIUM").offset().top },
        500
      );
    });
  });
});

// -----------------
var s = skrollr.init();
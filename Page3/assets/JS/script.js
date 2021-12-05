$(document).ready(function () {
  // open close menu side
  $(".menuIcon i").click(function () {
    $(".menu").addClass("active");
  });
  $(".close i").click(function () {
    $(".menu").removeClass("active");
  });

  //dropdown slide
  $(function () {
    $(".nav-links li").hover(
      function () {
        $(">ul.sub:not(:animated)", this).slideDown(350);
      },
      function () {
        $(">ul.sub", this).slideUp(70);
      }
    );
  });

  //dropdown icon rotate
  $(".menu-links .sub").hide();
  $(".mlist").click(function () {
    $(this).find(".rightIcn").toggleClass("ndeg udeg");
    $(this).next(".sub").slideToggle(200);
  });

  //accordion
  $(".accordion .first .heading").click(function () {
    $(".accordion .first .content").not($(this).next()).slideUp();
    $(this).next().slideToggle();
  });

  $(".accordion .second .heading").click(function () {
    $(".accordion .second .content").not($(this).next()).slideUp();
    $(this).next().slideToggle();
  });

  $(".accordionSec .first .heading").click(function () {
    $(".accordionSec .first .content").not($(this).next()).slideUp();
    $(this).next().slideToggle();
  });

  $(".accordionSec .second .heading").click(function () {
    $(".accordionSec .second .content").not($(this).next()).slideUp();
    $(this).next().slideToggle();
  });
  // active row
});

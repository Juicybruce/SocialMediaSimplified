$(document).ready(function(){
  console.log('hello world');

  $(".header__menu").click(function() {
    $(".header__menu").toggleClass(" active");
    $(".header__sidebar").toggleClass(" active");
  });

  //first screen buttons
  $(".first-screen__contact").hover(function() {
    $(this).toggleClass(" active");
  })

  $(".first-screen__arrowButton").hover(function() {
    $(this).toggleClass(" active");
  })

  $(".first-screen__arrowButton").click(function() {
    $([document.documentElement, document.body]).animate({
      scrollTop: $(".second-section").offset().top
    }, 1000);
  });

  $(".first-screen__learn").hover(function() {
    $(this).toggleClass(" active");
  })

  //fourth section arrow
  $(".fourth-section__arrowButton").hover(function() {
    $(this).toggleClass(" active");
  })

  $(".fourth-section__arrowButton").click(function() {
    $([document.documentElement, document.body]).animate({
      scrollTop: $(".fifth-section").offset().top
    }, 1000);
  });

  //project navigation button
  $(".third-section__seeMore").hover(function() {
    $(this).toggleClass(" active");
  })

  //sixth screen link button
  $(".sixth-section__learn").hover(function() {
    $(this).toggleClass(" active");
  })

  //testimonials quotes slider
  $(".testimonials__quotesContainer").slick({
    dots: false,
    mobileFirst: true,
    prevArrow: ".testimonials__arrow-left",
    nextArrow: ".testimonials__arrow-right"
  })


  //contact form functionality
  $(".contact__submitButton").hover(function() {
    $(this).toggleClass(" active");
  })

  $(".contact__submitButton").hover(function() {
    $(this).toggleClass(" active");
  })

  //removes the active styling from the selected buttons and clears inputs
  $(".contact__submitButton").click(function() {
    $(".contact__button").removeClass(" active");
    $(".contact__nameInput input").val('');
  })
})
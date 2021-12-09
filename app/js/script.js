console.log('hello world');

$(".header__menu").click(function() {
  $(".header__menu").toggleClass(" active");
  $(".header__sidebar").toggleClass(" active");
});

//first screen buttons
$(".firstScreen__contact").hover(function() {
  $(this).toggleClass(" active");
})

$(".firstScreen__arrowButton").hover(function() {
  $(this).toggleClass(" active");
})

$(".firstScreen__arrowButton").click(function() {
  $([document.documentElement, document.body]).animate({
    scrollTop: $(".secondSection").offset().top
  }, 1000);
});

$(".firstScreen__learn").hover(function() {
  $(this).toggleClass(" active");
})

//fourth section arrow
$(".fourthSection__arrowButton").hover(function() {
  $(this).toggleClass(" active");
})

$(".fourthSection__arrowButton").click(function() {
  $([document.documentElement, document.body]).animate({
    scrollTop: $(".fifthSection").offset().top
  }, 1000);
});

//project navigation button
$(".thirdSection__seeMore").hover(function() {
  $(this).toggleClass(" active");
})

//sixth screen link button
$(".sixthSection__learn").hover(function() {
  $(this).toggleClass(" active");
})

//testimonials quotes slider
$(".testimonials__arrowLeft").click(function() {
  $(".testimonials__quotesContainer ul").animate({left: '-100%'}, 500);
})

/*$(".testimonials__arrowLeft").click(function() {
  $(".testimonials__quotesContainer ul").animate({left: '+100%'}, 500);
})
*/
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
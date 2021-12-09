console.log('hello world');

$(".header__menu").click(function() {
  console.log('clicked on menu button')
  $(".header__menu").toggleClass(" active");
  $(".header__sidebar").toggleClass(" active");
});
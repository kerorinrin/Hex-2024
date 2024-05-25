$(function(){

$('.btn').click(function(){
  $('.menu').toggleClass('close');
  $('.closure').toggleClass('close');
  $('nav ul').toggleClass('close');
  $('.overlay').toggleClass('close');
})

$('.overlay').click(function(){
  $('.menu').toggleClass('close');
  $('.closure').toggleClass('close');
  $('nav ul').toggleClass('close');
  $('.overlay').toggleClass('close');
})

$('.navHover').hover(function () {
    // over
    $(this).addClass('showQoute');
  }, function () {
    // out
    $(this).removeClass('showQoute');
  }
);


});


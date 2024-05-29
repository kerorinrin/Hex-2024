$(function(){

  //　 ☆　Mobile Nav menu open&close effect 
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


//  ☆　header nav a hovering effect
$('.navHover').hover(function () {
    // over
    $(this).addClass('showQoute');
  }, function () {
    // out
    $(this).removeClass('showQoute');
  }
)


//  ☆　footer button hover effect(svg color change)
$('#footerBtn1').hover(function () {
  // mouse enter
  $('#footerSvg1').find('path').attr('fill','#fff');
}, function () {
  // out
  $('#footerSvg1').find('path').attr('fill','#5b5b5b');
}
)
$('#footerBtn2').hover(function () {
  // mouse enter
  $('#footerSvg2').find('path').attr('fill','#fff');
}, function () {
  // out
  $('#footerSvg2').find('path').attr('fill','#5b5b5b');
}
)
$('#footerBtn3').hover(function () {
  // mouse enter
  $('#footerSvg3').find('path').attr('fill','#fff');
}, function () {
  // out
  $('#footerSvg3').find('path').attr('fill','#5b5b5b');
}
)





});


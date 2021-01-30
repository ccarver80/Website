$( document ).ready(function() {

  //Slide in Animations

  $('#profile').hide().delay(1000).slideDown();

  $('#name').hide().delay(2000).slideDown();

  $('#toolbox').hide().delay(3000).slideDown();


  //Hover Animations

  $('.hover').hover(function() {
    $('.text').css('display', 'block');
  }, function() {
    $('.text').css('display', 'none');
  });

  $('.hover1').hover(function() {
    $('.text1').css('display', 'block');
  }, function() {
    $('.text1').css('display', 'none');
  });

  $('.hover2').hover(function() {
    $('.text2').css('display', 'block');
  }, function() {
    $('.text2').css('display', 'none');
  });

  $('.hover3').hover(function() {
    $('.text3').css('display', 'block');
  }, function() {
    $('.text3').css('display', 'none');
  });

  $('.hover4').hover(function() {
    $('.text4').css('display', 'block');
  }, function() {
    $('.text4').css('display', 'none');
  });
});

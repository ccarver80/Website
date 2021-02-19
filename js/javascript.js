$( document ).ready(function() {

  //Slide in Animations

  $('#profile').hide().delay(1000).slideDown(500);

  $('#name').hide().delay(1500).slideDown(500);

  $('#toolbox').hide().delay(2000).slideDown(500);

  $('#projects').hide().delay(2500).slideDown(500);

  $('#cert').hide().delay(3000).slideDown(500);


  //Hover Animations

  $('.hover').hover(function() {
    $('.text').css('display', 'block');
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

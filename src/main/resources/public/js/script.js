$(document).ready(function () {
  $('a.button').click(function () {
  if ($(this).hasClass('clicked')) {
    $(this).removeClass('clicked');
    $(this).find('span.number').html(parseInt($(this).find('span.number').html()) - 1);
    $(this).find('span.label').html('Like');
  }
  else {
    $(this).addClass("clicked");$(this).find('span.number').html(parseInt($(this).find('span.number').html()) + 1);
    $(this).find('span.label').html('Dislike');
  }
});
});
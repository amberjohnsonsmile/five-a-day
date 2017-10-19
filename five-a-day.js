// Five-a-day fruit and vegetable counter using JavaScript and jQuery
// Initial setup: whiteboard with counter on side

$(document).ready(function() {
  var total = 0;
  $('#button').click(function() {
    var toAdd = $('input[name=serving]').val();
    $('.list').append('<li class="item">' + toAdd + '</li>');
    total++;
    $('#total-number').remove();
    $('.total').append('<h3 id="total-number">' + total + '</h3>');
  });
  $('input').focus(function () {
    $(this).addClass('green-border');
  });
});

// Change mouse to "clickable" when hovering over button

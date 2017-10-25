// Five-a-day fruit and vegetable counter using JavaScript and jQuery
// Initial setup: whiteboard with counter on side

// Get today's date and format it
var today = new Date();
var dd = today.getDate();
// January is 0
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();

if (dd < 10) {
  dd = '0' + dd;
}

if (mm < 10) {
  mm = '0' + mm;
}

today = mm + '/' + dd + '/' + yyyy;

$(document).ready(function() {
  // Add today's date below h1
  $('header').prepend('<p class="date">' + today + '</p>');
  $('input').focus(function () {
    $(this).addClass('green-border');
  });
  var total = 0;
  $('#button').click(function() {
    // Add input to list and clear input field
    var toAdd = $('input[name=serving]').val();
    $('.list').append('<li class="item">' + toAdd + '</li>');
    $('input').val('');
    // Increase total and display it
    total++;
    $('#total-number').remove();
    $('.total').append('<h3 id="total-number">' + total + '</h3>');
    if (total === 5) {
      $('.enter').append('<h2>Congrats, you got your five-a-day!</h2>');
    }
  });
  // Also run code if enter key is pressed
  $('input').keypress(function(e) {
    if (e.which == 13) {
      $('#button').click();
      e.preventDefault();
    }
  });
});

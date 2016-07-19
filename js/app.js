$(document).foundation();

$(document).ready(function () {
  $('#codeinput').keyup(function (e) {
    if (e.which === 13) {
      if ($('#codeinput').val() === 'chopstix') {
        alert('You did it!');
      }
    }
  });
});

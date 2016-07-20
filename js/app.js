$(document).foundation();

$(document).ready(function () {
  const input = $('#codeinput');
  input.keyup(function (e) {
    if (e.which === 13) {
      if (md5(input.val()) === '084e0343a0486ff05530df6c705c8bb4') {
        document.location.href = '/accepted.html?pword=' + input.val();
      } else {
        input.css('border-color', '#b50000');
      }
    }
  });
});

$(document).foundation();

$(document).ready(function () {
  if (md5($(location).attr('search')) !== '2ebdd74065898aec30602f4ca1cad2fa') {
    document.location.href = '/index.html';
  }
});

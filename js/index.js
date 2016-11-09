function ready(fn) {
  if (document.readyState !== 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function() {
  const booking = document.querySelector('#booking');
  booking.addEventListener('click', function() {
    booking.style.display = 'none';
    document.querySelector('#email').style.display = 'block';
  }, false);
});

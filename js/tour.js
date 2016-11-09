function ready(fn) {
  if (document.readyState !== 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function() {
  const shows = [
    {
      venue: ['Funhouse*', 'http://www.funhousepub.com/'],
      city: ['Bethlehem', 'https://www.bethlehem-pa.gov/'],
      state: ['PA', 'http://www.pa.gov/'],
      date: '11/14',
    },
    {
      venue: ['Godfrey Daniels*', 'http://www.godfreydaniels.org/home.aspx'],
      city: ['Bethlehem', 'https://www.bethlehem-pa.gov/'],
      state: ['PA', 'http://www.pa.gov/'],
      date: '11/20',
    },
    {
      venue: ['Bethlehem Area Public Library*', 'http://www.bapl.org/'],
      city: ['Bethlehem', 'https://www.bethlehem-pa.gov/'],
      state: ['PA', 'http://www.pa.gov/'],
      date: '11/14',
    },
  ];

  const list = document.querySelector('#tour-dates-list');
  shows.forEach(function(show) {
    const li = document.createElement('li');
    li.appendChild(document.createElement('li'));
    li.innerHTML = '<a href="' + show['venue'][1] + '"><div class="col-xs-5 tour-dates">' + show['venue'][0] + '</div></a>' +
      '<a href="' + show['city'][1] + '"><div class="col-xs-4 tour-dates text-right">' + show['city'][0] + '</div></a>' +
      '<a href="' + show['state'][1] + '"><div class="col-xs-1 tour-dates">' + show['state'][0] + '</div></a>' +
      '<div class="col-xs-2 tour-dates">' + show['date'] + '</div>';
    list.appendChild(li);
  });
});

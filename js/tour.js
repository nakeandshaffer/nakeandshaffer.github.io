function ready(fn) {
  if (document.readyState !== 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

const shows = [
  {
    id: 'funhouse111416',
    venue: ['Funhouse*', 'http://www.funhousepub.com/'],
    city: ['Bethlehem', 'https://www.bethlehem-pa.gov/'],
    state: ['PA', 'http://www.pa.gov/'],
    date: '11/14',
    played: true,
    setlist: [
      {
        song: 'meteorite too',
        original: true,
        link: '#',
      },
      {
        song: 'angel space',
        original: true,
        link: '#',
      },
      {
        song: 'Chataeu Lobby #4',
        original: false,
        link: '#',
      },
    ]
  },
  {
    venue: ['Godfrey Daniels*', 'http://www.godfreydaniels.org/home.aspx'],
    city: ['Bethlehem', 'https://www.bethlehem-pa.gov/'],
    state: ['PA', 'http://www.pa.gov/'],
    date: '11/20',
    played: false,
  },
  {
    venue: ['Bethlehem Area Public Library*', 'http://www.bapl.org/'],
    city: ['Bethlehem', 'https://www.bethlehem-pa.gov/'],
    state: ['PA', 'http://www.pa.gov/'],
    date: '11/14',
    played: false,
  },
];

function showSetlist(id) {
  const setlist = document.querySelector('#setlist');
  if (setlist !== null) {
    setlist.style.display = 'none';
  }
  if (id !== '') {
    let index = -1;
    for (let i = 0; i < shows.length; i++) {
      if (shows[i]['id'] === id) {
        index = i;
        break;
      }
    }

    if (index === -1) {
      console.log('error: id not found');
    } else {
      addSetlistElement(index);
    }
  }
}

function addSetlistElement(index) {
  const li = document.createElement('li');
  li.appendChild(document.createElement('li'));
  li.setAttribute('id', 'setlist');
  let songInfo = '';
  shows[index]['setlist'].forEach(function (song, ind) {
    if (song['original']) {
      songInfo += '<a href="';
    } else {
      songInfo += '<a class="not-original" href="';
    }

    songInfo += song['link'] + '">' + song['song'] + '</a>';
    if (ind < shows[index]['setlist'].length - 1) {
      songInfo += ' // ';
    }
  });
  li.innerHTML = '<div class="col-xs-1 tour-dates"></div>' +
  '<div class="col-xs-11 tour-dates">' + songInfo + '</div>';
  const existingLi = document.querySelector('#' + shows[index]['id']);
  existingLi.parentNode.insertBefore(li, existingLi.nextSibling);
}

ready(function() {
  const list = document.querySelector('#tour-dates-list');
  shows.forEach(function(show) {
    const li = document.createElement('li');
    li.appendChild(document.createElement('li'));
    const icon = show['played'] ? 'archive' : 'info-circle';
    const firstLink = show['played'] ? '#' + show['id'] : show['venue'][1];
    li.setAttribute('id', show['id']);
    li.innerHTML = '<a href="' + firstLink + '"><div class="col-xs-1 tour-dates text-right"><i class="fa fa-' +
      icon + ' tour-d" aria-hidden="true"></i></div></a><a href="' +
      show['venue'][1] + '"<div class="col-xs-4 tour-dates">' +
      show['venue'][0] + '</div></a>' +
      '<a href="' + show['city'][1] + '"><div class="col-xs-4 tour-dates text-right">' +
      show['city'][0] + '</div></a>' +
      '<a href="' + show['state'][1] + '"><div class="col-xs-1 tour-dates">' + show['state'][0] + '</div></a>' +
      '<div class="col-xs-2 tour-dates">' + show['date'] + '</div>';
    list.appendChild(li);
  });

  showSetlist(window.location.hash.slice(1));
  window.onhashchange = function () {
    showSetlist(window.location.hash.slice(1));
  };
});

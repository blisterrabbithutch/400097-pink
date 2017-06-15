

var navMain = document.querySelector('.main-nav');
    var navToggle = document.querySelector('.main-nav__toggle');
    var HeaderToggle = document.querySelector('.main-header');

    HeaderToggle.classList.remove('main-header--nojs');

    navToggle.addEventListener('click', function() {
      if (navMain.classList.contains('main-nav--closed')) {
        navMain.classList.remove('main-nav--closed');
        navMain.classList.add('main-nav--opened');
        HeaderToggle.classList.add('main-header--opened');
      } else {
        navMain.classList.remove('main-nav--opened');
        HeaderToggle.classList.remove('main-header--opened');
        navMain.classList.add('main-nav--closed');
      }
    });
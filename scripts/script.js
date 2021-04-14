// VARIABLES //

// Get class to show Mobile menu
let dynamicMenu;
let dynamicLogIn;
// Get elements to modified active link
let hoverLinks;


$(function () {

  dynamicMenu =  $('.js-navigate');
  dynamicLogIn = $('.js-log');
  hoverLinks = document.querySelectorAll('.navigate-list__item--hover')
  searchJS = $('.js-search');
  searchBox = $('.search-box');


  //Calculate the height of <header> tag
  //Use outerHeight() instead of height() if have padding
  let aboveHeight = $('header').height();
  
  // Fix the navbar/header when user scrolls the page
  $(window).on('scroll', () => {
      //if scrolled down more than the header’s height
      if ($(window).scrollTop() > aboveHeight) {
        // if yes, add “fixed” class to the <nav>
        // add padding top to the #content (value is same as the height of the nav)
        $('.main-header').addClass('fixed');
      }
      else {
        // when scroll up or less than aboveHeight, remove the “fixed” class, and the padding-top
        $('.main-header').removeClass('fixed');
      }
    });

  // Toggle class from Small and Medium device menu
  $('.js-menu-button').on('click', function () {
      dynamicMenu.toggleClass('navigate--opened');
      dynamicLogIn.toggleClass('log--opened');

      this.classList.toggle('menu-button--opened');
      this.setAttribute('aria-expanded', this.classList.contains('menu-button--opened'));
    });

  // Loop through the links and add the active class to the current/clicked link
  hoverLinks.forEach(activelink => {
    activelink.addEventListener('click', function() {
      // Remove last element with active class
      hoverLinks.forEach(link => link.classList.remove('active'));
      // Add to current element the active class
      this.classList.add('active');
    });
  });

  // Show search box
  searchJS.on('click', () => {
      searchBox.toggleClass('search-box--show');
    });

  /*
    Slider behavior
    Contains:
      * Arrows, left and right
      * Message box
  */
  $('#checkbox').on('change', function(){
    setInterval(function () {
        moveRight();
    }, 3000);
  });

  /* get Current year */
  window.addEventListener('load', (
    function getYear() {
      document.querySelector('.js-current-year').appendChild(
          document.createTextNode(
              new Date().getFullYear()
          )
      );
    }
  ));

});
  


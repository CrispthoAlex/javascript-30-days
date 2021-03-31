// VARIABLES //

// Get class to show Mobile menu
let dynamicMenu;
// Get elements to modified active link
let hoverLinks;


$(function () {

  dynamicMenu =  $('.js-navigate');
  hoverLinks = document.querySelectorAll('.navigate-list__item--hover');

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
  
  // Get keys to removed the playing class
  const keysPlaying = document.querySelectorAll('.sounds-box__keys')
  
  // Play when a key is typed
  function playingSounds (event) {
    
    //Remove last element; playing sounds
    keysPlaying.forEach(singlekey => {singlekey.classList.remove('playing')});
    
    // Get the key typed
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
    const keyPushed = document.querySelector(`.sounds-box__keys[data-key="${event.keyCode}"]`);
    
    if (!audio || !keyPushed)
      return; // Stop, if key is not programmed
    
    audio.currentTime = 0; // rewind to start. Multiple playing
    
    // Play the sounds
    audio.play();
    keyPushed.classList.add('playing')
    //removePlaying(keyPushed);
  }

  keysPlaying.forEach(keycode => {
    keycode.addEventListener('transitionend', playingSounds);
  });

  // Activa key play
  window.addEventListener('keydown', playingSounds);

});


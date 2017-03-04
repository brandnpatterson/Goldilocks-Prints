/**
 *  Navbar
**/

import $ from 'jquery';

const navbar = (function () {
  // CacheDOM
  const $document     = $(document);
  const $defaultState = $('.slide');
  const $navbar       = $('.navbar');
  const $window       = $(window);
  const $logo         = $('.logo');
  const $logoHeader   = $('.logo-header');

  // Initial state
  $navbar.hide();
  $logo.hide();

  function toggleNavbar () {
    if($document.scrollTop() > 10) {
      $navbar.addClass('shrink-navbar').fadeIn();
      $navbar.removeClass('grow-navbar');
      $defaultState.addClass('shrink-slide');
      $defaultState.removeClass('grow-slide');
      $logoHeader.hide();
      $logo.show();

    } else if($document.scrollTop() <= 5) {
      $navbar.addClass('grow-navbar').fadeOut();
      $navbar.removeClass('shrink-navbar');
      $defaultState.addClass('grow-slide');
      $defaultState.removeClass('shrink-slide');
      $logo.hide();
      $logoHeader.show();
    }
  }

  // Events
  $window.scroll(toggleNavbar);
}());

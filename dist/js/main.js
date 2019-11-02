"use strict";

;
window.addEventListener('DOMContentLoaded', function () {
  //close modal thanks
  var close = document.querySelector(".close"),
      overlay = document.querySelector(".overlay");
  close.addEventListener('click', function () {
    overlay.style.display = "none";
  }); //slow scroll

  var anchor = document.getElementsByTagName('a');

  var _loop = function _loop(i) {
    anchor[i].addEventListener('click', function (e) {
      e.preventDefault();
      var blockID = anchor[i].getAttribute('href');
      document.querySelector(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  };

  for (var i = 0; i < anchor.length; i++) {
    _loop(i);
  } // submit for form


  $('form').submit(function (e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
    }).done(function () {
      $(this).find("input").val("");
      $('.overlay').fadeIn('slow');
      $('form').trigger('reset');
      setTimeout(function () {
        $(".overlay").hide('slow');
      }, 3000);
    });
    return false;
  }); //menu

  function hamburgerMenu(selector) {
    var navLinks = $(selector);
    var hamburger = $('.hamburger');
    var links = $('.nav__links a');
    hamburger.on('click', function () {
      return toggleMenu();
    });
    links.on('click', function () {
      return toggleMenu();
    });

    function toggleMenu() {
      if ($(window).width() < 1200) {
        hamburger.toggleClass('hamburger-active');
        navLinks.toggle();

        if ($('.nav__links').css('display') != 'none') {
          $('body').css('overflow', 'hidden');
        } else {
          $('body').css('overflow', 'visible');
        }
      }
    }

    ;
  }

  ;
  hamburgerMenu(".nav__links");
});
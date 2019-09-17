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
  });
});
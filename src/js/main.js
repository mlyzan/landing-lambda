;
window.addEventListener('DOMContentLoaded', function(){
   
   //close modal thanks
   let close = document.querySelector(".close"),
    overlay = document.querySelector(".overlay");
   close.addEventListener('click', ()=>{
      overlay.style.display = "none";
   });
   //slow scroll
    let anchor = document.getElementsByTagName('a');
    for (let i = 0; i < anchor.length; i++){
        anchor[i].addEventListener('click', function (e) {
          e.preventDefault();
          const blockID = anchor[i].getAttribute('href');
          
          document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        })
      }

    // submit for form
    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('.overlay').fadeIn('slow');
            $('form').trigger('reset');
            setTimeout(function() { $(".overlay").hide('slow'); }, 3000);
        });
        return false;
        });

        //menu
        function hamburgerMenu(selector){
          let navLinks = $(selector);
          let hamburger = $('.hamburger');
          let links = $('.nav__links a');
            hamburger.on('click', ()=> toggleMenu());
            links.on('click', ()=> toggleMenu());

            function toggleMenu(){
              if($(window).width()<1200){
                hamburger.toggleClass('hamburger-active');
              navLinks.toggle();
              if($('.nav__links').css('display') != 'none'){
                $('body').css('overflow','hidden');
              }else {
                $('body').css('overflow','visible');
              }
              }
            };
        };
        hamburgerMenu(".nav__links");



        
});
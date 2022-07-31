jQuery(document).ready(function($) {

	'use strict';

    var top_header = $('.parallax-content');
    top_header.css({'background-position':'center center'}); // better use CSS

    $(window).scroll(function () {
    var st = $(this).scrollTop();
    top_header.css({'background-position':'center calc(50% + '+(st*.5)+'px)'});
    });


    $('body').scrollspy({ 
        target: '.fixed-side-navbar',
        offset: 200
    });
      
      // smoothscroll on sidenav click

    $('.tabgroup > div').hide();
        $('.tabgroup > div:first-of-type').show();
        $('.tabs a').click(function(e){
          e.preventDefault();
            var $this = $(this),
            tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
            others = $this.closest('li').siblings().children('a'),
            target = $this.attr('href');
        others.removeClass('active');
        $this.addClass('active');
        $(tabgroup).children('div').hide();
        $(target).show();
      
    })

    var owl = $("#owl-testimonials");

      owl.owlCarousel({
        
        pagination : true,
        paginationNumbers: false,
        autoPlay: 6000, //Set AutoPlay to 3 seconds
        items : 3, //10 items above 1000px browser width
        itemsDesktop : [1000,3], //5 items between 1000px and 901px
        itemsDesktopSmall : [900,2], // betweem 900px and 601px
        itemsTablet: [600,1], //2 items between 600 and 0
        itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
        
    });


});
console.log("accesible");




/*when the index loads this should check if the user is logged in 
if yes continue if no load the login&reg doc */
//window.onload(login_redirect());

function login_redirect(){
  window.location= "login&register.html";
}
function validate(){
  let logAdmNo = document.getElementById('login_admNo').value;
  let logpass =document.getElementById('login_password').value;
  if (logAdmNo =='') {
    document.getElementById('login_admNo').focus();
    console.log('logadm empty');
  }else if (logpass =='') {
    document.getElementById('login_password').focus();
    console.log('logpass empty');
  }else{
    logAdmNo= logAdmNo.toLowerCase();
    console.log(logAdmNo);
  }
}

Notification.requestPermission(function() {
  if (Notification.permission === 'granted') {
    //new Notification('Hello', { body: 'Hello, world!', icon: 'favicon.ico' });
  // user approved.
  // use of new Notification(...) syntax will now be successful
  } else if (Notification.permission === 'denied') {
  // user denied.
  } else { // Notification.permission === 'default'
  // user didn’t make a decision.
  // You can’t send notifications until they grant permission.
  }
  });

  //new Notification('Hello', { body: 'Hello, world!', icon: 'favicon.ico' });  
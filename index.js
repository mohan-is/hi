$(document).ready(function() {
  handleScroll();
  initTyping();

  var waypoint = new Waypoint({
  element: document.getElementById('exp-id'),
  handler: function() {
     var p = document.querySelectorAll('.progress-bar');
    p[0].setAttribute("style", "width:98%; transition:1s all");
    p[1].setAttribute("style", "width:95%; transition:1.5s all");
    p[2].setAttribute("style", "width:90%; transition:1.8s all");
    p[3].setAttribute("style", "width:75%; transition:2.2s all");
    p[4].setAttribute("style", "width:87%; transition:2.5s all");
    p[5].setAttribute("style", "width:78%; transition:2.8s all");
    p[6].setAttribute("style", "width:68%; transition:3.0s all");
  },
  offset: '90%'
});
    $(".owl-carousel").owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:4000,
        items:1
    });
    $(window).on('scroll',function(){
        $('.preloader').addClass('complete')
    })
});

function handleScroll() {
  $(window).on('scroll', function() {
    let scroll = $(window).scrollTop();
    console.log(scroll);
  });
}

function initTyping() {
  var typed = new Typed(".element", {
    strings: ["Mohan Marimuthu", "a Developer", "a Designer"],
    smartBackspace: true,
    typeSpeed: 80,
    backSpeed: 60,
    loop: true,
    loopCount: Infinity,
    startDelay: 1000
  });
}


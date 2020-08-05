$(document).ready(function(){
    $('.slider').ripples({
        dropRadius:10,
        perturbance:.01,
    });
    $('.text').typed({
        strings:['mein name ist','AHMED MONSEF'],
        typespeed:0,
        loop:true
    });



// sticky nav
   $(window).scroll(function(){
        var scro =$(this).scrollTop();
        if(scro>=100){
            $('nav').addClass('invers');
        }else{
            $('nav').removeClass('invers');

        }

       
    });
    // gallery
    $('.work').magnificPopup({
        delegate:'a',
        type:'image',
        gallery:{
            enabled:true
        }




       

    });
    
    $('#team-members').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        nav:false,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                loop:false
            }
        }
    });
    $('.car').slick({
        autoplay:true
    });


    $(window).scroll(function(){
        var scro =$(this).scrollTop();
        

        if(scro >= 5408.328125){
            $('.timer').countTo();


        }
    });



    console.log($('#stats').offset().top);
     
    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();
        
        var section = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(section).offset().top - -2
        }, 1250, "easeInOutExpo");
    });
     new WOW().init();
     $(window).resize(function(){
         
         console.log((this).width());
      });


});
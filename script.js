// add background color when scroll
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.main-navbar').addClass("sticky");
        }
        else{
            $('.main-navbar').removeClass('sticky');
        }
        //for show up button
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }
        else {
            $('.scroll-up-btn').removeClass("show");
        }
    })


    //for slide up to top
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

    // toggle for menu
    $('.menu-btn').click(function(){
        $('.main-navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    //typing animation
    var word = new Typed(".typing", {
        strings: ["Student", "Developer", "Blogger"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    var word = new Typed(".typing-2", {
        strings: ["Student", "Developer", "Blogger"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

});
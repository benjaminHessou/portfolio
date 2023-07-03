$(document).ready(function(){
    $(window).scroll(function(){
        // barre de navigation collante sur le script de défilement
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // bouton de défilement vers le haut afficher/masquer le script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // script déroulant
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // suppression du défilement fluide lors du clic sur le bouton coulissant
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // appliquant à nouveau un défilement fluide sur les éléments de menu, cliquez sur
        $('html').css("scrollBehavior", "smooth");
    });

    // bascule menu/script de barre de navigation
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // saisie du script d'animation de texte
    var typed = new Typed(".typing", {
        strings: ["Développeur full-stack", "", "", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Développeur full-stack", "", "", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

   // script carrousel chouette
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
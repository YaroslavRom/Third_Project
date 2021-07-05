$(document).ready(function () {
    $('.slider').slick({
        infinite: true,
        autoplay: true,
        arrows:true,
        dots: false,
        speed: 1000,
        easing:'ease',
        autoplaySpeed: 4000,
        fade:true,
        waitForAnimate: false,

    });
});

$('.responsive-link').onclick(function (e){
    e.preventDefault();
    $('.forms-background').fadeIn(600);
});

$('.closing-x').click(function () {
    $('.forms-background').fadeOut(600);

})
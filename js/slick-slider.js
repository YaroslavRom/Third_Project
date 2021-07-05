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

// $('.responsive-link').onclick(function (e){
//     e.preventDefault();
//     $('.forms-background').fadeIn(600);
// });
//
// $('.closing-x').onclick(function () {
//     $('.forms-background').fadeOut(600);
//     $('.form-its-self').fadeOut(600);
//
// })



$(document).ready(function (){
    $('.responsive-link').click(function (){
        $('.form-its-self').fadeIn(1000);
        $('.forms-background').fadeIn(1001);
    });
});

$(document).ready(function (){
    $('.closing-x').click(function (){
        $('.close-form').click(function (){


        $(".form-its-self").fadeOut(1000);
        $('.forms-background').fadeOut(1000);

        });
    });
});
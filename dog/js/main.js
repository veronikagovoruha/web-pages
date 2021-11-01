$(function () {
    $('.slider__wrapper').slick({
        infinite: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,

        responsive: [
            {
                breakpoint: 1024,
                settings: {

                }
            },
            {
                breakpoint: 600,
                settings: {

                }
            },
            {
                breakpoint: 480,
                settings: {

                }
            }

        ]
    });
    // Custom carousel nav
    $('.slider__button-left').click(function(){
        $('.slider__wrapper').slick('slickPrev');
        // $(this).parent().find('.slider__wrapper').slick('slickPrev');
    } );

    $('.slider__button-right').click(function(e){
        e.preventDefault();
        $('.slider__wrapper').slick('slickNext');
        // $(this).parent().find('.slider__wrapper').slick('slickNext');
    } );
})
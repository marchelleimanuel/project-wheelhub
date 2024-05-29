// image-slider
$(function() {
    const $slider = $('.carousel');
    const $slideContainer = $('.carousel-image-container');
    const $slides = $('.carousel-image');

    function updatedSizeCarousel() {
        const viewportWidth = $(window).width();
        let slideWidth;
        let slideHeight;

        if (viewportWidth > 1000) {
            slideWidth = 700; 
            slideHeight = 300;
        }

        if (viewportWidth <= 1000) {
            slideWidth = 600; 
            slideHeight = 300;
        } 
        
        if (viewportWidth < 900) {
            slideWidth = 500; 
        }

        if (viewportWidth < 800) {
            slideWidth = 450; 
        }

        if (viewportWidth < 768) {
            slideWidth = 400; 
            slideHeight = 200;
        }

        if (viewportWidth < 720) {
            slideWidth = 400; 
            slideHeight = 200;
        }

        if (viewportWidth < 650) {
            slideWidth = 300; 
            slideHeight = 150;
        }

        if (viewportWidth < 500) {
            slideWidth = 290; 
        }



        const slideCount = $slides.length;
        const totalWidth = slideCount * slideWidth;
        
        $slider.css({
            width: slideWidth,
            height: slideHeight
        });

        $slideContainer.css({
            width: totalWidth,
            marginLeft: -slideWidth
        });
    }

    updatedSizeCarousel();

    $(window).resize(function() {
        updatedSizeCarousel();
    });


    $('.kiri').on('click', function() {
        $slideContainer.animate({
            left: +$slides.width()
        }, 600, 
            () => {
                $('.carousel-image:last-child').prependTo('.carousel-image-container')
                $('.carousel-image-container').css('left', '0');
            });
    });

    $('.kanan').on('click', function() {
        $slideContainer.animate({
            left: -$slides.width()
        }, 600, 
            () => {
                $('.carousel-image:first-child').appendTo('.carousel-image-container')
                $('.carousel-image-container').css('left', '0');
            });
    });

});


// Carousel
const carouselContainer = document.querySelector('.carousel-image-container');
carouselContainer.addEventListener('click', function(e) {
    if(e.target.classList.contains('carousel-image')) {
        window.location.href = 'promotion.html'
    }
});

// featured cars
const cardContainer = document.querySelector('.card-container');
cardContainer.addEventListener('click', function(e){
    // console.log(e.target);
    if(e.target.classList.contains('car-card') || e.target.classList.contains('car-image') || e.target.classList.contains('car-name')){
        window.location.href = 'allCars.html'
    }
});







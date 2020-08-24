$(document).ready(function () {
    $(".my-books-body").slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 9999,
                // settings: "unslick"
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false,
                    autoplay: true ,
                    arrows:false,
                    }
            },
            {
                breakpoint: 1000,
                settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false,
                        autoplay: false,
                        arrows:false,
                        }
            }
        ]
    });
});
  
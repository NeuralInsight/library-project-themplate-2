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
                breakpoint: 1550,
                settings: {
                    slidesToShow: 2,
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

   //  $('.p-books').slick({
   //      dots: false,
   //      vertical: true,
   //      centerMode: true,
   //      slidesToShow: 2,
   //      slidesToScroll: 1,
   //      infinite: true,
   //      autoplaySpeed: 3000,
   //      autoplay: true,
   //      arrows:false,

   //  })


    // const colorThief = new ColorThief();
    // const img = document.querySelectorAll('.book-img');
    // console.log(img)

    // img.forEach(function(item) {

    //         if (item.complete) {
    //             var color = colorThief.getColor(item);
    //             var rgb_color = `rgb(${color[0]},${color[1]},${color[2]})`;
    //             $('.my-book').css("background-color", rgb_color);
    //             console.log(rgb_color)
    //         } else {
    //             var color = colorThief.getColor(item);
    //             var rgb_color = `rgb(${color[0]},${color[1]},${color[2]})`;
    //             $('.my-book').css("background-color", rgb_color);
    //         }

    // });

    // Make sure image is finished loading


    $.adaptiveBackground.run({
        parent: '.my-book, .p-book',
        normalizeTextColor:   true,
        normalizedTextColors:  {
        light:      "#fff",
        dark:       "#000"
        },
    })

});

var slider = $(".p-books");
var scrollCount = null;
var scroll= null;

slider
    .slick({
        dots: false,
        vertical: true,
        centerMode: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        autoplaySpeed: 3000,
        autoplay: true,
        arrows:false,
    });

slider.on('wheel', (function(e) {
    e.preventDefault();

    clearTimeout(scroll);
    scroll = setTimeout(function(){scrollCount=0;}, 200);
    if(scrollCount) return 0;
    scrollCount=1;

    if (e.originalEvent.deltaY < 0) {
        $(this).slick('slickNext');
    } else {
        $(this).slick('slickPrev');
    }
}));
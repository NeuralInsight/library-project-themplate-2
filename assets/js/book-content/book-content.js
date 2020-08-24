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


    
});

$(document).ready(function(){
    $.adaptiveBackground.run({
        parent: '.my-book',
        normalizeTextColor:   true,
        normalizedTextColors:  {
        light:      "#fff",
        dark:       "#000"
        },
    })
});
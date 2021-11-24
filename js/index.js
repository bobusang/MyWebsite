$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        
        responsiveClass: true,
        loop: false,
        nav: false,
        responsive: {
            0: {
                items: 1,
                margin: -60,
            },
            600: {
                items: 3
            },
            1000: {
                items:5
            }
        }
    });
    console.log("document Ready!");

    $('#btn-test').click(function(){
        console.log("button clicked")
    })
})



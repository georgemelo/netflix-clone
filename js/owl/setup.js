$('.owl-carousel').owlCarousel({
    loop:true,/*false, acaba com o loop*/
    margin:10,
    nav:true,/*tira as setas de navegacao */
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
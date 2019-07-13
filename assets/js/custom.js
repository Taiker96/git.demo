$('.owl-carousel').owlCarousel({
    loop:false,
    margin:30,
    nav: true,
    dots: false,
    responsiveClass:true,
    responsive:{
        0:{ //Màn hình small 1 cột
            items:1
        },
        768:{
            items:3
        }
    }
})
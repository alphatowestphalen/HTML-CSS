let menuimg = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');
var inputrch = document.querySelector('#rch')
var recherhe = document.querySelector('#search-icon')
$('#menu-bars').click(function(){
    $(menuimg).toggleClass('fa-times');
    $(navbar).toggleClass('active');
})
$('#search-icon').click(function () {
    $(inputrch).toggleClass('activ');
})
var swiper = new Swiper(".home-slider",{
    spaceBetween:10,
    centeredSlide: true,
    autoplay:{
        dilay:7500,
        disableOnInteraction: false,
    },
    pagination:{
        el: ".swiper-pagination",
        clickeble:true,
    },
    loop:true, 
})
$('#home').click(function () {
    $(this).toggleClass('color')
    $('#dishes').removeClass()
    $('#about').removeClass()
    $('#menu').removeClass()
    $('#review').removeClass()
    $('#order').removeClass()
})
$('#dishes').click(function () {
    $(this).toggleClass('color')
    $('#home').removeClass()
    $('#about').removeClass()
    $('#menu').removeClass()
    $('#review').removeClass()
    $('#order').removeClass()
})
$('#about').click(function () {
    $(this).addClass('color')
    $('#home').removeClass()
    $('#dishes').removeClass()
    $('#menu').removeClass()
    $('#review').removeClass()
    $('#order').removeClass()
})
$('#menu').click(function () {
    $(this).addClass('color')
    $('#home').removeClass()
    $('#dishes').removeClass()
    $('#about').removeClass()
    $('#review').removeClass()
    $('#order').removeClass()
})
$('#review').click(function () {
    $(this).addClass('color')
    $('#home').removeClass()
    $('#dishes').removeClass()
    $('#about').removeClass()
    $('#menu').removeClass()
    $('#order').removeClass()})
$('#order').click(function () {
    $(this).addClass('color')
    $('#home').removeClass()
    $('#dishes').removeClass()
    $('#about').removeClass()
    $('#menu').removeClass()
    $('#review').removeClass()})

    var swiper = new Swiper(".review-slide",{
        spaceBetween:20,
        centeredSlides: true,
        autoplay:{
            dilay:7500,
            disableOnInteraction: false,
        },
        loop:true, 
        breakpoints:{
            0:{
                slidesPreView:1,
            },
            60:{
                slidesPreView:2,
            },
            768:{
                slidesPreView:2,
            },
            1024:{
                slidesPreView:3,
            },
        },
    })
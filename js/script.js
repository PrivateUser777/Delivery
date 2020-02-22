"use strict";

new WOW().init();

$(document).ready(function(){
    //Слайдер
    $('.reviews__wrappers').slick({
        speed: 1300,
        prevArrow: '<button type="button" class="slick-prev"><img src = "../img/Icons/reviewsIconLeft.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src = "../img/Icons/reviewsIconRight.png"></button>'
    });

    //Модальные окна
    $('[data-modal = consultation]').on('click', function(){
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function(){
        $('.overlay, .consultation').fadeOut('slow');
    });

    $('[data-modal = button]').on('click', function(){
        alert('Данный раздел находится в разработке, просим пращение за доставленные неудобства :)');
    });

    //Плавный переход по ссылкам
    $("a[href^='#']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top + "px"});
        return false;
    });

    //Появление и скрытие элемента при скроле
    $(window).scroll(function(){
        if($(this).scrollTop()>2000){
            $('.scrollup').fadeIn();
        } else{
            $('.scrollup').fadeOut();
        }
    });

    $('input[name=phone]').mask("+7 (999) 999-99-99");

    const headerItems = document.querySelector('.header__items');
    const headerItem = document.querySelectorAll('.header__item');
    const hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        headerItems.classList.toggle('header__items_active');
    });
    headerItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            headerItems.classList.toggle('header__items_active');
        });
    });
});



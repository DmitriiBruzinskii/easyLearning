$(document).ready(function () {
    $('.header_burger, .header_nav_list ul a').click(function () {
        $(this).toggleClass('active');
        $('.header_nav_list ul, .container .header_nav_logo').toggleClass('active');
        $('body, .container, .header_nav, .header-body_desc, .header-body .subtitle, .container .header_nav_list ul li:not(:last-child), .header_nav_list ul a, .awards').toggleClass('open');
    });

    // После нажатия на какую-то из ссылок,бургер меню отключается
    const $burger = $('.header_burger');
    const $menu = $('.header_nav_list ul');
    $('.header_nav_list ul a').click(function () {
        $burger.add($menu).add('body, .container, .header_nav, .header-body_desc, .header-body .subtitle, .container .header_nav_list ul li:not(:last-child), .header_nav_list ul a').removeClass('active open');
    });
});


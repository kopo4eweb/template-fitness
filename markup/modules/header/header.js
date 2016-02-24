$(document).ready(function () {

    function setHeaderHeight() {
        var windowHeight = $(window).height();
        if (windowHeight < 890) {
            $('#header').css('height', windowHeight);
        }
    }

    setHeaderHeight();

    $(window).resize(function () {
        setHeaderHeight();
    });

    $('.menu_mobile').on('click', function () {
        $('.menu_list').toggleClass('menu_list_mobile');
    });

    $('.item_a').on('click', function () {
        $('.menu_list').removeClass('menu_list_mobile');
    });

});

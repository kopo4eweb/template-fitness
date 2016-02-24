$(document).ready(function () {

    function setBannerHeight() {
        var windowHeight = $(window).height();
        if (windowHeight < 725) {
            $('#banner').css('height', windowHeight);
        }
    }

    setBannerHeight();

    $(window).resize(function () {
        setBannerHeight();
    });

});

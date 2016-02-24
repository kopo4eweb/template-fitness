$(document).ready(function () {
    $('img.bannerResponse').each(function () {
        $(this).responsitiveLoadImage({ arrEventSetWidth: [400, 480, 767, 991] });
    });
});

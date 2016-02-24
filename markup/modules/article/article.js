$(document).ready(function () {

    // console.log('article');
    /*
    var setImgWidth = -1,
        arrEventSetWidth = [480, 767, 991];

    function loadImg() {
        $('.mediaImg').each(function () {

            var $img = $(this),
                dataImg = $(this).attr('data-img'),
                dataImgUrl = $(this).attr('data-img_url'),
                arrObjImg,
                windowWidth = $(window).width(),
                isLoadImg = false;

            arrObjImg = JSON.parse(dataImg);
            for (var i = 0; i < arrObjImg.imgItem.length; i++) {
                if (windowWidth <= parseInt(arrObjImg.imgItem[i].w, 10)) {
                    $img.attr('src', dataImgUrl + arrObjImg.imgItem[i].img);
                    $img.attr('width', arrObjImg.imgItem[i].imgW);
                    $img.attr('height', arrObjImg.imgItem[i].imgH);
                    isLoadImg = true;
                    break;
                }
            }
            if (!isLoadImg) {
                $img.attr('src', dataImgUrl + arrObjImg.img);
                $img.attr('width', arrObjImg.imgW);
                $img.attr('height', arrObjImg.imgH);
            }

        });
    }

    loadImg();

    $(window).resize(function () {

        for (var i = 0; i < arrEventSetWidth.length; i++) {
            if (i === 0 && $(window).width() <= arrEventSetWidth[i] && setImgWidth !== arrEventSetWidth[i]) {
                // console.log('set image width: ' + arrEventSetWidth[i]);
                loadImg();
                setImgWidth = arrEventSetWidth[i];
                break;
            } else if (i > 0) {
                if ($(window).width() > arrEventSetWidth[i - 1] && $(window).width() <= arrEventSetWidth[i] && setImgWidth !== arrEventSetWidth[i]) {
                    // console.log('set image width: ' + arrEventSetWidth[i]);
                    loadImg();
                    setImgWidth = arrEventSetWidth[i];
                    break;
                }
            }
        }

        if ($(window).width() > 991 && setImgWidth !== -1) {
            loadImg();
            setImgWidth = -1;
            // console.log('- set Img Width: ' + setImgWidth);
        }

    });
    */

    $('img.mediaImg').each(function () {
        $(this).responsitiveLoadImage({ arrEventSetWidth: [ 480, 767, 991] });
    });

});

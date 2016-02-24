(function ($) {
    $.fn.responsitiveLoadImage = function (options) {

        var settings = $.extend({
            arrEventSetWidth: [480, 767, 991]
        }, options);

        var setImgWidth = -1;

        return this.each(function () {

            var $el = $(this);

            function loadImg() {
                   // console.log($el);

					var $img = $el,
						dataImg = $el.attr('data-img'),
						dataImgUrl = $el.attr('data-img_url'),
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
			};

			function reloadImg() {
				var arrWidth = settings.arrEventSetWidth;
				for (var i = 0; i < arrWidth.length; i++) {
					if (i === 0 && $(window).width() <= arrWidth[i] && setImgWidth !== arrWidth[i]) {
						// console.log('set image width: ' + arrWidth[i]);
						loadImg();
						setImgWidth = arrWidth[i];
						break;
					} else if (i > 0) {
						if ($(window).width() > arrWidth[i - 1] && $(window).width() <= arrWidth[i] && setImgWidth !== arrWidth[i]) {
							// console.log('set image width: ' + arrWidth[i]);
							loadImg();
							setImgWidth = arrWidth[i];
							break;
						}
					}
				}

				if ($(window).width() > 991 && setImgWidth !== -1) {
					loadImg();
					setImgWidth = -1;
					// console.log('- set Img Width: ' + setImgWidth);
				}
			};

            loadImg();

            $(window).resize(function () {
                reloadImg();
            });

        });

    };
})(jQuery);

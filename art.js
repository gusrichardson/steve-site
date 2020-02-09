$(document).ready(function () {
    const $artOverlay = $("<div id='art-overlay'></div>");
    const $artImg = $("<img>")
    const $imgOffset = $artImg.offset().top;

    $artOverlay.append($artImg);

    $('body').append($artOverlay);

    $('.art-image').click(function () {
        let $imgSrc = $(this).attr('src');
        let $imgPos = $(this).offset().top
        if ($(window).width() > 800) {
            console.log("greater than 800")
            let position = Math.floor($imgPos/1.5) + "px";
            console.log("this is position", position);
            $artImg.attr('src', $imgSrc).css({ 'margin-top': position });
            //let $imgPos = $(this).offset().top / 1.5;
        } else {
            let pixels = $imgPos + 'px';
            $artImg.attr('src', $imgSrc).css({ 'margin-top': pixels });
        }
        // let $artHeight = $artImg.height();
        $artOverlay.css({ 'display': 'block' });
    })
    $artOverlay.click(function () {
        $artOverlay.css({ 'display': 'none' });
    })
})
$(document).ready(function () {
    const $artOverlay = $("<div id='art-overlay'></div>");
    const $artImg = $("<img>")
    const $imgOffset = $artImg.offset().top;

    $artOverlay.append($artImg);

    $('body').append($artOverlay);

    $('.art-image').click(function () {
        let $imgSrc = $(this).attr('src');
        let $imgPos = $(this).offset().top / 1.5;
        $artImg.attr('src', $imgSrc).css({ 'margin-top': $imgPos });
        let $artHeight = $artImg.height();
        $artOverlay.css({ 'display': 'block' });
    })
    $artOverlay.click(function () {
        $artOverlay.css({ 'display': 'none' });
    })
})
$(document).ready(function () {
    const $artOverlay = $("<div id='art-overlay'></div>");
    const $artImg = $("<img>")
    const $imgOffset = $artImg.offset().top;

    $artOverlay.append($artImg);

    $('body').append($artOverlay);

    $('.art-image').click(function () {
        let $imgSrc = $(this).attr('src');
        let $documentHeight = $(document).height();
        console.log("this is $documentHeight", $documentHeight);
        let $windowHeight = $(window).height();
        // let $windowTop = $(window).position();
        // console.log("this is the windowTop", $windowTop);
        console.log("this is the window height", $windowHeight);
        let $imgPos = $(this).offset().top
        console.log("this is the $imgPos", $imgPos);
        let pixels = $imgPos + 'px';
        // let $imgPos = $(this).offset().top / 1.5;
        $artImg.attr('src', $imgSrc).css({ 'margin-top': pixels });
        let $artHeight = $artImg.height();
        $artOverlay.css({ 'display': 'block' });
    })
    $artOverlay.click(function () {
        $artOverlay.css({ 'display': 'none' });
    })
})
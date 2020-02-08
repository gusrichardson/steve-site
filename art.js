$(document).ready(function () {
    console.log('ready');

    const $artOverlay = $(`<div id="art-overlay"></div>`);
    const $artImage = $("<img>")
    $artOverlay.append($artImage);

    $("#art-main").append($artOverlay);

    $('.art-image').click(function () {
        let $imagePath = $(this).attr('src');
        console.log($imagePath);
        $artImage.attr('src', $imagePath);
        console.log($artImage);
        $('#art-overlay').show();
    })

    $('#art-overlay').click(function () {
        $('#art-overlay').hide();
    })
});


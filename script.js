function init() {
    var vidDefer = document.getElementsByTagName('iframe');
    for (var i = 0; i < vidDefer.length; i++) {
        if (vidDefer[i].getAttribute('data-src')) {
            vidDefer[i].setAttribute('src', vidDefer[i].getAttribute('data-src'));
        }
    }
}
window.onload = init;

var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
    document.querySelectorAll('*'),
    function (el) {
        if (el.offsetWidth > docWidth) {
            console.log(el, "this is el");
        }
    }
);

$(document).ready(function () {

    //defer parsing of javascript on youtube video
    // const vidDefer = document.getElementById('yt-vid');
    // vidDefer.setAttribute('src', vidDefer.getAttribute('data-src'));

    $(window).scroll(function () {
        $('.hide-me').each(function (i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_object) {
                $(this).addClass('show-me');
            }
            if (bottom_of_window < bottom_of_object) {
                $(this).removeClass('show-me');
            }
        });
    });

    $('#burger-menu').click(function () {
        $('#navigation-menu').css({
            width: "100%"
        })
    })

    if ($(window).width() < 800) {
        $('#navigation-menu li').click(function () {
            $('#navigation-menu').css({
                width: "0"
            })
        })
    }
});


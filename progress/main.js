$(window).scroll(function () {
    let ratio = ($(document).scrollTop() / ($(document).height() - $(window).height())) * 100;
    // $('.bar').css('width', ratio + '%');
    $('.progress img').css({
        'transform': 'translate('+($(window).width() - 94) * ratio / 100+'px,0px)'
    });
});
$(window).scroll(function () {
    $('.animated').each(function () {
        if($(document).scrollTop() + $(window).height() > $(this).offset().top &&
        $(document).scrollTop() - $(this).offset().top < $(this).height()){
            $(this).css('opacity', 1);
            $(this).addClass($(this).data('animation'));
        }else {
            $(this).css('opacity', 0);
            $(this).removeClass($(this).data('animation'));
        }
    })
});
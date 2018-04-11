$(window).scroll(function () {
    var section1 = $('.section-1').offset(),
        section2 = $('.section-2').offset(),
        section3 = $('.section-3').offset(),
        wScroll = $(this).scrollTop();

   $('.section-1 h4').css({
       'transform': 'translate(0, ' + (wScroll - section1.top) + '%)'
   });
    $('.section-2 h4').css({
        'transform': 'translate(0, ' + (wScroll - section2.top) + '%)'
    });
    $('.section-3 h4').css({
        'transform': 'translate(0, ' + (wScroll - section3.top) + '%)'
    })
});
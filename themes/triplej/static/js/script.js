$(function() {

    $('header .logo').css('transform', 'translate(-50%, ' + 0 * 1 + 'px)')    
    
    $(document).on( 'scroll load', function() {
        const scrollTop = $(window).scrollTop();
        const docSize = $(window).height();
        $('header .logo').css('transform', 'translate(-50%, ' + (scrollTop) * 1 + 'px)')
        // if ( scrollTop > 50 ) return;
        if ( scrollTop == 0 ) $('header').addClass('static').removeClass('scroll')
        if ( scrollTop > 0 ) $('header').addClass('scroll').removeClass('static')
        $('header .waves img:nth-child(1)').css('transform', 'translateY(' + (scrollTop) * 2 + 'px)')
        $('header .waves img:nth-child(2)').css('transform', 'translateY(' + (scrollTop) * 1.5 + 'px)')
        $('header .waves img:nth-child(3)').css('transform', 'translateY(' + (scrollTop) * 1 + 'px)')
        $('header .waves img:nth-child(4)').css('transform', 'translateY(' + (scrollTop) * .5 + 'px)')
    });
})
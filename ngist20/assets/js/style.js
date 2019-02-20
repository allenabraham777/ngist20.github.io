$(window).scroll(function() {
    if($(this).scrollTop() > 50)  /*height in pixels when the navbar becomes non opaque*/ 
    {
        $('.opaque-navbar').addClass('opaque');
        $('#myNavbar').addClass('opq');
        $('#myNavbar').removeClass('transp');
        $('#brand').removeClass('hide');
        $('#brand').addClass('show');
        $('#nav').removeClass('scroll');        
    } else {
        $('.opaque-navbar').removeClass('opaque');
        $('#myNavbar').addClass('transp');
        $('#myNavbar').removeClass('opq');
        $('#brand').removeClass('show');
        $('#brand').addClass('hide');
        $('#nav').addClass('scroll');        
    }
});
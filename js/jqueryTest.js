  $(window).scroll(function() {
    if($(this).scrollTop() > 50) 
    {
        $('.opaque-navbar').addClass('opaque');
    } else {
        $('.opaque-navbar').removeClass('opaque');
    }
});
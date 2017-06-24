  $(window).scroll(function() {
    if($(this).scrollTop() > 50) 
    {
        $('.opaque-navbar').addClass('opaque');
    } else {
        $('.opaque-navbar').removeClass('opaque');
    }
});

var resizeTimer;
$(window).on('resize', function (e) {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
        if ($(window).width() > 768) {
            $('#nav-header-links-collapse').show();
        } else {
            $('#nav-header-links-collapse').hide();
        }
    }, 250);
});



$('#nav-button').on('click', function () {
    $('#nav-header-links-collapse').toggle();
});
define(
    [
        'jquery',
        'jquery/ui'

    ],

    function($) {

        //back to top
        $(window).scroll(function(){
            if ($(this).scrollTop() > 1) {
                $('.back-to-top').css("bottom","80px");
                $('.back-to-top').css("top","auto");
                $('.back-to-top').css("visibility","visible");
            } else {
                $('.back-to-top').css("bottom","-50px");
                $('.back-to-top').css("top","auto");
            }
        });

        $(document).on('click','.back-to-top',function(){
            $('html, body').animate({scrollTop: '0px'}, 500);
            return false;
        });


    }
);

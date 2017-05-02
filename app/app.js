var $ = require("jquery");

$(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 20) {
            $('nav.navigation').addClass('navigation--dark');
        }
        else {
            $('nav.navigation').removeClass('navigation--dark');
        }
    });
});
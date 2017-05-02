var $ = require("jquery");

var testTemplate = require("./test.hbs");

require('./plugins');

$(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 20) {
            $('nav.navigation').addClass('navigation--dark');
        }
        else {
            $('nav.navigation').removeClass('navigation--dark');
        }
    });

    createHTML();
});


function createHTML() {
  var petsContainer = document.getElementById("test");
  petsContainer.innerHTML = testTemplate();
}
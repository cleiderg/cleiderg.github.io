$(document).ready(function(){

    function glow(){
        $(".fa-arrow-down").animate({opacity:'0.5'}, 'slow').animate({opacity: '0.9'}, 'slow', glow)
    }
    glow();

    function stars(){

    }

});
$(document).ready(function(){
    $(".h-menu ").clone().prependTo(".mobile-menu");


    $(".menutrigger").on('click', function(){
        $(this).toggleClass("active");
        $(".mobile-menu").stop(true,false,true).slideToggle();
    });
    


});

$(document).ready(function(){

$('.sidenav').sidenav();

});

//animate acording to scroll
var btn = document.querySelector(".animbtn");
var keyframe = find
$(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
           
    
            btn.style.animationName="moveDown";
            btn.style.opacity="0";
           
         } else {
                    btn.style.animationName="moveInBottom";
    
                       
                        btn.style.opacity="1";
           
    }
});






$(document).ready(function(){

$('.sidenav').sidenav();

});


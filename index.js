$(document).ready(function(){

$('.sidenav').sidenav();

});

//animate acording to scroll
var btn = document.querySelector(".animbtn");
$(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
           
        btn.style.display="none";
                } else {
                    btn.style.display="";
    }
});
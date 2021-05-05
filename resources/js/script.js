// mixitUp
$(document).ready (function (){
    var mixer = mixitup ('.grid-portfolio-container');
    
});

// scrollify

    $(function() {
          $.scrollify({
            section : ".scrollify",
            setHeights: false,
            updateHash: false,
            touchScroll: false,
          });
    });

//hamburger menu

function openMenu() {
document.getElementById('navbar').style.height = "100%";
}
function closeMenu() {
document.getElementById('navbar').style.height = "0";
}

// smoot scroll

$(function(){
    $('.menu-item a, .scroll-down a').on('click', function(){
        $('html, body').animate({
           scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
        return false;
    });
});
























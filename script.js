window.onscroll = function() {nav_onscroll()};

function nav_onscroll() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementsByClassName("nav_color").style.opacity = "0";
    } else {
        document.getElementsByClassName("nav_color").style.opacity = "100";
    }
    
}
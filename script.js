//ONSCROLL Navigation Effect
window.onscroll = function() {nav_onscroll()};
function nav_onscroll() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.getElementById("NavColor").style.opacity = "100";
    } else {
        document.getElementById("NavColor").style.opacity = "0";
    }
    
}
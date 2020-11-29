//ONSCROLL Navigation Effect
window.onscroll = function() {nav_onscroll()};
function nav_onscroll() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.getElementById("NavColor").style.opacity = "100";
    } else {
        document.getElementById("NavColor").style.opacity = "0";
    }
    
}
var action, text;
window.onscroll = function() {};
function portal(action, text) {
    if (action == 'show') {
        document.getElementById('LoginPortals').style.display = "flex";
        document.getElementById('PortalName').innerHTML = text;
    } else {
        document.getElementById('LoginPortals').style.display = "none";
    }
}

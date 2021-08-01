window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 20) {

        document.getElementById("navbar").style.background = "rgba(255,255,255, 0.9)";
        document.getElementById("brand").style.padding = "0.1rem 0";
        document.getElementById("menu").style.top = "6.2rem"
        document.getElementById("navbar-checkbox").style.top = "1rem"

    }
    //  else if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    // }
    else {
        document.getElementById("navbar").style.background = "none";
        document.getElementById("brand").style.padding = "1rem 0";
        document.getElementById("menu").style.top = "8.2rem"
        document.getElementById("navbar-checkbox").style.top = "2.2rem"
    }
}

document.querySelector('video').playbackRate = "0.00001";



function uncheckBox() {
    document.getElementById('navbar_checkbox').checked = false
}
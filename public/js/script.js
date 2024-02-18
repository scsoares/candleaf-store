
const NAVBAR_MOBILE = document.getElementById("navbar-mobile");
const NAVBAR_OVERLAY = document.getElementById("navbar-overlay");

// Show mobile navigation menu
function showNav() {
    NAVBAR_MOBILE.classList.replace("-left-full", "left-0");
    NAVBAR_OVERLAY.classList.replace("hidden", "visible");
}

function hideNav() {
    NAVBAR_MOBILE.classList.replace("left-0", "-left-full");
    NAVBAR_OVERLAY.classList.replace("visible", "hidden");
}
feather.replace();
window.onload = function() {
    if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    closeSidenav();
} else {
    openSidenav();
}
};
function openSidenav() {
    document.getElementById("sidenav").classList.add("sidenav-open");
}
function closeSidenav() {
    document.getElementById("sidenav").classList.remove("sidenav-open");
}
function toggleSidenav() {
    if (document.getElementById("sidenav").classList.contains("sidenav-open")) {
        closeSidenav();
    } else {
        openSidenav();
    }
}

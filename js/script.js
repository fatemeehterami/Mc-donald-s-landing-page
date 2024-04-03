let menu = document.querySelector(".menu__elements");
let menuIcon = document.querySelector(".nav_icon");
let menuIconClose = document.querySelector(".close_icon");

menuIcon.addEventListener("click" , function(){
    menu.style.left="0";
    menuIcon.style.display = 'none';
    menuIconClose.style.display = 'block';
})
menuIconClose.addEventListener("click" , function(){
    menu.style.left="-256px";
    menuIcon.style.display = 'block';
    menuIconClose.style.display = 'none';
})
function hideMenu() {
    menu.style.left = "-256px";
    menuIcon.style.display = 'block';
    menuIconClose.style.display = 'none';
}
window.addEventListener('resize', function() {
    if (window.innerWidth < 910) {
        hideMenu();
    }
});
function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
    
}
const typed = new Typed('.Yo', {
    strings: ['Android Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 400,
    loop: true
});
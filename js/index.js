const header = document.querySelector("header");
const main = document.querySelector("main");
const scroll_to_top = document.querySelector("#scroll-to-top");
const open_menu = document.querySelector("#open-menu");
const close_menu = document.querySelector("#close-menu");
const nav_menu = document.querySelector("#nav-menu");

nav_menu.querySelectorAll('a').forEach((element) => element.addEventListener('click', () => {
    nav_menu.classList.add('menu_closed');
}));

window.addEventListener('scroll', () => {
    if(window.scrollY >= 200) {
        header.classList.add('header_shrunk');
        scroll_to_top.classList.add('scroll-to-top_shrunk');
    } else {
        header.classList.remove('header_shrunk');
        scroll_to_top.classList.remove('scroll-to-top_shrunk');
    }
});

scroll_to_top.addEventListener('click', () => {
    scrollTo(0, 0);
});

open_menu.addEventListener('click', () => {
    nav_menu.classList.remove('menu_closed');
});

close_menu.addEventListener('click', () => {
    nav_menu.classList.add('menu_closed');
});

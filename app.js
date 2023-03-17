const button = document.querySelector(".nav-btn")
const menu = document.querySelector('#mobile-nav')


button.addEventListener('click', () => {
    menu.classList.toggle("active");
})
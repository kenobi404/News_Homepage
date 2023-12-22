const mobileMenu = document.querySelector('.menu');
const navList = document.querySelector('.nav-list');
const overlay = document.querySelector('.overlay');


mobileMenu.addEventListener('click',() => {
    navList.classList.toggle('show')
    mobileMenu.classList.toggle('show');
    overlay.classList.toggle('show')
    
})

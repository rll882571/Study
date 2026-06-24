const menuToggle = document.querySelector('.menu-toggle');
const menuNav = document.querySelector('.menu');
menuToggle.addEventListener('click',()=>{
    menuNav.classList.toggle('open');
    
});
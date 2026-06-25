const menuToggle = document.querySelector('.menu-toggle');
const menu = document.getElementById('nav-bar');
menuToggle.addEventListener('click',()=>{
menu.classList.toggle('open');
})
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.getElementById('link');
const adCard = document.querySelectorAll('.btn-add');
const contador = document.querySelector('#contador');
let totalContador = 0;

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('open');
});

// 1. Criamos a lista com o nome 'carrinho'
let carrinho = [];

adCard.forEach(bnt => {
    bnt.addEventListener('click', function() {
        const productName = this.getAttribute('data-nome');
        console.log("Você clicou em: " + productName);
        
        totalContador++;
        contador.innerHTML = totalContador;
        
        // 2. CORRIGIDO: Usando 'carrinho' aqui também!
        carrinho.push(productName);
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
    });
});
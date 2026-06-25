// 1. Seleciona os elementos que vamos usar
const botaoAbrir = document.getElementById('abrirCarrinho');
const botaoFechar = document.getElementById('fecharCarrinho');
const painel = document.getElementById('painelCarrinho');

// 2. Quando clicar no botão do carrinho, ADICIONA a classe 'aberta'
botaoAbrir.addEventListener('click', () => {
    painel.classList.add('aberta');
});

// 3. Quando clicar no 'X', REMOVE a classe 'aberta'
botaoFechar.addEventListener('click', () => {
    painel.classList.remove('aberta');
});
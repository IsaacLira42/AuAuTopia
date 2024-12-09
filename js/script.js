// Seleciona os elementos
const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');
const closeIcon = document.querySelector('.sidebar i.bi-x-lg');

// Função para abrir a sidebar
hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    hamburger.classList.toggle('active'); // Esconde o ícone de hambúrguer
});

// Função para fechar a sidebar
closeIcon.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    hamburger.classList.remove('active'); // Reexibe o ícone de hambúrguer
});

// Fechar a sidebar ao clicar na overlay
overlay.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    hamburger.classList.remove('active'); // Reexibe o ícone de hambúrguer
});
// Efeito de fade-in ao rolar a página

// Seleciona todos os elementos que devem ter a animação
const elementosParaAnimar = document.querySelectorAll('.fade-in');

// Configura o "observador" que vai ficar de olho nos elementos
const observer = new IntersectionObserver((entries) => {
    // Para cada elemento que o observador vê...
    entries.forEach(entry => {
        // Se o elemento está agora visível na tela...
        if (entry.isIntersecting) {
            // Adiciona a classe 'visible', que ativa a animação do CSS
            entry.target.classList.add('visible');
            // Opcional: Para de observar o elemento depois que ele já apareceu
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1 // A animação começa quando 10% do elemento estiver visível
});

// Pede ao observador para observar cada um dos elementos selecionados
elementosParaAnimar.forEach(el => {
    observer.observe(el);
});
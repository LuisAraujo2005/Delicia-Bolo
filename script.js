
document.addEventListener('DOMContentLoaded', () => {
  // 1. Menu Mobile Toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navbar = document.getElementById('navbar');

  menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('show');
  });

  // Fechar menu mobile ao clicar em um link
  document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('show');
    });
  });

  // 2. Filtro dos Produtos
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remover classe 'active' de todos os botões
      filterBtns.forEach(b => b.classList.remove('active'));
      // Adicionar 'active' ao botão clicado
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      productCards.forEach(card => {
        if (filterValue === 'todos' || card.getAttribute('data-category') === filterValue) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 3. Envio do Formulário de Contato para o WhatsApp
  const contactForm = document.getElementById('contactForm');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const mensagem = document.getElementById('mensagem').value;

    const telefoneLoja = '5586988562590'; // Número da loja da imagem

    const textoFormatado = `Olá, meu nome é *${nome}* (${telefone}).%0A%0A*Mensagem:* ${mensagem}`;
    const urlWhatsapp = `https://wa.me/${telefoneLoja}?text=${textoFormatado}`;

    window.open(urlWhatsapp, '_blank');
  });
});
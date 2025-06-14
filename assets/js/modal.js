document.addEventListener('DOMContentLoaded', function() {
  // Elementos dos modais
  const certificatesBtn = document.getElementById('certificates-btn');
  const certificatesModal = document.getElementById('certificates-modal');
  const projectsBtn = document.getElementById('projects-btn');
  const projectsModal = document.getElementById('projects-modal');
  const closeButtons = document.querySelectorAll('.close');
  
  // Modal de imagem expandida
  const imgModal = document.getElementById('imgModal');
  const expandedImg = document.getElementById('expandedImg');
  const imgClose = document.querySelector('.img-close');
  
  // Abrir modais
  if (certificatesBtn) {
    certificatesBtn.addEventListener('click', () => {
      certificatesModal.style.display = 'block';
    });
  }
  
  if (projectsBtn) {
    projectsBtn.addEventListener('click', () => {
      projectsModal.style.display = 'block';
    });
  }
  
  // Fechar modais
  closeButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      this.closest('.modal').style.display = 'none';
    });
  });
  
  // Fechar ao clicar fora do conteúdo
  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
      e.target.style.display = 'none';
    }
  });
  
  // Navegação entre itens
  document.querySelectorAll('.prev-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      alert('Funcionalidade de navegação será implementada em breve!');
    });
  });
  
  document.querySelectorAll('.next-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      alert('Funcionalidade de navegação será implementada em breve!');
    });
  });
  
  // Abrir imagem expandida
  document.querySelectorAll('.certificate-item img, .project-item img').forEach(img => {
    img.addEventListener('click', function() {
      expandedImg.src = this.src;
      imgModal.style.display = 'flex';
    });
  });
  
  // Fechar imagem expandida
  imgClose.addEventListener('click', function() {
    imgModal.style.display = 'none';
  });
  
  imgModal.addEventListener('click', function(e) {
    if (e.target === imgModal) {
      imgModal.style.display = 'none';
    }
  });
});
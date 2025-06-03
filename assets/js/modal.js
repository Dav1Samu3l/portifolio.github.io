
    // Simulação de funcionalidade dos modais
    document.addEventListener('DOMContentLoaded', function() {
      // Elementos dos modais
      const certificatesBtn = document.getElementById('certificates-btn');
      const certificatesModal = document.getElementById('certificates-modal');
      const projectsBtn = document.getElementById('projects-btn');
      const projectsModal = document.getElementById('projects-modal');
      const closeButtons = document.querySelectorAll('.close');
      
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
      
      // Navegação entre itens (simplificada)
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
    });
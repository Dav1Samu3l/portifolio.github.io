// Quando abrir o modal
document.body.classList.add('modal-open');

// Quando fechar o modal
document.body.classList.remove('modal-open');

// Pegar o modal
 const modal = document.getElementById("certificates-modal");
 const btn = document.getElementById("certificates-btn");
 const span = document.getElementsByClassName("close")[0];
 
 // Controles do carrossel
 const gallery = document.querySelector('.certificates-gallery');
 const prevBtn = document.querySelector('.prev-btn');
 const nextBtn = document.querySelector('.next-btn');
 const items = document.querySelectorAll('.certificate-item');
 let currentIndex = 0;
 
 // Abrir modal
 btn.onclick = function() {
   modal.style.display = "block";
   currentIndex = 0;
   scrollToItem(currentIndex);
 }
 
 // Fechar modal
 span.onclick = function() {
   modal.style.display = "none";
 }
 
 window.onclick = function(event) {
   if (event.target == modal) {
     modal.style.display = "none";
   }
 }
 
 // Navegação do carrossel
 function scrollToItem(index) {
   items[index].scrollIntoView({
     behavior: 'smooth',
     block: 'nearest',
     inline: 'start'
   });
 }
 
 prevBtn.addEventListener('click', () => {
   currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
   scrollToItem(currentIndex);
 });
 
 nextBtn.addEventListener('click', () => {
   currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
   scrollToItem(currentIndex);
 });
 
 // Atualiza o índice quando o usuário arrasta manualmente
 gallery.addEventListener('scroll', () => {
   const scrollPosition = gallery.scrollLeft;
   const itemWidth = items[0].clientWidth;
   currentIndex = Math.round(scrollPosition / itemWidth);
 });

 // Ao abrir o modal
modal.style.display = "block";
document.body.classList.add('modal-open');

// Ao fechar o modal
modal.style.display = "none";
document.body.classList.remove('modal-open');
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'});}));
// ==== Función para agrandar imágenes ====
document.querySelectorAll('img').forEach(img => {
  img.style.cursor = 'pointer';
  img.addEventListener('click', function () {
    const modal = document.getElementById('imgModal');
    const modalImg = document.getElementById('modalImg');
    const caption = document.getElementById('caption');
    
    modal.style.display = 'block';
    modalImg.src = this.src;
    caption.innerHTML = this.alt || '';
  });
});

// Cerrar el modal al hacer clic en la X
document.querySelector('.close').addEventListener('click', function () {
  document.getElementById('imgModal').style.display = 'none';
});

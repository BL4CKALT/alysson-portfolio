const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeLightbox = document.getElementById('closeLightbox');

document.querySelectorAll('.work').forEach(work => {
  work.addEventListener('click', () => {
    lightboxImg.src = work.dataset.img;
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
  });
});

function closeBox() {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  lightboxImg.src = '';
}

closeLightbox.addEventListener('click', closeBox);
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) closeBox();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeBox();
});

/* ============ Navegación móvil ============ */
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach((link) =>
    link.addEventListener('click', () => navLinks.classList.remove('open'))
  );
}

/* ============ Año en el footer ============ */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ============ Animación de aparición al hacer scroll ============ */
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 }
);
revealEls.forEach((el) => io.observe(el));

/* ============ Fallback de imágenes rotas ============ */
document.querySelectorAll('.project-media img').forEach((img) => {
  img.addEventListener('error', () => {
    const media = img.closest('.project-media');
    if (media) media.classList.add('is-error');
  });
});

/* ============ Lightbox ============ */
(function () {
  const lightbox = document.getElementById('lightbox');
  const imgEl = document.getElementById('lightboxImg');
  const captionEl = document.getElementById('lightboxCaption');
  const closeBtn = document.getElementById('lightboxClose');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');

  if (!lightbox) return;

  const gallery = Array.from(
    document.querySelectorAll('.project-media img:not(.is-error)')
  );
  let currentIndex = 0;

  function setImage(index) {
    currentIndex = (index + gallery.length) % gallery.length;
    const img = gallery[currentIndex];
    imgEl.src = img.src;
    imgEl.alt = img.alt;
    captionEl.textContent = img.alt || '';
  }

  function open(index) {
    setImage(index);
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function showPrev() { setImage(currentIndex - 1); }
  function showNext() { setImage(currentIndex + 1); }

  document.querySelectorAll('.project-media').forEach((media) => {
    const imgs = Array.from(media.querySelectorAll('img'));
    if (!imgs.length) return;
    media.addEventListener('click', (e) => {
      if (media.classList.contains('is-error')) return;
      const idx = gallery.indexOf(e.target);
      open(idx >= 0 ? idx : gallery.indexOf(imgs[0]));
    });
  });

  closeBtn.addEventListener('click', close);
  prevBtn.addEventListener('click', showPrev);
  nextBtn.addEventListener('click', showNext);

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) close();
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') showPrev();
    if (e.key === 'ArrowRight') showNext();
  });
})();

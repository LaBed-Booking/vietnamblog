document.addEventListener('DOMContentLoaded', () => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const targets = document.querySelectorAll('.journal-item, .gallery .g-figure, blockquote.pull');
  if (reduceMotion || !('IntersectionObserver' in window)) return;

  targets.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  });
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = 1;
        e.target.style.transform = 'translateY(0)';
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  targets.forEach(el => io.observe(el));
});

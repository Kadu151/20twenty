
// Navbar muda fundo e sombra ao scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 30) {
    navbar.classList.add('bg-black/70', 'shadow-md', 'backdrop-blur-md');
  } else {
    navbar.classList.remove('bg-black/70', 'shadow-md', 'backdrop-blur-md');
  }
});

// Animação do conteúdo hero ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  const heroContent = document.querySelector('.relative.z-10 > div');
  if (!heroContent) return;

  heroContent.style.opacity = 0;
  heroContent.style.transform = 'translateY(20px)';
  heroContent.style.transition = 'opacity 1.2s ease, transform 1.2s ease';

  setTimeout(() => {
    heroContent.style.opacity = 1;
    heroContent.style.transform = 'translateY(0)';
  }, 100);
});

// Animação fade-in + slide ao scroll para elementos com .animate-on-scroll
function animateOnScroll() {
  const elements = document.querySelectorAll('.animate-on-scroll');

  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    if (rect.top <= windowHeight * 0.85) {
      el.classList.add('fade-slide-in');
    }
  });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Parallax simples para elementos com classe .bg-fixed
window.addEventListener('scroll', () => {
  const parallaxBg = document.querySelector('.bg-fixed');
  if (!parallaxBg) return;

  const offset = window.pageYOffset;
  parallaxBg.style.backgroundPositionY = offset * 0.5 + 'px';
});

// Efeito pulse suave em botões com classe .pulse-hover (CSS deve estar na folha de estilos)
  const navbar = document.getElementById('navbar');
  const destaqueSection = document.querySelector('section.py-24'); // seção Destaques

  window.addEventListener('scroll', () => {
    const destaqueTop = destaqueSection.getBoundingClientRect().top;
    // Quando o topo da seção Destaques estiver visível no viewport (ex: topo da tela <= 100px)
    if (destaqueTop <= 100) {
      navbar.classList.add('dark-mode');
    } else {
      navbar.classList.remove('dark-mode');
    }
  });
    const toggle = document.getElementById('menuToggle');
  const menu = document.getElementById('mobileMenu');

  toggle.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });
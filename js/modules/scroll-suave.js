export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll(
    // eslint-disable-next-line comma-dangle
    '[data-menu="suave"] a[href^="#"]'
  );

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}

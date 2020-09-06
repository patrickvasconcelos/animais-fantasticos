import outsideClick from './outsideclick.js';

export default function initDropdownMenu() {
  const dropdownMenu = document.querySelectorAll('[data-dropdown]');
  function handleClick(event) {
    event.preventDefault();
    this.classList.add('ativo');
    outsideClick(this, ['click', 'touchstart'], () => {
      this.classList.remove('ativo');
    });
  }
  if (dropdownMenu) {
    dropdownMenu.forEach((menu) => {
      ['click', 'touchstart'].forEach((userEvent) => {
        menu.addEventListener(userEvent, handleClick);
      });
    });
  }
}

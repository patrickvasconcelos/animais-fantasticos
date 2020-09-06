import outsideClick from './outsideclick.js';

export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenu = document.querySelectorAll(dropdownMenus);

    if (events === undefined) this.events = ['click', 'touchstart'];
    else this.events = events;

    this.activeClass = 'ativo';
    this.ActiveDropdownMenu = this.ActiveDropdownMenu.bind(this);
  }

  ActiveDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  addDropdownMenusEvent() {
    this.dropdownMenu.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.ActiveDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenu) {
      this.addDropdownMenusEvent();
    }
  }
}

import outsideClick from "./outsideClick.js";

export default function initDropdownMenu() {
    const dropdownMenu = document.querySelectorAll("[data-dropdown]");
    if (dropdownMenu) {
        dropdownMenu.forEach((menu) => {
            ["click", "touchstart"].forEach((userEvent) => {
                menu.addEventListener(userEvent, handleClick);
            });
        });

        function handleClick(event) {
            event.preventDefault();
            this.classList.add("ativo");
            outsideClick(this, ["click", "touchstart"], () => {
                this.classList.remove("ativo");
            });
        }
    }
}

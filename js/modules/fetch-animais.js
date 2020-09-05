import initAnimaNumeros from "./anima-numero.js";

export default function initFetchAnimais() {
    function fetchAnimais(url) {
        const numerosGrid = document.querySelector(".numeros-grid");
        fetch(url)
            .then((response) => response.json())
            .then((animais) =>
                animais.forEach((animal) => {
                    console.log(animal);
                    numerosGrid.appendChild(createAnimal(animal));
                    initAnimaNumeros();
                })
            )
            .catch((error) => {
                console.error("Error:", error);
            });
    }

    function createAnimal(animal) {
        const div = document.createElement("div");
        div.classList.add("numero-animal");
        div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
        return div;
    }

    fetchAnimais("./animaisapi.json");
}

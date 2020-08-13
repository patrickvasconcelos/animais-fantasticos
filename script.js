function initTabNav() {
    const tabMenu = document.querySelectorAll(".js-tabmenu li");
    const tabContent = document.querySelectorAll(".js-tabcontent section");
    const activeClass = "ativo";

    if (tabMenu.length && tabContent.length) {
        tabContent[0].classList.add(activeClass);

        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove(activeClass);
            });
            tabContent[index].classList.add(activeClass);
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener("click", () => {
                activeTab(index);
            });
        });
    }
}

initTabNav();

function initAccodion() {
    const accordionList = document.querySelectorAll(".js-accordion dt");
    const activeClass = "ativo";

    if (accordionList.length) {
        accordionList[0].classList.add(activeClass);
        accordionList[0].nextElementSibling.classList.add(activeClass);

        function activeAccordion() {
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);
        }

        accordionList.forEach((item) => {
            item.addEventListener("click", activeAccordion);
        });
    }
}
initAccodion();
function initScrollSuave() {
    const linksInternos = document.querySelectorAll(".js-menu a[href^='#'");

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute("href");
        const section = document.querySelector(href);

        section.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });

        // modo alternativo
        // const topo = section.offsetTop;
        // console.log(section.offsetTop);
        // window.scrollTo({
        //     top: topo,
        //     behavior: "smooth",
        // });
    }

    linksInternos.forEach((link) => {
        link.addEventListener("click", scrollToSection);
    });
}

initScrollSuave();

function initAnimacaoScroll() {
    const sections = document.querySelectorAll(".js-scroll");

    if (sections.length) {
        const windowMetade = window.innerHeight * 0.6;

        function animaScroll() {
            sections.forEach((section) => {
                const sectionTop =
                    section.getBoundingClientRect().top - windowMetade;

                if (sectionTop < 0) {
                    section.classList.add("ativo");
                }
            });
        }

        animaScroll();
        window.addEventListener("scroll", animaScroll);
    }
}

initAnimacaoScroll();

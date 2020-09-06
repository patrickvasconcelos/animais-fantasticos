!function(t){var e={};function i(o){if(e[o])return e[o].exports;var s=e[o]={i:o,l:!1,exports:{}};return t[o].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=e,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(o,s,function(e){return t[e]}.bind(null,s));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){"use strict";i.r(e);function o(t,e,i){const o=document.documentElement;function s(n){t.contains(n.target)||(t.removeAttribute("data-outside"),e.forEach(t=>{o.removeEventListener(t,s)}),i())}t.hasAttribute("data-outside")||(e.forEach(t=>{setTimeout(()=>o.addEventListener(t,s))}),t.setAttribute("data-outside",""))}class s{constructor(t,e,i){this.numeros=document.querySelectorAll(t),this.observerTarget=document.querySelector(e),this.observerClass=i,this.handleMutation=this.handleMutation.bind(this)}static incrementarNumero(t){const e=+t.innerText,i=Math.floor(e/100);let o=0;const s=setInterval(()=>{o+=i,t.innerText=o,o>e&&(t.innerText=e,clearInterval(s))},25*Math.random())}animaNumeros(){this.numeros.forEach(t=>{this.constructor.incrementarNumero(t)})}handleMutation(t){t[0].target.classList.contains(this.observerClass)&&(this.observer.disconnect(),this.animaNumeros())}addMutationObserver(){this.observer=new MutationObserver(this.handleMutation),this.observer.observe(this.observerTarget,{attributes:!0})}init(){return this.numeros.length&&this.observerTarget&&this.addMutationObserver(),this}}new class{constructor(t,e){this.linksInternos=document.querySelectorAll(t),this.options=void 0===e?{behavior:"smooth",block:"start"}:e,this.scrollToSection=this.scrollToSection.bind(this)}scrollToSection(t){t.preventDefault();const e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)}addLinkEvent(){this.linksInternos.forEach(t=>{t.addEventListener("click",this.scrollToSection)})}init(){this.linksInternos.length&&this.addLinkEvent()}}('[data-menu="suave"] a[href^="#"]').init();new class{constructor(t){this.accordionList=document.querySelectorAll(t),this.activeClass="ativo"}toggleAccordion(t){t.classList.toggle(this.activeClass),t.nextElementSibling.classList.toggle(this.activeClass)}addAccordionEvent(){this.accordionList.forEach(t=>{t.addEventListener("click",()=>this.toggleAccordion(t))})}init(){return this.accordionList.length&&(this.toggleAccordion(this.accordionList[0]),this.addAccordionEvent()),this}}('[data-anime="accordion"] dt').init();new class{constructor(t,e){this.tabMenu=document.querySelectorAll(t),this.tabContent=document.querySelectorAll(e),this.activeClass="ativo"}activeTab(t){this.tabContent.forEach(t=>{t.classList.remove(this.activeClass)});const e=this.tabContent[t].dataset.anime;this.tabContent[t].classList.add(this.activeClass,e)}addTabEvent(){this.tabMenu.forEach((t,e)=>{t.addEventListener("click",()=>{this.activeTab(e)})})}init(){return this.tabMenu.length&&this.tabContent.length&&(this.activeTab(0),this.addTabEvent()),this}}('[data-tab="menu"] li','[data-tab="content"] section').init();new class{constructor(t,e,i){this.botaoAbrir=document.querySelector(t),this.botaoFechar=document.querySelector(e),this.containerModal=document.querySelector(i),this.eventToggleModal=this.eventToggleModal.bind(this),this.clickForaModal=this.clickForaModal.bind(this)}toggleModal(){this.containerModal.classList.toggle("ativo")}eventToggleModal(t){t.preventDefault(),this.toggleModal()}clickForaModal(t){t.target===this.containerModal&&this.toggleModal()}init(){return this.botaoAbrir&&this.botaoFechar&&this.containerModal&&(this.botaoAbrir.addEventListener("click",this.eventToggleModal),this.botaoFechar.addEventListener("click",this.eventToggleModal),this.containerModal.addEventListener("click",this.clickForaModal)),this}}('[data-modal="abrir"]','[data-modal="fechar"]','[data-modal="container"]').init();new class{constructor(t){this.tooltips=document.querySelectorAll(t),this.onMouseLeave=this.onMouseLeave.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseOver=this.onMouseOver.bind(this)}onMouseMove(t){this.tooltipBox.style.top=t.pageY+20+"px",t.pageX+240>window.innerWidth?this.tooltipBox.style.left=t.pageX-190+"px":this.tooltipBox.style.left=t.pageX+20+"px"}onMouseLeave(t){this.tooltipBox.remove(),t.currentTarget.removeEventListener("mouseleave",this.onMouseLeave),t.currentTarget.removeEventListener("mousemove",this.onMouseMove)}criarTooltipBox(t){const e=document.createElement("div"),i=t.getAttribute("aria-label");e.classList.add("tooltip"),e.innerText=i,document.body.appendChild(e),this.tooltipBox=e}onMouseOver(t){this.criarTooltipBox(t.currentTarget),t.currentTarget.addEventListener("mouseleave",this.onMouseLeave),t.currentTarget.addEventListener("mousemove",this.onMouseMove)}addTooltipsEvent(){this.tooltips.forEach(t=>{t.addEventListener("mouseover",this.onMouseOver)})}init(){return this.tooltips&&this.addTooltipsEvent(),this}}("[data-tooltip]").init();new class{constructor(t){this.sections=document.querySelectorAll(t),this.windowMetade=.6*window.innerHeight,this.checkDistance=function(t,e){let i;return(...o)=>{i&&clearTimeout(i),i=setTimeout(()=>{t(...o),i=null},e)}}(this.checkDistance.bind(this),50)}getDistance(){this.distance=[...this.sections].map(t=>({element:t,offset:Math.floor(t.offsetTop-this.windowMetade)}))}checkDistance(){this.distance.forEach(t=>{window.pageYOffset>t.offset?t.element.classList.add("ativo"):t.element.classList.contains("ativo")&&t.element.classList.remove("ativo")})}init(){return this.sections.length&&(this.getDistance(),this.checkDistance(),window.addEventListener("scroll",this.checkDistance)),this}}('[data-anime="scroll"]').init();new class{constructor(t,e){this.dropdownMenu=document.querySelectorAll(t),this.events=void 0===e?["click","touchstart"]:e,this.activeClass="ativo",this.ActiveDropdownMenu=this.ActiveDropdownMenu.bind(this)}ActiveDropdownMenu(t){t.preventDefault();const e=t.currentTarget;e.classList.add(this.activeClass),o(e,this.events,()=>{e.classList.remove(this.activeClass)})}addDropdownMenusEvent(){this.dropdownMenu.forEach(t=>{this.events.forEach(e=>{t.addEventListener(e,this.ActiveDropdownMenu)})})}init(){this.dropdownMenu&&this.addDropdownMenusEvent()}}("[data-dropdown]").init();new class{constructor(t,e,i,o){this.menuButton=document.querySelector(t),this.menuButtonHamburger=document.querySelector(e),this.menuList=document.querySelector(i),this.events=void 0===o?["click","touchstart"]:o,this.activeClass="active",this.openMenu=this.openMenu.bind(this)}openMenu(){this.menuList.classList.add(this.activeClass),this.menuButton.classList.add(this.activeClass),this.menuButtonHamburger.classList.add(this.activeClass),o(this.menuList,this.events,()=>{this.menuList.classList.remove(this.activeClass),this.menuButton.classList.remove(this.activeClass),this.menuButtonHamburger.classList.remove(this.activeClass)})}addMenuMobileEvents(){this.events.forEach(t=>{this.menuButton.addEventListener(t,this.openMenu)})}init(){this.menuButton&&this.menuList&&this.addMenuMobileEvents()}}('[data-menu="button"]',".contorno-menu",'[data-menu="list"]').init();var n;new class{constructor(t){this.funcionamento=document.querySelector(t),this.activeClass="aberto"}dadosFuncionamento(){this.diasSemana=this.funcionamento.dataset.semana.split(",").map(Number),this.horarioSemana=this.funcionamento.dataset.horario.split(",").map(Number)}dadosAgora(){this.dataAgora=new Date,this.diaAgora=this.dataAgora.getDay(),this.horarioAgora=this.dataAgora.getUTCHours()-3}estaAberto(){const t=-1!==this.diasSemana.indexOf(this.diaAgora),e=this.horarioAgora>=this.horarioSemana[0]&&this.horarioAgora<=this.horarioSemana[1];return t&&e}ativaAberto(){this.estaAberto()&&this.funcionamento.classList.add(this.activeClass)}init(){return this.funcionamento&&(this.dadosFuncionamento(),this.dadosAgora(),this.ativaAberto()),this}}("[data-semana]").init(),function(t,e){const i=document.querySelector(e);function o(t){const e=function(t){const e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML=`<h3>${t.especie}</h3><span data-numero>${t.total}</span>`,e}(t);i.appendChild(e)}(async function(){try{const e=await fetch(t);(await e.json()).forEach(t=>o(t)),new s("[data-numero]",".numeros","ativo").init()}catch(t){console.error(t)}})()}("../../animaisapi.json",".numeros-grid"),n=".btc-preco",fetch("https://blockchain.info/ticker").then(t=>t.json()).then(t=>{document.querySelector(n).innerText=(1e3/t.BRL.sell).toFixed(4).replace(".",",")}).catch(t=>{console.log(Error(t))})}]);
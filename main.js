!function(t){var e={};function o(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e,o){"use strict";o.r(e);function n(t,e,o){const n=document.documentElement;function i(s){t.contains(s.target)||(t.removeAttribute("data-outside"),e.forEach(t=>{n.removeEventListener(t,i)}),o())}t.hasAttribute("data-outside")||(e.forEach(t=>{setTimeout(()=>n.addEventListener(t,i))}),t.setAttribute("data-outside",""))}class i{constructor(t,e,o){this.numeros=document.querySelectorAll(t),this.observerTarget=document.querySelector(e),this.observerClass=o,this.handleMutation=this.handleMutation.bind(this)}static incrementarNumero(t){const e=+t.innerText,o=Math.floor(e/100);let n=0;const i=setInterval(()=>{n+=o,t.innerText=n,n>e&&(t.innerText=e,clearInterval(i))},25*Math.random())}animaNumeros(){this.numeros.forEach(t=>{this.constructor.incrementarNumero(t)})}handleMutation(t){t[0].target.classList.contains(this.observerClass)&&(this.observer.disconnect(),this.animaNumeros())}addMutationObserver(){this.observer=new MutationObserver(this.handleMutation),this.observer.observe(this.observerTarget,{attributes:!0})}init(){return this.numeros.length&&this.observerTarget&&this.addMutationObserver(),this}}new class{constructor(t,e){this.linksInternos=document.querySelectorAll(t),this.options=void 0===e?{behavior:"smooth",block:"start"}:e,this.scrollToSection=this.scrollToSection.bind(this)}scrollToSection(t){t.preventDefault();const e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)}addLinkEvent(){this.linksInternos.forEach(t=>{t.addEventListener("click",this.scrollToSection)})}init(){this.linksInternos.length&&this.addLinkEvent()}}('[data-menu="suave"] a[href^="#"]').init();new class{constructor(t){this.accordionList=document.querySelectorAll(t),this.activeClass="ativo"}toggleAccordion(t){t.classList.toggle(this.activeClass),t.nextElementSibling.classList.toggle(this.activeClass)}addAccordionEvent(){this.accordionList.forEach(t=>{t.addEventListener("click",()=>this.toggleAccordion(t))})}init(){return this.accordionList.length&&(this.toggleAccordion(this.accordionList[0]),this.addAccordionEvent()),this}}('[data-anime="accordion"] dt').init();new class{constructor(t,e){this.tabMenu=document.querySelectorAll(t),this.tabContent=document.querySelectorAll(e),this.activeClass="ativo"}activeTab(t){this.tabContent.forEach(t=>{t.classList.remove(this.activeClass)});const e=this.tabContent[t].dataset.anime;this.tabContent[t].classList.add(this.activeClass,e)}addTabEvent(){this.tabMenu.forEach((t,e)=>{t.addEventListener("click",()=>{this.activeTab(e)})})}init(){return this.tabMenu.length&&this.tabContent.length&&(this.activeTab(0),this.addTabEvent()),this}}('[data-tab="menu"] li','[data-tab="content"] section').init();new class{constructor(t,e,o){this.botaoAbrir=document.querySelector(t),this.botaoFechar=document.querySelector(e),this.containerModal=document.querySelector(o),this.eventToggleModal=this.eventToggleModal.bind(this),this.clickForaModal=this.clickForaModal.bind(this)}toggleModal(){this.containerModal.classList.toggle("ativo")}eventToggleModal(t){t.preventDefault(),this.toggleModal()}clickForaModal(t){t.target===this.containerModal&&this.toggleModal()}init(){return this.botaoAbrir&&this.botaoFechar&&this.containerModal&&(this.botaoAbrir.addEventListener("click",this.eventToggleModal),this.botaoFechar.addEventListener("click",this.eventToggleModal),this.containerModal.addEventListener("click",this.clickForaModal)),this}}('[data-modal="abrir"]','[data-modal="fechar"]','[data-modal="container"]').init();new class{constructor(t){this.tooltips=document.querySelectorAll(t),this.onMouseLeave=this.onMouseLeave.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseOver=this.onMouseOver.bind(this)}onMouseMove(t){this.tooltipBox.style.top=t.pageY+20+"px",t.pageX+240>window.innerWidth?this.tooltipBox.style.left=t.pageX-190+"px":this.tooltipBox.style.left=t.pageX+20+"px"}onMouseLeave(t){this.tooltipBox.remove(),t.currentTarget.removeEventListener("mouseleave",this.onMouseLeave),t.currentTarget.removeEventListener("mousemove",this.onMouseMove)}criarTooltipBox(t){const e=document.createElement("div"),o=t.getAttribute("aria-label");e.classList.add("tooltip"),e.innerText=o,document.body.appendChild(e),this.tooltipBox=e}onMouseOver(t){this.criarTooltipBox(t.currentTarget),t.currentTarget.addEventListener("mouseleave",this.onMouseLeave),t.currentTarget.addEventListener("mousemove",this.onMouseMove)}addTooltipsEvent(){this.tooltips.forEach(t=>{t.addEventListener("mouseover",this.onMouseOver)})}init(){return this.tooltips&&this.addTooltipsEvent(),this}}("[data-tooltip]").init(),function(){const t=document.querySelectorAll("[data-dropdown]");function e(t){t.preventDefault(),this.classList.add("ativo"),n(this,["click","touchstart"],()=>{this.classList.remove("ativo")})}t&&t.forEach(t=>{["click","touchstart"].forEach(o=>{t.addEventListener(o,e)})})}(),function(){const t=document.querySelector('[data-menu="button"]'),e=document.querySelector(".contorno-menu"),o=document.querySelector('[data-menu="list"]'),i=["click","touchstart"];function s(){o.classList.add("active"),t.classList.add("active"),e.classList.add("active"),n(o,i,()=>{o.classList.remove("active"),t.classList.remove("active"),e.classList.remove("active")})}t&&i.forEach(e=>t.addEventListener(e,s))}(),function(){const t=document.querySelector("[data-semana]"),e=t.dataset.semana.split(",").map(Number),o=t.dataset.horario.split(",").map(Number),n=new Date,i=n.getDay(),s=n.getHours(),a=-1!==e.indexOf(i),r=s>=o[0]&&s<=o[1];a&&r&&t.classList.add("aberto")}(),function(t,e){const o=document.querySelector(e);function n(t){const e=function(t){const e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML=`<h3>${t.especie}</h3><span data-numero>${t.total}</span>`,e}(t);o.appendChild(e)}(async function(){try{const e=await fetch(t);(await e.json()).forEach(t=>n(t)),new i("[data-numero]",".numeros","ativo").init()}catch(t){console.error(t)}})()}("../../animaisapi.json",".numeros-grid"),fetch("https://blockchain.info/ticker").then(t=>t.json()).then(t=>{document.querySelector(".btc-preco").innerText=(1e3/t.BRL.sell).toFixed(4).replace(".",",")}).catch(t=>{console.log(Error(t))}),function(){const t=document.querySelectorAll('[data-anime="scroll"]'),e=.6*window.innerHeight;function o(){t.forEach(t=>{t.getBoundingClientRect().top-e<0?t.classList.add("ativo"):t.classList.contains("ativo")&&t.classList.remove("ativo")})}t.length&&(o(),window.addEventListener("scroll",o))}()}]);
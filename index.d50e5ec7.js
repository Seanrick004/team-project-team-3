var e;(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),n=()=>{const o="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!o),e.classList.toggle("is-open")};t.addEventListener("click",n),o.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",(o=>{o.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1))}));document.querySelectorAll(".js-anchor-link").forEach((e=>{e.addEventListener("click",n)}))})(),"function"!=typeof(e=window.Element.prototype).matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null}),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".js-open-modal"),t=document.querySelector(".js-overlay-modal"),o=document.querySelectorAll(".js-modal-close");e.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var o=this.getAttribute("data-modal");document.querySelector('.modal[data-modal="'+o+'"]').classList.add("active"),t.classList.add("active"),document.body.style.overflow="hidden"}))})),o.forEach((function(e){e.addEventListener("click",(function(e){this.closest(".modal").classList.remove("active"),t.classList.remove("active"),document.body.style.overflow=""}))})),document.body.addEventListener("keyup",(function(e){27==e.keyCode&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))}),!1),t.addEventListener("click",(function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active"),document.body.style.overflow=""}))}));new Swiper(".swiper-rew",{slidesPerView:1,spaceBetween:28,breakpoints:{768:{slidesPerView:2,spaceBetween:16},1200:{slidesPerView:3,spaceBetween:28}},pagination:{el:".swiper-pagination-review",clickable:!0}}),new Swiper(".swiper",{slidesPerView:1,spaceBetween:0,loop:!0,breakpoints:{375:{slidesPerView:1,spaceBetween:0},768:{slidesPerView:2.46,spaceBetween:18},1200:{slidesPerView:4,spaceBetween:18}},pagination:{el:".swiper-pagination",clickable:!0}});
//# sourceMappingURL=index.d50e5ec7.js.map

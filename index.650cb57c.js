!function(){var e,t,o,n;e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),n=function(){var o="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!o),e.classList.toggle("is-open")},t.addEventListener("click",n),o.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(o){o.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1))})),document.querySelectorAll(".js-anchor-link").forEach((function(e){e.addEventListener("click",n)}));var c,a=document.getElementById("buy-modal__form"),r=document.getElementById("buy-modal-form__btn"),d=document.querySelectorAll(".buy-modal-checkbox");a.addEventListener("submit",(function(e){for(var t=!1,o=0;o<d.length;o++)if(d[o].checked){t=!0;break}t||(r.disabled=!0,e.preventDefault())}));for(var i=0;i<d.length;i++)d[i].addEventListener("change",(function(){for(var e=!1,t=0;t<d.length;t++)if(d[t].checked){e=!0;break}r.disabled=!e}));"function"!=typeof(c=window.Element.prototype).matches&&(c.matches=c.msMatchesSelector||c.mozMatchesSelector||c.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof c.closest&&(c.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null}),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".js-open-modal"),t=document.querySelector(".js-overlay-modal"),o=document.querySelectorAll(".js-modal-close");e.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var o=this.getAttribute("data-modal");document.querySelector('.modal[data-modal="'+o+'"]').classList.add("active"),t.classList.add("active"),document.body.style.overflow="hidden"}))})),o.forEach((function(e){e.addEventListener("click",(function(e){this.closest(".modal").classList.remove("active"),t.classList.remove("active"),document.body.style.overflow=""}))})),document.body.addEventListener("keyup",(function(e){27==e.keyCode&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))}),!1),t.addEventListener("click",(function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active"),document.body.style.overflow=""}))}))}();
//# sourceMappingURL=index.650cb57c.js.map

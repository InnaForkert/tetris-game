!function(){var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},e={},i=n.parcelRequired70e;null==i&&((i=function(n){if(n in t)return t[n].exports;if(n in e){var i=e[n];delete e[n];var o={id:n,exports:{}};return t[n]=o,i.call(o.exports,o,o.exports),o.exports}var s=new Error("Cannot find module '"+n+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(n,t){e[n]=t},n.parcelRequired70e=i);var o=i("4Z32C"),s={rightTop:-49,leftTop:-51,leftBottom:49,rightBottom:51};playground.addEventListener("mouseover",(function(n){var t=g(n)%50;(function(n){f=[r[n-3],r[n-2],r[n-1],r[n],r[n+1],r[n+2],r[n+3]]})(t),f.forEach((function(n){n&&n.classList.add("chosen-div")})),L||y(u=3150+t)})),playground.addEventListener("mouseout",(function(n){var t=g(n)%50;f.forEach((function(n){n&&n.classList.remove("chosen-div")})),E(3150+t)})),playground.addEventListener("click",T);var r=[],c=document.querySelectorAll(".small-div");c.forEach((function(n){n.dataset.id>3199&&r.push(n)}));var a,u,d,f,l=s.rightTop,v=s.leftTop,h=s.leftBottom,p=s.rightBottom,L=!1,m=0;function g(n){return n.target.dataset.id}function y(n){c[n].classList.add("chosen-div")}function E(n){c[n].classList.remove("chosen-div")}function T(){L=!0,a=Number(o.speedForm),playground.removeEventListener("click",T),d=setInterval((function(){return E(u),function(){if(u>3150&&b>0){if(c[u+b].classList.contains("chosen-div"))return c[u+b].dataset.id===f[0].dataset.id?k(v):c[u+b].dataset.id===f[6].dataset.id?k(l):k(b===h?v:l);y(u+=b),setTimeout((function(){E(u),alert("You lose!")}),50),clearInterval(d),playground.addEventListener("click",T),L=!1,q.innerHTML="0"}}()||function(){if(u<50)return k(b===l?p:h)}()||(u%50==49&&u+b!==3249?k(b>0?h:v):u%50==0&&u+b!==3200?k(b>0?p:l):void 0)||x(),void w()}),a)}var b=l;function w(){c[u+b].classList.contains("chosen-div")&&x(),y(u+=b)}function x(){var n=function(){if(c[u+b].classList.contains("chosen-div")||c[u-50].classList.contains("chosen-div")&&b<0||c[u+50].classList.contains("chosen-div")&&b>0)switch(m+=2,q.textContent="".concat(Math.floor(m*function(n){switch(n){case 30:return 3;case 40:return 2;case 50:return 1.5;case 60:return.5;default:return 1}}(a))),b){case l:!function(){if(c[u-50].classList.contains("chosen-div"))return E(u-50),k(p);E(u+b),k(h)}();break;case h:!function(){if(c[u+50].classList.contains("chosen-div"))return E(u+50),k(v);E(u+b),k(l)}();break;case p:!function(){if(c[u+50].classList.contains("chosen-div"))return E(u+50),k(l);E(u+b),k(v)}();break;case v:!function(){if(c[u-50].classList.contains("chosen-div"))return E(u-50),k(h);E(u+b),k(p)}()}}(),t=function(){if(c[u-1].classList.contains("chosen-div")&&(b===v||b===h))return E(u-1),E(u+b-1),k(b===h?p:l);if(c[u+1].classList.contains("chosen-div")&&(b===l||b===p))return E(u+1),E(u+b+1),k(b===p?h:v)}();return n||t}function k(n){return b=n,!0}var q=document.querySelector(".score");q.textContent=m}();
//# sourceMappingURL=index.a0769642.js.map

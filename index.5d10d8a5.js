const e=document.querySelector(".form-js"),t=document.querySelector("#playground"),o={};e.addEventListener("input",(function(e){let t=localStorage.getItem("user-config");t=t?JSON.parse(t):{},t[e.target.name]=e.target.value,localStorage.setItem("user-config",JSON.stringify(t))})),e.addEventListener("submit",(function(r){r.preventDefault();new FormData(e).forEach(((e,t)=>{o[t]=e})),console.log(o),r.target.reset(),localStorage.removeItem("user-config"),e.classList.add("is-hidden"),t.classList.remove("is-hidden")})),function(){let t=localStorage.getItem("user-config");t&&(t=JSON.parse(t),Object.entries(t).forEach((([t,o])=>{e.elements[t].value=o})))}();
//# sourceMappingURL=index.5d10d8a5.js.map

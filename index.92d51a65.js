playground.addEventListener("mouseover",(function(e){const s=e.target.dataset.id%50;[t[s-3],t[s-2],t[s-1],t[s],t[s+1],t[s+2],t[s+3]].forEach((t=>{t&&t.classList.add("chosen-div")}))})),playground.addEventListener("mouseout",(function(e){const s=e.target.dataset.id%50;[t[s-3],t[s-2],t[s-1],t[s],t[s+1],t[s+2],t[s+3]].forEach((t=>{t&&t.classList.remove("chosen-div")}))}));const t=[];document.querySelectorAll(".small-div").forEach((e=>{e.dataset.id>3199&&t.push(e)}));
//# sourceMappingURL=index.92d51a65.js.map

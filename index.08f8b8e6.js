const e=document.querySelector("#playground");!function(){const t=[];for(let e=0;e<3250;e+=1){const d=document.createElement("div");d.classList.add("small-div"),d.dataset.id=e,t.push(d)}null==e||e.append(...t);const d=document.querySelectorAll(".small-div");d.forEach(((e,t)=>{Math.random()>.5&&t<2e3&&t>1500&&e.classList.add("chosen-div")}))}();
//# sourceMappingURL=index.08f8b8e6.js.map

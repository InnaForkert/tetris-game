playground.addEventListener("mouseover",(function(s){const t=o(s)%50;i(t),a.forEach((s=>{s&&s.classList.add("chosen-div")})),c||(d(3150+t),e=3150+t)})),playground.addEventListener("mouseout",(function(s){const t=o(s)%50;i(t),a.forEach((s=>{s&&s.classList.remove("chosen-div")})),l(3150+t)})),playground.addEventListener("click",r);const s=[],t=document.querySelectorAll(".small-div");t.forEach((t=>{t.dataset.id>3199&&s.push(t)}));let e,n,a,c=!1;function i(t){a=[s[t-3],s[t-2],s[t-1],s[t],s[t+1],s[t+2],s[t+3]]}function o(s){return s.target.dataset.id}function d(s){t[s].classList.add("chosen-div")}function l(s){t[s].classList.remove("chosen-div")}function r(){c=!0,playground.removeEventListener("click",r),n=setInterval((()=>(l(e),e>3150&&v>0&&(t[e+v].classList.contains("chosen-div")?v=t[e+v].dataset.id===a[0].dataset.id?51===v?-51:-49:t[e+v].dataset.id===a[6].dataset.id?49===v?-49:-51:49===v?-51:-49:(d(e+v),e+=v,setTimeout((()=>{l(e),alert("You lose!")}),50),clearInterval(n),playground.addEventListener("click",r),c=!1)),e<50&&(v=-49===v?51:49),function(s){if(t[s+v].classList.contains("chosen-div"))switch(v){case-49:t[e-50].classList.contains("chosen-div")?(l(e-50),v=51):(l(e-49),v=-49);break;case 49:t[e+50].classList.contains("chosen-div")?(l(e+50),v=-51):(l(e+49),v=-49);break;case 51:t[e+50].classList.contains("chosen-div")?(l(e+50),v=-49):(l(e+51),v=-51);break;case-51:t[e-50].classList.contains("chosen-div")?(l(e-50),v=49):(l(e-51),v=51)}}(e),e%50==49?v=v>0?49:-51:e%50==0&&(v=v>0?51:-49),e+=v,void d(e))),50)}let v=-49;
//# sourceMappingURL=index.d9000f06.js.map

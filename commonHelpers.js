import"./assets/modulepreload-polyfill-ec808ebb.js";import{f as h}from"./assets/vendor-992cd48f.js";const y=document.querySelector("#datetime-picker"),c=document.querySelector("[data-start]"),r=document.querySelector(".timer");c.disabled=!0;let s,d;const w={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){if(s=t[0],s<=new Date){window.alert("Please choose a date in the future");return}else c.disabled=!1}};h(y,w);c.addEventListener("click",()=>{const t=new Date().getTime(),e=s.getTime()-t;e>0?S(e):window.alert("Please choose a date in the future")});function S(t){d=setInterval(()=>{const{days:e,hours:o,minutes:n,seconds:u}=q(t);p(e,o,n,u),t-=1e3,t<0&&clearInterval(d)},1e3)}function p(t,e,o,n){r.querySelector("[data-days]").textContent=a(t),r.querySelector("[data-hours]").textContent=a(e),r.querySelector("[data-minutes]").textContent=a(o),r.querySelector("[data-seconds]").textContent=a(n)}function a(t){return t<10?`0${t}`:t}function q(t){const i=Math.floor(t/864e5),l=Math.floor(t%864e5/36e5),m=Math.floor(t%864e5%36e5/6e4),f=Math.floor(t%864e5%36e5%6e4/1e3);return{days:i,hours:l,minutes:m,seconds:f}}
//# sourceMappingURL=commonHelpers.js.map

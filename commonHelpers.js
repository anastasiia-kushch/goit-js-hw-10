import"./assets/modulepreload-polyfill-ec808ebb.js";import{f as h,i as y}from"./assets/vendor-651d7991.js";const p=document.querySelector("#datetime-picker"),a=document.querySelector("[data-start]"),r=document.querySelector(".timer");a.disabled=!0;let c,i;const C={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){if(c=t[0],c<=new Date){y.show({message:"Please choose a date in the future",color:"#fe5449",messageColor:"#ffffff",position:"topCenter"});return}else a.disabled=!1}};h(p,C);a.addEventListener("click",()=>{a.disabled=!0;const t=Date.now(),e=c-t;e>0&&S(e)});function S(t){i=setInterval(()=>{const{days:e,hours:o,minutes:n,seconds:u}=w(t);q(e,o,n,u),t-=1e3,t<0&&clearInterval(i)},1e3)}function q(t,e,o,n){r.querySelector("[data-days]").textContent=s(t),r.querySelector("[data-hours]").textContent=s(e),r.querySelector("[data-minutes]").textContent=s(o),r.querySelector("[data-seconds]").textContent=s(n)}function s(t){return t<10?`0${t}`:t}function w(t){const d=Math.floor(t/864e5),l=Math.floor(t%864e5/36e5),f=Math.floor(t%864e5%36e5/6e4),m=Math.floor(t%864e5%36e5%6e4/1e3);return{days:d,hours:l,minutes:f,seconds:m}}
//# sourceMappingURL=commonHelpers.js.map

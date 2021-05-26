(()=>{"use strict";var e=document.querySelector(".base__select"),t=document.querySelector(".symbol__select"),r=document.querySelector(".base__input"),a=document.querySelector(".symbol__input"),n=document.querySelector(".base__arrow"),o=document.querySelector(".symbol__arrow"),c={base:1,symbol:0};function s(e){r.value=Number(e.toFixed(4))}var u=["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BRL","BSD","BTC","BTN","BWP","BYN","BYR","BZD","CAD","CDF","CHF","CLF","CLP","CNY","COP","CRC","CUC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","EUR","FJD","FKP","GBP","GEL","GGP","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","IMP","INR","IQD","IRR","ISK","JEP","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LVL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRO","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLL","SOS","SRD","STD","SVC","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USD","UYU","UZS","VEF","VND","VUV","WST","XAF","XAG","XCD","XDR","XOF","XPF","YER","ZAR","ZMK","ZMW","ZWL"];function l(r){u.forEach((function(a){var n=document.createElement("option");switch(n.setAttribute("value","".concat(a)),r){case"base":"USD"===a&&n.setAttribute("selected",""),e.append(n);break;case"symbol":"BYN"===a&&n.setAttribute("selected",""),t.append(n)}n.textContent=a}))}var i=document.querySelector(".error"),d=[i,r,a,e,t],b=["error--visible","base__input-error","symbol__input-error","base__select-error","symbol__select-error"];function D(e){switch(e){case void 0:case"base":var t=Number(r.value)*c.symbol;n=t,a.value=Number(n.toFixed(4));break;case"symbol":s(c.base/c.symbol*Number(a.value))}var n}function v(e,t){var n="https://free.currconv.com/api/v7/convert?q=".concat(e,"_").concat(t,"&compact=ultra&apiKey=").concat("bd32eedb8e3473a1406a");fetch(n).then((function(n){n.json().then((function(e){if(0===Object.keys(e).length||e.error){var t=void 0!==e.error?e.error:"Request Error. Please try again later.";return Promise.reject(new Error(t))}return e})).then((function(n){var o=n["".concat(e,"_").concat(t)];""===r.value&&s(1),c.symbol=o,D(),function(){for(var e=0;e<d.length;e++)d[e].classList.remove(b[e]);r.disabled=!1,a.disabled=!1,setTimeout((function(){return i.innerHTML="&nbsp;"}),600)}()})).catch((function(e){!function(e){i.innerHTML=e;for(var t=0;t<d.length;t++)d[t].classList.add(b[t]);r.disabled=!0,a.disabled=!0,r.value="",a.value=""}(e),e(e)}))}))}var m,S,y,L,N,R,f=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],M=["January","February","March","April","May","June","July","August","September","October","November","December"];m=document.querySelector(".date"),S=new Date,y=S.getDay(),L=S.getDate(),N=S.getMonth(),R=S.getFullYear(),m.textContent="For today, ".concat(f[y],", \n  ").concat(M[N]," ").concat(L,", ").concat(R),l("base"),l("symbol"),v("USD","BYN");var A=!1;function P(e){(A=!A)?function(e){switch(e){case"base":n.classList.add("arrow--rotate");break;case"symbol":o.classList.add("arrow--rotate")}}(e):"base"===e?n.classList.remove("arrow--rotate"):o.classList.remove("arrow--rotate")}function B(){v(e.value,t.value)}function K(e){for(;"0"===r.value.charAt(0)&&1!==r.value.length&&"."!=r.value.charAt(1);)r.value=r.value.substr(1,r.value.length-1);switch(e){case"base":if(""===r.value)return a.value="",null;D(e);break;case"symbol":if(""===a.value)return r.value="",null;D(e)}}e.addEventListener("click",(function(){return P("base")})),t.addEventListener("click",(function(){return P("symbol")})),e.addEventListener("change",(function(){return B()})),t.addEventListener("change",(function(){return B()})),r.addEventListener("input",(function(){return K("base")})),a.addEventListener("input",(function(){return K("symbol")})),window.addEventListener("click",(function(e){e.target.className.includes("arrow")||e.target.className.includes("select")||(A=!1,n.classList.remove("arrow--rotate"),o.classList.remove("arrow--rotate"))}))})();
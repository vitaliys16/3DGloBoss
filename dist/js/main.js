(()=>{"use strict";(e=>{console.log(e);const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),i=document.getElementById("timer-seconds"),o=()=>{let t=(new Date(e).getTime()-(new Date).getTime())/1e3;return{timeRemaining:t,hours:Math.floor(t/60/60),minutes:Math.floor(t/60%60),seconds:Math.floor(t%60)}},s=()=>{let e=o();0===e.timeRemaining||e.timeRemaining<0?console.log("Время вышло"):(t.textContent=e.hours,n.textContent=e.minutes,i.textContent=e.seconds,t.innerHTML=("0"+e.hours).slice(-2),n.innerHTML=("0"+e.minutes).slice(-2),i.innerHTML=("0"+e.seconds).slice(-2))};s();let m=setInterval((()=>{let e=o();0===e.timeRemaining||e.timeRemaining<0?(console.log("Время вышло"),clearInterval(m)):s()}),1e3)})("16 january 2022 22:06:00")})();
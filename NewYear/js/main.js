(()=>{"use strict";(e=>{console.log(e);const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds");let r=document.getElementById("weekday"),s=document.getElementById("new-year"),i=document.getElementById("time");const l=()=>{let t=(new Date(e).getTime()-(new Date).getTime())/1e3;return{timeRemaining:t,days:Math.floor(t/60/60/24),hours:Math.floor(t/60/60),minutes:Math.floor(t/60%60),seconds:Math.floor(t%60)}},a=()=>{let e=new Date,t=e.getHours(),n=e.getDay();t>=5&&t<11?i.innerHTML="Доброе утро":t>=11&&t<16?i.innerHTML="Добрый день":t>=16&&t<23?i.innerHTML="Добрый вечер":t>=0&&t<5?i.innerHTML="Доброй ночи":(i.innerHTML="Я не вижу время суток (",console.log(t)),r.innerHTML="Сегодня: "+["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"][n]},d=()=>{let e=l(),r=new Date,i=r.getHours(),a=r.getMinutes(),d=r.getSeconds();t.textContent=i,n.textContent=a,o.textContent=d,t.innerHTML=("0"+i).slice(-2),n.innerHTML=("0"+a).slice(-2),o.innerHTML=("0"+d).slice(-2),0===e.days||e.days<0?(s.textContent=e.days,s.innerHTML="С НОВЫМ ГОДОМ!!!"):s.innerHTML="До нового года осталось "+e.days+" дней"};d(),a();let m=setInterval((()=>{let e=l();0===e.days||e.days<0?(s.innerHTML="С НОВЫМ ГОДОМ!!!",clearInterval(m)):(d(),a())}),1e3)})("1 january 2023 00:00:00")})();
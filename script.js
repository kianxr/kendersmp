// ==============================
// KENDER SMP Script
// ==============================

// کپی کردن IP
function copyIP() {

    const ip = "Endersmpio.aternos.me";

    navigator.clipboard.writeText(ip);

    alert("✅ آی‌پی سرور کپی شد!\n\n" + ip);

}

// اسکرول نرم
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// تغییر رنگ منو
window.addEventListener("scroll",()=>{

const nav=document.querySelector("nav");

if(window.scrollY>60){

nav.style.background="rgba(0,0,0,.85)";

}else{

nav.style.background="rgba(0,0,0,.35)";

}

});

// ظاهر شدن کارت‌ها
const cards=document.querySelectorAll(".card");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(50px)";

card.style.transition=".8s";

observer.observe(card);

});

// دکمه بازگشت بالا
const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.style.position="fixed";

topBtn.style.right="20px";

topBtn.style.bottom="20px";

topBtn.style.width="50px";

topBtn.style.height="50px";

topBtn.style.borderRadius="50%";

topBtn.style.display="none";

topBtn.style.zIndex="999";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// افکت تایپ عنوان
const title=document.querySelector("header h1");

if(title){

const text=title.innerText;

title.innerText="";

let i=0;

function typing(){

if(i<text.length){

title.innerHTML+=text.charAt(i);

i++;

setTimeout(typing,100);

}

}

typing();

}

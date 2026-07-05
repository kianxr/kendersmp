// ======================================
// KENDER SMP Official Website
// script.js
// ======================================

// ---------- Server IP ----------

const serverIP = "endersmpio.aternos.me";

// ---------- Copy IP ----------

function copyIP(){

navigator.clipboard.writeText(serverIP);

const buttons=document.querySelectorAll("button");

buttons.forEach(btn=>{

if(btn.innerText.includes("کپی")){

const old=btn.innerHTML;

btn.innerHTML="✅ کپی شد";

setTimeout(()=>{

btn.innerHTML=old;

},2000);

}

});

}

// ---------- Smooth Navbar ----------

const nav=document.querySelector("nav");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

nav.style.background="rgba(10,10,10,.9)";

nav.style.backdropFilter="blur(25px)";

}else{

nav.style.background="rgba(0,0,0,.35)";

}

});

// ---------- Back To Top ----------

const topButton=document.createElement("button");

topButton.innerHTML="⬆";

topButton.id="topButton";

document.body.appendChild(topButton);

topButton.style.position="fixed";

topButton.style.bottom="25px";

topButton.style.left="25px";

topButton.style.display="none";

topButton.style.zIndex="999";

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topButton.style.display="block";

}else{

topButton.style.display="none";

}

});

topButton.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};// ======================================
// Scroll Animation
// ======================================

const hiddenElements=document.querySelectorAll(".card,.rules p");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

hiddenElements.forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});

// ======================================
// Typing Effect
// ======================================

const heroTitle=document.querySelector(".hero h1");

if(heroTitle){

const text=heroTitle.innerText;

heroTitle.innerHTML="";

let i=0;

function type(){

if(i<text.length){

heroTitle.innerHTML+=text.charAt(i);

i++;

setTimeout(type,90);

}

}

type();

}

// ======================================
// Announcements
// ======================================

fetch("announcements.txt")

.then(res=>res.text())

.then(text=>{

const list=document.getElementById("announcementList");

list.innerHTML="";

text.split("\n").forEach(line=>{

if(line.trim()!=""){

const p=document.createElement("p");

p.innerHTML="📢 "+line;

list.appendChild(p);

}

});

})

.catch(()=>{

document.getElementById("announcementList").innerHTML=

"<p>❌ اعلانی وجود ندارد.</p>";

});

// ======================================
// Language Switch
// ======================================

let english=false;

const langBtn=document.getElementById("languageButton");

langBtn.onclick=()=>{

english=!english;

if(english){

langBtn.innerHTML="🇺🇸 English";

document.documentElement.lang="en";

document.documentElement.dir="ltr";

}else{

langBtn.innerHTML="🇮🇷 فارسی";

document.documentElement.lang="fa";

document.documentElement.dir="rtl";

}

};// ======================================
// Mouse Glow Effect
// ======================================

const glow=document.createElement("div");

glow.id="mouseGlow";

document.body.appendChild(glow);

glow.style.position="fixed";
glow.style.width="250px";
glow.style.height="250px";
glow.style.borderRadius="50%";
glow.style.pointerEvents="none";
glow.style.background="radial-gradient(circle, rgba(168,85,247,.25), transparent 70%)";
glow.style.filter="blur(20px)";
glow.style.zIndex="0";

document.addEventListener("mousemove",(e)=>{

glow.style.left=(e.clientX-125)+"px";

glow.style.top=(e.clientY-125)+"px";

});

// ======================================
// Rank Card Glow
// ======================================

const rankCards=document.querySelectorAll("#ranks .card");

rankCards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.boxShadow="0 0 35px #8b5cf6";

});

card.addEventListener("mouseleave",()=>{

card.style.boxShadow="";

});

});

// ======================================
// Random Floating Animation
// ======================================

document.querySelectorAll(".card").forEach(card=>{

const random=Math.random()*2+3;

card.style.animation=`floating ${random}s ease-in-out infinite`;

});

// ======================================
// Welcome Message
// ======================================

window.addEventListener("load",()=>{

setTimeout(()=>{

console.log("Welcome to KENDER SMP!");

},500);

});

// ======================================
// Button Ripple Effect
// ======================================

document.querySelectorAll("button").forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const size=Math.max(this.clientWidth,this.clientHeight);

const rect=this.getBoundingClientRect();

ripple.style.width=size+"px";

ripple.style.height=size+"px";

ripple.style.left=(e.clientX-rect.left-size/2)+"px";

ripple.style.top=(e.clientY-rect.top-size/2)+"px";

ripple.style.position="absolute";

ripple.style.borderRadius="50%";

ripple.style.background="rgba(255,255,255,.4)";

ripple.style.transform="scale(0)";

ripple.style.animation="ripple .6s linear";

ripple.style.pointerEvents="none";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});

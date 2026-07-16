/* ==========================================================
   SABILU TAUBAH ESPORT
   MAIN SCRIPT V1.0
========================================================== */

/* ==========================
NAVBAR SCROLL
========================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});


/* ==========================
SCROLL REVEAL
========================== */

const reveal = document.querySelectorAll(

".fade-up,.fade-left,.fade-right,.zoom"

);

function revealAnimation(){

    reveal.forEach(item=>{

        const top=item.getBoundingClientRect().top;

        const height=window.innerHeight;

        if(top<height-120){

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll",revealAnimation);

revealAnimation();


/* ==========================
SCROLL TO TOP
========================== */

const topBtn=document.getElementById("toTop");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.classList.add("show");

}else{

topBtn.classList.remove("show");

}

});

if(topBtn){

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

}


/* ==========================
SMOOTH MENU
========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const tujuan=document.querySelector(this.getAttribute("href"));

if(tujuan){

tujuan.scrollIntoView({

behavior:"smooth"

});

}

});

});


/* ==========================
ACTIVE MENU
========================== */

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

const height=section.clientHeight;

if(scrollY>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")=="#"+current){

link.classList.add("active");

}

});

});


/* ==========================
PARALLAX HERO
========================== */

const hero=document.querySelector(".hero");

window.addEventListener("scroll",()=>{

const value=window.scrollY;

hero.style.backgroundPositionY=value*0.4+"px";

});


/* ==========================
MOUSE GLOW
========================== */

const glow=document.getElementById("mouseGlow");

document.addEventListener("mousemove",(e)=>{

if(glow){

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

}

});


/* ==========================
COUNTER
========================== */

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

const update=()=>{

const target=+counter.getAttribute("data-target");

const count=+counter.innerText;

const speed=80;

const inc=target/speed;

if(count<target){

counter.innerText=Math.ceil(count+inc);

setTimeout(update,20);

}else{

counter.innerText=target.toLocaleString("id-ID");

}

}

update();

});


/* ==========================
PRELOADER REMOVE
========================== */

window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader")

.classList.add("loader-hide");

},3500);

});
/* ==========================
LENIS
========================== */

const lenis = new Lenis();

function raf(time){

lenis.raf(time);

requestAnimationFrame(raf);

}

requestAnimationFrame(raf);
/* ==========================
TILT CARD
========================== */

VanillaTilt.init(

document.querySelectorAll(

".category-card,.info-card,.time-card"

),

{

max:8,

speed:400,

glare:true,

"max-glare":.25

});
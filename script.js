/* -----------------------
MENU OPEN
----------------------- */

const hamburger=document.getElementById("hamburger");
const nav=document.querySelector("nav");
const overlay=document.getElementById("overlay");
const navLinks=document.querySelectorAll("#nav-links a");
const showmenu=document.getElementById("show-menu");
const showmenu2=document.getElementById("show-menu2");
const hidemenus=document.querySelectorAll("#nav-links .hidemenu");
const hidemenus2=document.querySelectorAll("#nav-links .hidemenu2");
const dropdown2=document.querySelectorAll(".dropdown")[0];
const dropdown=document.querySelectorAll(".dropdown")[1];

let submenu_visible=false;
let submenu2_visible=false;

showmenu.onclick=()=>{
if(submenu_visible){
hidemenus.forEach(menu=>{
menu.classList.add("hidemenu");
});
submenu_visible=false;
dropdown.classList.remove("active");
}else{
hidemenus.forEach(menu=>{
menu.classList.remove("hidemenu");
});
submenu_visible=true;
dropdown.classList.add("active");
}
}

showmenu2.onclick=()=>{
if(submenu2_visible){
hidemenus2.forEach(menu=>{
menu.classList.add("hidemenu2");
});
submenu2_visible=false;
dropdown2.classList.remove("active");
}else{
hidemenus2.forEach(menu=>{
menu.classList.remove("hidemenu2");
});
submenu2_visible=true;
dropdown2.classList.add("active");
}
}

window.addEventListener("mousemove", (e) => {
if(submenu_visible || submenu2_visible){
if(e.clientY>200 && ! overlay.classList.contains('show')){
hidemenus.forEach(menu=>{
menu.classList.add("hidemenu");
});
hidemenus2.forEach(menu=>{
menu.classList.add("hidemenu2");
});
submenu_visible=false;
submenu2_visible=false;
dropdown.classList.remove("active");
dropdown2.classList.remove("active");
}
}
});

hamburger.onclick=()=>{

nav.classList.toggle("open");
overlay.classList.toggle("show");
//window.scroll({top: 0, behavior: "smooth",});
};

overlay.onclick=()=>{
nav.classList.remove("open");
overlay.classList.remove("show");
};

/* メニュークリックで閉じる */

navLinks.forEach(link=>{
link.addEventListener("click",()=>{

if(link!=showmenu && link!=showmenu2){
nav.classList.remove("open");
overlay.classList.remove("show");

hidemenus.forEach(menu=>{
menu.classList.add("hidemenu");
});
hidemenus2.forEach(menu=>{
menu.classList.add("hidemenu2");
});
submenu_visible=false;
submenu2_visible=false;
dropdown.classList.remove("active");
dropdown2.classList.remove("active");
}

});
});

topBtn.onclick=()=>scrollTo({top:0,behavior:"smooth"});

const header=document.querySelector("header");
const header2=document.getElementById("top-of-page2");

let isUserScrolling = false;
window.addEventListener("wheel", () => {
  isUserScrolling = true;
});
window.addEventListener("touchmove", () => {
  isUserScrolling = true;
});
window.addEventListener("keydown", () => {
  isUserScrolling = true;
});

window.addEventListener("scroll",()=>{

if(window.scrollY>500){
header?.classList.add("sticky");
header2.classList.add("sticky");

if(window.scrollYpre<window.scrollY){
header2.classList.add("hide");
if (isUserScrolling) hamburger.classList.add("hide");
}else{
header2.classList.remove("hide");
hamburger.classList.remove("hide");
}

}else{
header?.classList.remove("sticky");
header2.classList.remove("sticky");

header2.classList.remove("hide");
hamburger.classList.remove("hide");
}

if(window.scrollY>300){
topBtn.classList.add("show");
}else{
topBtn.classList.remove("show");
}

if(window.scrollY>40){
nav.classList.add("shrink");
}else{
nav.classList.remove("shrink");
}

window.scrollYpre=window.scrollY;
isUserScrolling = false;
});

const observer=new IntersectionObserver(entries=>{
entries.forEach(e=>{
if(e.isIntersecting){
e.target.classList.add("show");
}
});
});

document.querySelectorAll(".section").forEach(sec=>{
observer.observe(sec);
});

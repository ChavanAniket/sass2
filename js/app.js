const menubtn=document.querySelector('.menu_btn');
const hamburger=document.querySelector('.menu_btn_burger');
const nav=document.querySelector('.nav');
const menunav=document.querySelector('.menu_nav');
const menunavitem=document.querySelectorAll('.menu_nav_item');   //because we have multiple
                                                                //element with same class
let showmenu=false;     // first time menu is not shown
menubtn.addEventListener('click',toggleMenu);

function toggleMenu(){
    if(!showmenu){
        hamburger.classList.add('open');
        showmenu=true;
        nav.classList.add('open');
        menunav.classList.add('open');
        menunavitem.forEach(element => {
            element.classList.add('open');
        }); 
    }
    else{
        hamburger.classList.remove('open');
        showmenu=false;
        nav.classList.remove('open');
        menunav.classList.remove('open');
        menunavitem.forEach(element => {
            element.classList.remove('open');
        });
        
    }
}
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("nav").style.background = "#fff";
  } else {
    document.getElementById("header").style.fontSize = "90px";
  }
}

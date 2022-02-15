
let menu =document.querySelector('#menu-bars');
let navbar =document.querySelector('.navbar');

menu.onclick = () =>
{
    menu.classList.toggle('fa-times');
    
    navbar.classList.toggle('active');
}

var swiper = new Swiper(".home-slider", {
   spaceBetween:30,
 centeredslides:true,
autoplay:{
     delay:3000,
     desableOnInteration:false,
   },
pagination:
  {
     el: ".swiper-pagination",
     clickable: true,
    },
    loop:true
  });

  function loader(){
    document.querySelector('.lood').classList.add('fade-out');
  
  }
  function fadeOut (){
    setInterval(loader, 3000);
  }
  
  window.onload = fadeOut;


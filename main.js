// scroll function


function changeNav(){
    const navbar=document.getElementById("navbar");

    const scrollValue=window.scrollY;
    if(scrollValue<100){
          navbar.classList.remove("nav-scrolled");
          
          
    }else{
        navbar.classList.add("nav-scrolled");
        
    
    }
}
window.addEventListener('scroll',changeNav)


//active menu bar
const navlinkEls = document.getElementsByClassName("navlink");
const windowPathname = window.location.pathname;

for (let i = 0; i < navlinkEls.length; i++) {
    const navlinkEl = navlinkEls[i];
    if (navlinkEl.href && navlinkEl.href.includes(windowPathname)) {
        navlinkEl.classList.add('active');
    }
}

//about me site photo change
var paths =
[
    "Images/About-Img/4-2-1920x475.jpg",
"Images/About-Img/1-3-1920x475.jpg",
"Images/About-Img/2-2-1920x475.jpg",
"Images/About-Img/2-3-1920x475.jpg",


];

var img = document.getElementById("img1");
var i = 0;
var timer = setInterval(function(){
 
  if(i >= paths.length){
i=0;            
  }

  img.src = paths[i++];
}, 1000);



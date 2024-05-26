import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from 'lenis'
import { ScrollToPlugin } from "gsap/ScrollToPlugin"; 


var loader = document.getElementById("loader");

window.addEventListener("load", () => {
    loader.style.display = "none"
})



const lenis = new Lenis()


lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)









// -----------------------------------------------

const nav = document.getElementById("navBar")


nav.style.display = "none"

window.addEventListener('scroll', () => {
    if (window.scrollY > 700) {
        nav.style.display = "flex"

        
    } if (window.scrollY > 800) {
        nav.style.top = 0
    }

     else {
       nav.style.top = "-100px"
    }

})

// --------------------------------------

let navVisible = false

document.body.style.overflowY = "auto"

buttonMenu.addEventListener("click", () => {
    if (navVisible) {
        document.body.style.overflowY = "auto"
    } else {
        document.body.style.overflowY = "hidden"
    }

    navVisible = !navVisible
})
gsap.registerPlugin(ScrollTrigger);

const project = document.querySelector(".project-container");


function getScrollAmount() {
    const screenWidth = window.innerWidth;
    const projectWidth = project.scrollWidth;

    if (screenWidth < 1024) {
        return 0;
    } else {
        const scrollAmount = -(projectWidth - screenWidth);
        return scrollAmount;
    }
}

const scrollAmount = getScrollAmount();

if (scrollAmount === 0) {
}

const endDelay = 200; 

const tween = gsap.to(project, {
    x: getScrollAmount,
    ease: "none",

});

ScrollTrigger.create({
    trigger: "#projects",
    start: `top top`, 
    end: () => `+=${project.scrollWidth - window.innerWidth + endDelay}`, 
    pin: true,
    animation: tween,
    scrub: 1,
    invalidateOnRefresh: true,
});


  fillSVGs();

  document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    const homeButton = document.getElementById("homeButton");

    // Déclencheur pour changer la couleur du bouton en fonction de l'entrée et de la sortie du champ
    ScrollTrigger.create({
        trigger: "#projects",
        start: "top top",
        end: "+=4050px",
        onEnter: () => {
            homeButton.classList.remove("text-orange");
            homeButton.classList.add("text-white");
        },
        onLeave: () => {
            homeButton.classList.remove("text-white");
            homeButton.classList.add("text-orange");
        },
        onEnterBack: () => {
            homeButton.classList.remove("text-orange");
            homeButton.classList.add("text-white");
        },
        onLeaveBack: () => {
            homeButton.classList.remove("text-white");
            homeButton.classList.add("text-orange");
        },
    });
});



document.addEventListener("DOMContentLoaded", function() {
    const buttonMenu = document.getElementById("buttonMenu");
    const menu = document.getElementById("menu");
    const menuLinks = document.querySelectorAll("#menuList a");
    
    const homeButton = document.getElementById("homeButton");

    let menuVisible = false;

    function toggleMenu() {
        if (!menuVisible) {
            menu.style.display = "flex";
            buttonMenu.classList.remove("text-beige");
            buttonMenu.classList.add("text-orange");
            buttonMenu.classList.remove("bg-orange");
            buttonMenu.classList.add("bg-beige");
            homeButton.classList.add("text-beige");
            homeButton.classList.remove("text-orange");
            menuVisible = true;
        } else {
            fermerMenu();
        }
    }

    function fermerMenu() {
        menu.style.display = "none";
        buttonMenu.classList.add("text-beige");
        buttonMenu.classList.remove("text-orange");
        buttonMenu.classList.add("bg-orange");
        buttonMenu.classList.remove("bg-beige");
        homeButton.classList.add("text-orange");
        homeButton.classList.remove("text-beige");
        menuVisible = false;
    }

    buttonMenu.addEventListener("click", toggleMenu);

    menuLinks.forEach(item => {
        item.addEventListener("click", function() {
            fermerMenu();
        });
    });

    document.addEventListener("click", function(event) {
        if (!menu.contains(event.target) && !buttonMenu.contains(event.target)) {
            fermerMenu();
        }
    });
});


import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from 'lenis'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';



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




gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function fermerMenu() {
    console.log("Fermeture du menu");
    document.getElementById("menu").classList.add("hidden");
}

// Récupérer tous les liens dans le menu et leur ajouter un écouteur d'événements de clic
document.querySelectorAll("#menu a").forEach(item => {
    item.addEventListener("click", function() {
        console.log("Clic sur le lien dans le menu");
        fermerMenu();
    });
});







 









// ----------------------------------------------------------

const buttonMenu = document.getElementById("buttonMenu")
const menu = document.getElementById("menu")
const menuList = document.getElementById("menuList")
const home = document.getElementById("home")

let menuVisible = false;

buttonMenu.addEventListener("click", () => {
    if (menuVisible) {
        menu.style.display = "none"
        buttonMenu.classList.add("text-beige");
        buttonMenu.classList.remove("text-orange");
        buttonMenu.classList.add("bg-orange");
        buttonMenu.classList.remove("bg-beige");
        home.classList.add("text-orange")
        home.classList.remove("text-beige")
        
    }
    else {
        menu.style.display = "flex";
        buttonMenu.classList.remove("text-beige");
        buttonMenu.classList.add("text-orange");
        buttonMenu.classList.remove("bg-orange");
        buttonMenu.classList.add("bg-beige");
        home.classList.add("text-beige");
        home.classList.remove("text-orange");
    }
    menuVisible = !menuVisible;
})

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

// Vérifie si l'élément project-container est trouvé

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

// Vérifie si la fonction getScrollAmount retourne une valeur correcte
const scrollAmount = getScrollAmount();

if (scrollAmount === 0) {
}

// Ajuster la durée de l'animation pour inclure une marge au début et à la fin
const startDelay = 50; // px à attendre avant de commencer le défilement
const endDelay = 50; // px à attendre après le défilement

const tween = gsap.to(project, {
    x: getScrollAmount,
    ease: "none",

});

ScrollTrigger.create({
    trigger: "#projects",
    start: `top top`, // Ajouter un délai au début
    end: () => `+=${project.scrollWidth - window.innerWidth + endDelay}`, // Ajouter un délai à la fin
    pin: true,
    animation: tween,
    scrub: 1,
    invalidateOnRefresh: true,
    markers: true,
});


function fillSVGs() {
    const container = document.getElementById('svg-container');
    const svg = container.querySelector('svg');
    const svgWidth = svg.getBoundingClientRect().width;
    const containerWidth = container.parentElement.getBoundingClientRect().width;
    const svgCount = Math.ceil(containerWidth / svgWidth);

    // Clear existing SVGs
    container.innerHTML = '';

    // Add the necessary number of SVGs to fill the container
    for (let i = 0; i < svgCount; i++) {
      const clonedSvg = svg.cloneNode(true);
      container.appendChild(clonedSvg);
    }
  }

  // Fill the SVGs on initial load
  fillSVGs();

 
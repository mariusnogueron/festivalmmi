import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

var loader = document.getElementById("loader");

window.addEventListener("load", () => {
    loader.style.display = "none"
})

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

// document.addEventListener("DOMContentLoaded", function() {
//     console.log("DOM chargé");
//     gsap.registerPlugin(ScrollTrigger);
    
//     // Sélectionnez tous les conteneurs avec la classe .contain-heart
//     const containHearts = document.querySelectorAll(".contain-heart");

//     // Initialisez la largeur maximale
//     let maxWidth = 0;

//     // Parcourez tous les conteneurs pour calculer la largeur maximale
//     containHearts.forEach(function(containHeart) {
//         const heart = containHeart.querySelector(".marmite, .hand_heart, .sign");
        
//         if (!heart) {
//             console.log("Erreur: L'élément 'coeur' n'a pas été trouvé dans le conteneur.");
//             return; // Passez à l'itération suivante si aucun élément 'coeur' n'est trouvé
//         }
        
//         console.log("L'élément 'coeur' a été trouvé dans le conteneur.");
//         console.log("La largeur de l'élément 'coeur' est:", heart.offsetWidth);

//         // Ajoutez la largeur du conteneur à la largeur maximale
//         maxWidth += heart.offsetWidth;
//     });

//     // Appliquez l'effet de défilement horizontal avec le point de départ et d'arrêt basé sur la largeur maximale
//     containHearts.forEach(function(containHeart) {
//         const heart = containHeart.querySelector(".marmite, .hand_heart, .sign");

//         function getScrollAmount() {
//             return -(maxWidth - window.innerWidth);
//         }

//         const tween = gsap.to(heart, {
//             x: getScrollAmount,
//             duration: 3,
//             ease: "none"
//         });

//         ScrollTrigger.create({
//             trigger: containHeart,
//             start: "center center",
//             end: () => `+=${getScrollAmount()}`,
//             pin: true,
//             animation: tween,
//             scrub: 1,
//             invalidateOnRefresh: true,
//             markers: true
//         });
//     });
// });






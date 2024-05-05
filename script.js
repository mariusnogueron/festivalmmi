var loader = document.getElementById("loader");

window.addEventListener("load", () => {
    loader.style.display = "none"
})

const buttonMenu = document.getElementById("buttonMenu")
const menu = document.getElementById("menu")
const menuList = document.getElementById("menuList")
const home = document.getElementById("home")

let menuVisible = false;

buttonMenu.addEventListener("click", () => {
    if (menuVisible) {
        menu.style.display = "none"
        buttonMenu.classList.remove("text-beige");
        buttonMenu.classList.add("text-orange");
        buttonMenu.classList.remove("bg-orange");
        buttonMenu.classList.add("bg-beige");
        home.classList.add("text-orange")
        home.classList.remove("text-beige")
        
    }
    else {
        menu.style.display = "flex";
        buttonMenu.classList.add("text-beige");
        buttonMenu.classList.remove("text-orange");
        buttonMenu.classList.add("bg-orange");
        buttonMenu.classList.remove("bg-beige");
        home.classList.remove("text-orange")
        home.classList.add("text-beige")
        
    }

    menuVisible = !menuVisible;
    
})


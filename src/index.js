import "./styles.css"
import "./inicio.css"
import {container, createHero} from "./inicio.js"
import {sectionDesayuno, sectionAlmuerzo, sectionCena} from "./Menu.js"

const menu = document.getElementById("menu");

createHero()

menu.addEventListener("click", ()=>{
    container.innerHTML = "";
    sectionDesayuno();
    sectionAlmuerzo();
    sectionCena();
})


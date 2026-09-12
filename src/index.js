import "./styles.css"
import "./inicio.css"
import {container, createHero} from "./inicio.js"
import {sectionDesayuno, sectionAlmuerzo, sectionCena, sectionBebidas} from "./Menu.js"

const menu = document.getElementById("menu");
const inicio = document.getElementById("home")

createHero()

menu.addEventListener("click", ()=>{
    container.innerHTML = "";
    sectionDesayuno();
    sectionAlmuerzo();
    sectionCena();
    sectionBebidas();
})

inicio.addEventListener("click", ()=>{
    container.innerHTML = "";
    createHero();
})


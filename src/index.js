import "./styles.css"
import "./inicio.css"
import {container, createHero} from "./inicio.js"
import {sectionDesayuno, sectionAlmuerzo, sectionCena, sectionBebidas} from "./Menu.js"
import {sectionContactos} from "./contacto.js"

const menu = document.getElementById("menu");
const inicio = document.getElementById("home")
const contactos = document.getElementById("Contact");

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


contactos.addEventListener("click", ()=>{
    container.innerHTML = "";
    sectionContactos();
})


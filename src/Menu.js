import { container } from "./inicio.js";
import styles from "./menu.css"
import HuevosPericos from "./img/HuevosPericos.png";
import arepaConQueso from "./img/arepaConQueso.jpg";
import tamal from "./img/Tamal.jpg";
import panDeBono from "./img/PanDeBono.jpg";
import bandejaPaisa from "./img/BandejaPaisa.jpg";
import sancocho from "./img/Sancocho.jpg";
import arrozConPollo from "./img/ArrozConPollo.jpg";
import pescadoFrito from "./img/PescadoFrito.jpg";
import carneAsada from "./img/CarneAsada.jpg";
import ensalada from "./img/Ensalada.jpg";
import arepaConCarne from "./img/ArepaConCarne.jpg";
import empanadasDeCarne from "./img/EmpanadasDeCarne.jpg";
import patacones from "./img/Patacones.jpg";
import caldoDeCostilla from "./img/CaldoDeCostilla.jpg";
import jugoDeLulo from "./img/JugoDeLulo.jpg";
import jugoDeMango from "./img/JugoDeMango.jpg";
import chocolate from "./img/Chocolate.jpg";
import caféNegro from "./img/CaféNegro.jpg";


export function sectionDesayuno() {
    const desayuno = document.createElement("section");
    desayuno.classList.add("desayuno");
    desayuno.innerHTML = `<h2>Desayunos</h2>

<div class="comida">
    <img class="img" src="${HuevosPericos}">
    <div>
        <p class="menu">Huevos pericos</p>
        <p class="precio">$9.000</p>
    </div>
</div>

<div class="comida">
    <img class="img" src="${arepaConQueso}">
    <div>
        <p class="menu">Arepa con queso</p>
        <p class="precio">$8.000</p>
    </div>
</div>

<div class="comida">
    <img class="img" src="${tamal}">
    <div>
        <p class="menu">Tamal tolimense</p>
        <p class="precio">$12.000</p>
    </div>
</div>

<div class="comida">
    <img class="img" src="${panDeBono}">
    <div>
        <p class="menu">Pan de bono</p>
        <p class="precio">$4.000</p>
    </div>
</div>`

    container.append(desayuno)
}

export function sectionAlmuerzo() {
    const almuerzo = document.createElement("section");
    almuerzo.classList.add("almuerzo");
    almuerzo.innerHTML = `<h2>Almuerzos</h2>

<div class="comida">
    <img class="img" src="${bandejaPaisa}">
    <div>
        <p class="menu">Bandeja paisa</p>
        <p class="precio">$28.000</p>
    </div>
</div>

<div class="comida">
    <img class="img" src="${sancocho}">
    <div>
        <p class="menu">Sancocho de gallina</p>
        <p class="precio">$26.000</p>
    </div>
</div>

<div class="comida">
    <img class="img" src="${arrozConPollo}">
    <div>
        <p class="menu">Arroz con pollo</p>
        <p class="precio">$22.000</p>
    </div>
</div>

<div class="comida">
    <img class="img" src="${pescadoFrito}">
    <div>
        <p class="menu">Pescado frito con arroz de coco</p>
        <p class="precio">$30.000</p>
    </div>
</div>

<div class="comida">
    <img class="img" src="${carneAsada}">
    <div>
        <p class="menu">Carne asada con papa criolla</p>
        <p class="precio">$26.000</p>
    </div>
</div>

<div class="comida">
    <img class="img" src="${ensalada}">
    <div>
        <p class="menu">Ensalada de aguacate y tomate</p>
        <p class="precio">$10.000</p>
    </div>
</div>`

    container.append(almuerzo)
}

export function sectionCena() {
    const cena = document.createElement("section");
    cena.classList.add("cena");
    cena.innerHTML = `<h2>Cenas</h2>

<div class="comida">
    <img class="img" src="${arepaConCarne}">
    <div>
        <p class="menu">Arepa con carne desmechada</p>
        <p class="precio">$15.000</p>
    </div>
</div>


<div class="comida">
    <img class="img" src="${empanadasDeCarne}">
    <div>
        <p class="menu">Empanadas de carne</p>
        <p class="precio">$3.500</p>
    </div>
</div>

<div class="comida">
    <img class="img" src="${patacones}">
    <div>
        <p class="menu">Patacones con hogao y queso</p>
        <p class="precio">$13.000</p>
    </div>
</div>

<div class="comida">
    <img class="img" src="${caldoDeCostilla}">
    <div>
        <p class="menu">Caldo de costilla</p>
        <p class="precio">$15.000</p>
    </div>
</div>`

    container.append(cena)
}

export function sectionBebidas() {
    const bebidas = document.createElement("section");
    bebidas.classList.add("bebidas");
    bebidas.innerHTML = `<h2>Bebidas</h2>

<div class="comida">
    <img class="img" src="${jugoDeLulo}">
    <div>
        <p class="menu">Jugo de lulo</p>
        <p class="precio">$5.000</p>
    </div>
</div>

<div class="comida">
    <img class="img" src="${jugoDeMango}">
    <div>
        <p class="menu">Jugo de mango</p>
        <p class="precio">$5.000</p>
    </div>
</div>

<div class="comida">
    <img class="img" src="${chocolate}">
    <div>
        <p class="menu">Chocolate</p>
        <p class="precio">$5.000</p>
    </div>
</div>

<div class="comida">
    <img class="img" src="${caféNegro}">
    <div>
        <p class="menu">Café negro (tinto)</p>
        <p class="precio">$3.000</p>
    </div>
</div>`

    container.append(bebidas)
}
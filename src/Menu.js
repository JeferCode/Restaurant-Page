import { container } from "./inicio.js";

export function sectionDesayuno() {
    const desayuno = document.createElement("section");
    desayuno.classList.add("desayuno");
    desayuno.innerHTML = `<h2>Desayuno</h2>
                        <p class="menu desayuno">Huevos pericos</p>
                        <p class="precio desayuno">$9.000</p>

                        <p class="menu desayuno">Arepa con queso</p>
                        <p class="precio desayuno">$8.000</p>

                        <p class="menu desayuno">Calentado con huevo</p>
                        <p class="precio desayuno">$14.000</p>

                        <p class="menu desayuno">Tamal tolimense</p>
                        <p class="precio desayuno">$12.000</p>

                        <p class="menu desayuno">Changua</p>
                        <p class="precio desayuno">$11.000</p>

                        <p class="menu desayuno">Pan de bono</p>
                        <p class="precio desayuno">$4.000</p>

                        <p class="menu desayuno">Chocolate caliente</p>
                        <p class="precio desayuno">$5.000</p>

                        <p class="menu desayuno">Café con leche</p>
                        <p class="precio desayuno">$5.000</p>

                        <p class="menu desayuno">Jugo natural de mango</p>
                        <p class="precio desayuno">$7.000</p>`

    container.append(desayuno)
}

export function sectionAlmuerzo() {
    const almuerzo = document.createElement("section");
    almuerzo.classList.add("almuerzo");
    almuerzo.innerHTML = `<h2>Almuerzo</h2>

                        <p class="menu almuerzo">Bandeja paisa</p>
                        <p class="precio almuerzo">$28.000</p>

                        <p class="menu almuerzo">Ajiaco santafereño</p>
                        <p class="precio almuerzo">$25.000</p>

                        <p class="menu almuerzo">Sancocho de gallina</p>
                        <p class="precio almuerzo">$26.000</p>

                        <p class="menu almuerzo">Arroz con pollo</p>
                        <p class="precio almuerzo">$22.000</p>

                        <p class="menu almuerzo">Sobrebarriga en salsa criolla</p>
                        <p class="precio almuerzo">$27.000</p>

                        <p class="menu almuerzo">Pescado frito con arroz de coco</p>
                        <p class="precio almuerzo">$30.000</p>

                        <p class="menu almuerzo">Carne asada con papa criolla</p>
                        <p class="precio almuerzo">$26.000</p>

                        <p class="menu almuerzo">Lentejas con arroz y aguacate</p>
                        <p class="precio almuerzo">$18.000</p>

                        <p class="menu almuerzo">Ensalada de aguacate y tomate</p>
                        <p class="precio almuerzo">$10.000</p>

                        <p class="menu almuerzo">Jugo de maracuyá</p>
                        <p class="precio almuerzo">$7.000</p>`

    container.append(almuerzo)
}

export function sectionCena() {
    const cena = document.createElement("section");
    cena.classList.add("cena");
    cena.innerHTML = `<h2>Cena</h2>

                        <p class="menu cena">Arepa con carne desmechada</p>
                        <p class="precio cena">$15.000</p>

                        <p class="menu cena">Arepa con pollo y queso</p>
                        <p class="precio cena">$14.000</p>

                        <p class="menu cena">Empanadas de carne</p>
                        <p class="precio cena">$3.500</p>

                        <p class="menu cena">Patacones con hogao y queso</p>
                        <p class="precio cena">$13.000</p>

                        <p class="menu cena">Caldo de costilla</p>
                        <p class="precio cena">$15.000</p>

                        <p class="menu cena">Chorizo con arepa</p>
                        <p class="precio cena">$12.000</p>`

    container.append(cena)
}
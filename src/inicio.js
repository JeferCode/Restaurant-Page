export const container = document.getElementById("content");

export function createHero() {
    const hero = document.createElement("section");
    hero.classList.add("hero")
    hero.innerHTML = `<h1 class="general-title">Comida casera en Pitalito</h1>
    <p class="firts-paragraph">encuentra la mejor comida casera, preparada con ingredientes frescos y de calidad</p>
    <p class="second-paragraph">envios a domicilio</p>` 

    container.append(hero);
}




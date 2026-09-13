import { container } from "./inicio.js"
import "./contacto.css"

export function sectionContactos() {
    const contactos = document.createElement("div");
    contactos.classList.add("contactos");
    contactos.innerHTML = `
    <section class="contacto">

        <div class="reservas">
            <h2>Reservas</h2>

            <p>📞 +57 300 000 0000</p>
            <p>💬 +57 300 000 0000</p>
            <p>✉️ reservas@restaurante.com</p>
            <p>📷 @restaurante</p>
        </div>

        <div class="domicilios">
            <h2>Domicilios</h2>

            <p>📞 +57 300 000 0000</p>
            <p>💬 +57 300 000 0000</p>
        </div>

        <div class="ubicacion">
            <h2>Ubicación</h2>

            <p>📍 Calle Principal #00-00</p>
            <p>🕐 Lunes a domingo, 7:00 a. m. – 10:00 p. m.</p>
        </div>

    </section>`

container.append(contactos);
}
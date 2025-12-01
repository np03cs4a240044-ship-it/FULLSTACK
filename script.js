/* MOBILE MENU TOGGLE */
const menuButton = document.getElementById("menu-button");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuButton.setAttribute("aria-expanded", isOpen);
    menuButton.innerHTML = isOpen ? "✕" : "☰";
});

/* CONTACT FORM HANDLING */
const contactForm = document.getElementById("contact-form");
const messageDiv = document.getElementById("form-message");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const msg = document.getElementById("message").value.trim();

    if (!name || !email || !msg) {
        messageDiv.textContent = "Please fill all fields.";
        messageDiv.style.color = "red";
        return;
    }

    messageDiv.textContent = "Thank you! I will get back to you soon.";
    messageDiv.style.color = "lightgreen";

    contactForm.reset();
});
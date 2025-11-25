// NAV MENU
const menuButton = document.getElementById("menu-button");
const navLinks = document.getElementById("nav-links");

menuButton.addEventListener("click", () => {
    navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
});

// FADE-UP
const fadeElements = document.querySelectorAll(".fade-up");

const fadeInOnScroll = () => {
    fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
            el.classList.add("show");
        }
    });
};

window.addEventListener("scroll", fadeInOnScroll);
fadeInOnScroll();

// FORM MESSAGE
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get values from inputs
    const nameInput = document.getElementById("name").value.trim();
    const emailInput = document.getElementById("email").value.trim();
    const messageInput = document.getElementById("message").value.trim();

    // Validation check
    if (nameInput === "" || emailInput === "" || messageInput === "") {
        status.textContent = "⚠ Please fill up the form first!";
        status.style.color = "red";
        status.style.marginTop = "10px";
        return; // Stop here, don’t show success
    }

    // Success message
    status.textContent = "✔ Message sent successfully!";
    status.style.color = "cyan";
    status.style.marginTop = "10px";

    form.reset();

    // Clear message after 3 seconds
    setTimeout(() => status.textContent = "", 3000);
});
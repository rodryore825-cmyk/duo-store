document.addEventListener("DOMContentLoaded", () => {
    // Configuración del Intersection Observer para animar las tarjetas de productos al hacer scroll
    const cards = document.querySelectorAll(".card");

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observerInstance) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observerInstance.unobserve(entry.target); // Deja de observarla una vez que ya apareció
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        observer.observe(card);
    });

    // Mensaje interactivo simple para los botones de compra
    const buyButtons = document.querySelectorAll(".buy-btn");
    buyButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            const productTitle = e.target.parentElement.querySelector("h3").innerText;
            alert(`¡Has añadido "${productTitle}" al carrito con éxito! 🛒`);
        });
    });
});

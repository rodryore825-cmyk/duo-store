// Estado global de productos (Catálogo inicial + agregados por admin)
let products = [
    {
        name: "Micrófono K9 Inalámbrico",
        desc: "Ideal para streaming y videollamadas con conexión USB-C.",
        price: 25.00,
        img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Pack Coleccionable AOT",
        desc: "Artículos y accesorios exclusivos de edición limitada.",
        price: 45.00,
        img: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Mousepad Gaming RGB XL",
        desc: "Superficie optimizada con iluminación LED ajustable.",
        price: 30.00,
        img: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80"
    }
];

let currentUser = null;
let currentSelectedProduct = null;

document.addEventListener("DOMContentLoaded", () => {
    renderCatalog();
    initCarousel();
});

/* Control de Vistas */
function switchView(viewName) {
    document.querySelectorAll(".view").forEach(view => {
        view.style.display = "none";
    });
    document.getElementById(`view-${viewName}`).style.display = "block";
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* Autenticación Simulada con Google */
function loginWithGoogle() {
    // Simulación de respuesta exitosa de Google Auth
    currentUser = {
        name: "Rodrigo Orellana",
        email: "rodrigo@gmail.com"
    };
    document.getElementById("googleLoginBtn").style.display = "none";
    const profile = document.getElementById("userProfile");
    profile.style.display = "flex";
    document.getElementById("userName").innerText = currentUser.name;
    alert(`¡Bienvenido de nuevo, ${currentUser.name}! Ya puedes realizar compras.`);
}

function logout() {
    currentUser = null;
    document.getElementById("userProfile").style.display = "none";
    document.getElementById("googleLoginBtn").style.display = "flex";
    alert("Has cerrado sesión correctamente.");
}

/* Carrusel Automático (Cada 7 segundos) */
function initCarousel() {
    const track = document.getElementById("mainCarousel");
    if (!track) return;
    const slides = track.querySelectorAll(".carousel-slide");
    let currentIndex = 0;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }, 7000); // 7000 ms = 7 segundos exactos
}

/* Renderizar Catálogo */
function renderCatalog() {
    const grid = document.getElementById("productGrid");
    grid.innerHTML = "";

    products.forEach((prod, index) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${prod.img}" alt="${prod.name}" class="card-img">
            <div class="card-body">
                <h3>${prod.name}</h3>
                <p>${prod.desc}</p>
                <span class="price">$${prod.price.toFixed(2)} USD</span>
                <button class="buy-btn" onclick="openCheckout(${index})">Comprar Ahora</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

/* Panel de Administración: Agregar producto */
function addNewProduct(e) {
    e.preventDefault();
    const name = document.getElementById("prodName").value;
    const desc = document.getElementById("prodDesc").value;
    const price = parseFloat(document.getElementById("prodPrice").value);
    const img = document.getElementById("prodImg").value;

    products.push({ name, desc, price, img });
    renderCatalog();
    
    document.getElementById("addProductForm").reset();
    alert("¡Producto agregado exitosamente al catálogo!");
    switchView("catalogo");
}

/* Pasarela de Pagos / Checkout */
function openCheckout(index) {
    if (!currentUser) {
        alert("Por favor, inicia sesión con tu cuenta de Google antes de continuar con la compra.");
        return;
    }
    currentSelectedProduct = products[index];
    document.getElementById("checkoutProductTitle").innerText = `Producto: ${currentSelectedProduct.name} ($${currentSelectedProduct.price.toFixed(2)})`;
    document.getElementById("checkoutModal").style.display = "flex";
}

function closeCheckout() {
    document.getElementById("checkoutModal").style.display = "none";
}

function togglePaymentFields() {
    const method = document.getElementById("paymentMethod").value;
    const cardFields = document.getElementById("cardFields");
    if (method === "card") {
        cardFields.style.display = "block";
    } else {
        cardFields.style.display = "none";
    }
}

function processPayment(e) {
    e.preventDefault();
    const method = document.getElementById("paymentMethod").value;
    alert(`¡Pago procesado con éxito mediante ${method.toUpperCase()} para ${currentUser.name}! Gracias por tu compra.`);
    closeCheckout();
}

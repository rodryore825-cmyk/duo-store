:root {
    --bg-main: #0b0f19;
    --bg-card: #131c2e;
    --bg-header: rgba(11, 15, 25, 0.85);
    --border-color: rgba(56, 189, 248, 0.15);
    --text-main: #f1f5f9;
    --text-muted: #94a3b8;
    --accent: #38bdf8;
    --accent-glow: rgba(56, 189, 248, 0.3);
    --gradient-glow: linear-gradient(135deg, #38bdf8 0%, #818cf8 100%);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
}

body {
    background-color: var(--bg-main);
    color: var(--text-main);
    line-height: 1.6;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

/* Header Glassmorphism */
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 5%;
    background-color: var(--bg-header);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border-color);
    position: sticky;
    top: 0;
    z-index: 1000;
}

.logo {
    font-size: 1.4rem;
    font-weight: 800;
    color: var(--text-main);
    cursor: pointer;
    letter-spacing: 0.5px;
    display: flex;
    align-items: center;
    gap: 8px;
}

.logo i {
    color: var(--accent);
}

.logo span {
    color: var(--accent);
}

.nav {
    display: flex;
    gap: 2rem;
}

.nav a {
    color: var(--text-muted);
    text-decoration: none;
    font-size: 0.95rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 6px;
    transition: color 0.3s ease;
}

.nav a:hover, .nav a.active {
    color: var(--accent);
}

.menu-toggle {
    display: none;
    font-size: 1.5rem;
    color: var(--text-main);
    cursor: pointer;
}

/* Auth & Dropdown Menu */
.auth-container {
    position: relative;
}

.google-auth-btn {
    background-color: #ffffff;
    color: #0b0f19;
    border: none;
    padding: 0.6rem 1.2rem;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.85rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    box-shadow: 0 4px 14px rgba(0,0,0,0.2);
    transition: transform 0.2s, background 0.2s;
}

.google-auth-btn img {
    width: 18px;
    height: 18px;
}

.google-auth-btn:hover {
    transform: translateY(-2px);
    background-color: #f8fafc;
}

/* Dropdown */
.dropdown {
    position: relative;
    display: inline-block;
}

.dropbtn {
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    color: var(--text-main);
    padding: 0.4rem 1rem;
    border-radius: 30px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 0.9rem;
    font-weight: 500;
    transition: border-color 0.2s;
}

.dropbtn:hover {
    border-color: var(--accent);
}

.avatar-img {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    object-fit: cover;
}

.dropdown-content {
    display: none;
    position: absolute;
    right: 0;
    background-color: var(--bg-card);
    min-width: 220px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    z-index: 1;
    overflow: hidden;
    margin-top: 8px;
    animation: fadeIn 0.2s ease;
}

.dropdown-content.show {
    display: block;
}

.dropdown-header {
    padding: 12px 16px;
    border-bottom: 1px solid var(--border-color);
}

.user-email-text {
    font-size: 0.8rem;
    color: var(--text-muted);
    word-break: break-all;
}

.dropdown-content a {
    color: var(--text-main);
    padding: 12px 16px;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 0.9rem;
    transition: background 0.2s;
}

.dropdown-content a:hover {
    background-color: rgba(56, 189, 248, 0.1);
    color: var(--accent);
}

/* Carrusel Automático (7 Segundos) */
.hero-carousel {
    position: relative;
    width: 100%;
    height: 75vh;
    overflow: hidden;
}

.carousel-track {
    display: flex;
    width: 100%;
    height: 100%;
    transition: transform 1s cubic-bezier(0.77, 0, 0.175, 1);
}

.carousel-slide {
    min-width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0 2rem;
}

.badge-tag {
    background: rgba(56, 189, 248, 0.15);
    color: var(--accent);
    padding: 0.4rem 1rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 1.5px;
    border: 1px solid var(--border-color);
    margin-bottom: 1rem;
    display: inline-block;
}

.slide-content h1 {
    font-size: 3.2rem;
    margin-bottom: 1rem;
    font-weight: 800;
    letter-spacing: -0.5px;
}

.slide-content p {
    font-size: 1.15rem;
    color: var(--text-muted);
    max-width: 600px;
    margin: 0 auto 2rem auto;
}

.btn-glow {
    background: var(--gradient-glow);
    color: #0b0f19;
    border: none;
    padding: 0.8rem 2rem;
    border-radius: 8px;
    font-weight: 700;
    font-size: 1rem;
    cursor: pointer;
    box-shadow: 0 0 25px var(--accent-glow);
    transition: transform 0.2s, box-shadow 0.2s;
}

.btn-glow:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 35px rgba(56, 189, 248, 0.5);
}

.btn-full {
    width: 100%;
}

/* Features Grid */
.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: -4rem auto 4rem auto;
    padding: 0 5%;
    position: relative;
    z-index: 10;
}

.feature-card {
    background-color: var(--bg-card);
    border: 1px solid var(--border-color);
    padding: 2rem;
    border-radius: 14px;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}

.feature-card i {
    font-size: 2rem;
    color: var(--accent);
    margin-bottom: 1rem;
}

.feature-card h3 {
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
}

.feature-card p {
    color: var(--text-muted);
    font-size: 0.9rem;
}

/* Vistas */
.view {
    flex: 1;
    padding: 4rem 5%;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
}

.section-title {
    text-align: center;
    margin-bottom: 3rem;
}

.section-title h2 {
    font-size: 2.2rem;
    font-weight: 800;
    margin-bottom: 0.5rem;
}

.section-title p {
    color: var(--text-muted);
}

/* Grid de Productos */
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}

.card {
    background-color: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 14px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: transform 0.3s, border-color 0.3s;
}

.card:hover {
    transform: translateY(-5px);
    border-color: var(--accent);
}

.card-img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.card-body {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    flex: 1;
}

.card-body h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
}

.card-body p {
    color: var(--text-muted);
    font-size: 0.9rem;
    margin-bottom: 1.2rem;
    flex: 1;
}

.price {
    font-size: 1.25rem;
    font-weight: 800;
    color: var(--accent);
    margin-bottom: 1.2rem;
}

/* Panel Admin */
.admin-panel {
    max-width: 650px;
    margin: 0 auto;
    background: var(--bg-card);
    padding: 2.5rem;
    border-radius: 16px;
    border: 1px solid var(--border-color);
}

.admin-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
}

.admin-badge {
    background: rgba(34, 197, 94, 0.15);
    color: #22c55e;
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 700;
}

.form-group {
    margin-bottom: 1.2rem;
}

.form-group label {
    display: block;
    font-size: 0.85rem;
    margin-bottom: 0.4rem;
    color: var(--text-muted);
    font-weight: 600;
}

.form-group input, .form-group select {
    width: 100%;
    padding: 0.8rem;
    border-radius: 8px;
    border: 1px solid var(--border-color);
    background-color: var(--bg-main);
    color: var(--text-main);
    font-size: 0.95rem;
}

.form-row {
    display: flex;
    gap: 1rem;
}

/* Políticas */
.policy-box {
    background-color: var(--bg-card);
    padding: 2.5rem;
    border-radius: 16px;
    border: 1px solid var(--border-color);
}

.policy-box h3 {
    color: var(--accent);
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    gap: 10px;
}

.policy-box h3:first-child {
    margin-top: 0;
}

.policy-box p {
    color: var(--text-muted);
    font-size: 0.95rem;
}

/* Redes Sociales y Contacto */
.social-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    max-width: 900px;
    margin: 0 auto;
}

.social-card {
    background-color: var(--bg-card);
    border: 1px solid var(--border-color);
    padding: 2rem;
    border-radius: 14px;
    display: flex;
    align-items: center;
    gap: 1.5rem;
    text-decoration: none;
    color: var(--text-main);
    transition: transform 0.2s, border-color 0.2s;
}

.social-card:hover {
    transform: translateY(-4px);
    border-color: var(--accent);
}

.social-card i {
    font-size: 2.5rem;
}

.social-card.instagram i { color: #e1306c; }
.social-card.whatsapp i { color: #25d366; }
.social-card.email i { color: var(--accent); }

.social-card h3 {
    font-size: 1.1rem;
    margin-bottom: 0.2rem;
}

.social-card p {
    color: var(--text-muted);
    font-size: 0.9rem;
}

/* Modal */
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
}

.modal-content {
    background-color: var(--bg-card);
    padding: 2.5rem;
    border-radius: 16px;
    width: 90%;
    max-width: 440px;
    border: 1px solid var(--border-color);
    position: relative;
}

.close-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 1.5rem;
    color: var(--text-muted);
    cursor: pointer;
}

.checkout-product-title {
    color: var(--accent);
    margin-bottom: 1.5rem;
    font-weight: 600;
}

/* Footer */
.footer {
    background-color: var(--bg-card);
    border-top: 1px solid var(--border-color);
    padding: 2rem 5%;
    margin-top: auto;
}

.footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--text-muted);
    font-size: 0.9rem;
}

.footer-socials {
    display: flex;
    gap: 1.5rem;
}

.footer-socials a {
    color: var(--text-muted);
    font-size: 1.2rem;
    transition: color 0.2s;
}

.footer-socials a:hover {
    color: var(--accent);
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
}

@media(max-width: 768px) {
    .nav { display: none; }
    .menu-toggle { display: block; }
    .slide-content h1 { font-size: 2.2rem; }
}

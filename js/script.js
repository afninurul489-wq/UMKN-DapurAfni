// =========================
// MENU NAVIGASI
// =========================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {
    const menuTerbuka = navMenu.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", menuTerbuka);
    menuToggle.textContent = menuTerbuka ? "✕" : "☰";
});

// Tutup menu setelah tautan diklik
document.querySelectorAll(".nav-menu a").forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});


// =========================
// PESAN PRODUK MELALUI WHATSAPP
// =========================

const nomorWhatsApp = "6282294193045";

document.querySelectorAll(".btn-pesan").forEach(function (button) {
    button.addEventListener("click", function () {
        const namaProduk = button.dataset.produk;

        const pesan =
            "Halo UMKM-Afni, saya ingin memesan " +
            namaProduk +
            " dengan harga Rp 2.000. Apakah produknya tersedia?";

        const linkWhatsApp =
            "https://wa.me/" +
            nomorWhatsApp +
            "?text=" +
            encodeURIComponent(pesan);

        window.open(linkWhatsApp, "_blank");
    });
});


// =========================
// TAHUN OTOMATIS
// =========================

document.getElementById("tahun").textContent =
    new Date().getFullYear();
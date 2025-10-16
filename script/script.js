async function loadTranslations() {
    const response = await fetch("lang.json");
    return await response.json();
}

function applyTranslations(translations, lang) {
    document.querySelectorAll("[data-key]").forEach(element => {
        const key = element.getAttribute("data-key");
        if (translations[key] && translations[key][lang]) {
            if (key === "site-title") {
                document.title = translations[key][lang]; // mise à jour du titre onglet
            } else if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
                element.setAttribute("placeholder", translations[key][lang]);
            } else {
                element.innerHTML = translations[key][lang];
            }
        }
    });
}

async function initLanguage() {
    const translations = await loadTranslations();

    const savedLang = localStorage.getItem("selectedLanguage") || "fr"; // langue par défaut
    applyTranslations(translations, savedLang);

    document.querySelectorAll(".flag").forEach(flag => {
        flag.addEventListener("click", () => {
            const lang = flag.getAttribute("data-lang");
            applyTranslations(translations, lang);
            localStorage.setItem("selectedLanguage", lang);
        });
    });
}


document.addEventListener("DOMContentLoaded", () => {
     initLanguage();
    const burger = document.querySelector(".burger");
    const navLinks = document.querySelector(".nav-links");

    burger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});

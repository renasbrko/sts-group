const langBtn = document.getElementById("langToggle");
const darkBtn = document.getElementById("toggleDark");

let currentLang = "ar";

/* Dark Mode */
darkBtn?.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});

/* Language Toggle */
langBtn.addEventListener("click", () => {
  currentLang = currentLang === "ar" ? "en" : "ar";

  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";

  langBtn.textContent = currentLang === "ar" ? "EN" : "AR";

  [dir="ltr"] .text-right { text-align: left; }
  [dir="rtl"] .text-left { text-align: right; }


  document.querySelectorAll("[data-ar]").forEach(el => {
    el.textContent = el.getAttribute(`data-${currentLang}`);
  });
});

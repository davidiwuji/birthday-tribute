/**
 * Birthday Tribute Edition — Customization Configuration
 * Dedicated to your Day One Home Girl!
 */
window.CUSTOM_CONFIG = {
  // Her Name / Hero Animated Title
  name: "QUEEN",
  
  // Browser Tab Title
  pageTitle: "CELEBRATING MY HOME GIRL 💖 — The Birthday Edition",

  // Top Navigation Bar
  topBarTitle: "CELEBRATING MY HOME GIRL 💖<br/>DC FAN &amp; FOREVER 🥂✨<br/>HAPPY BIRTHDAY 💕",
  contactButtonText: "OPEN WISHES",

  // Hero Animated Title (revealed letter-by-letter with Anime.js)
  heroTitle: "CELEBRATE",
  heroSubtitle: "CHAPTER 2026 / TO MY FAVORITE HOME GIRL 💕✨",

  // Footer Branding (Authentic Home Girl Tribute with Love Emojis)
  footerBrand: "A TRIBUTE TO MY DAY ONE &amp; BESTIE 💕✨<br/>FOR MY HOME GIRL WHO DESERVES THE WORLD 💖🥂🎂",
  footerButtonText: "OPEN WISHES 💕",

  // Three editorial image cards featuring her photo
  images: {
    item1: "assets/imagee.jpg", // Left card
    item2: "assets/imagee.jpg", // Center card
    item3: "assets/imagee.jpg"  // Right card
  }
};

(function applyCustomizations() {
  function applyNow() {
    const cfg = window.CUSTOM_CONFIG;
    if (!cfg) return;

    // Strict Webflow badge and external link removal
    const badges = document.querySelectorAll('.w-webflow-badge, a[href*="webflow.com"]');
    badges.forEach(b => b.remove());

    if (cfg.pageTitle) {
      document.title = cfg.pageTitle;
    }

    const topTitle = document.getElementById("top-title");
    if (topTitle && cfg.topBarTitle) {
      topTitle.innerHTML = cfg.topBarTitle;
    }

    const contactBtn = document.getElementById("contact-btn");
    if (contactBtn) {
      const btnText = contactBtn.querySelector(".button-text");
      if (btnText && cfg.contactButtonText) {
        btnText.textContent = cfg.contactButtonText;
      }
    }

    const heroTitle = document.getElementById("hero-title");
    if (heroTitle && cfg.heroTitle) {
      heroTitle.textContent = cfg.heroTitle;
    }

    const heroSubtitle = document.getElementById("hero-subtitle");
    if (heroSubtitle && cfg.heroSubtitle) {
      heroSubtitle.innerHTML = cfg.heroSubtitle;
    }


    const footerBrand = document.getElementById("footer-brand");
    if (footerBrand && cfg.footerBrand) {
      footerBrand.innerHTML = cfg.footerBrand;
    }

    const footerBtn = document.getElementById("footer-btn");
    if (footerBtn) {
      const fText = footerBtn.querySelector(".heading-3");
      if (fText && cfg.footerButtonText) {
        fText.innerHTML = cfg.footerButtonText + ' <span class="text-span">↗</span>';
      }
    }

    // Replace images if custom ones are provided
    if (cfg.images) {
      if (cfg.images.item1) {
        document.querySelectorAll('img[src*="IMG3"], #gallery-img-1').forEach(img => {
          img.src = cfg.images.item1;
          img.removeAttribute("srcset");
        });
      }
      if (cfg.images.item2) {
        document.querySelectorAll('img[src*="IMG2"], #gallery-img-2').forEach(img => {
          img.src = cfg.images.item2;
          img.removeAttribute("srcset");
        });
      }
      if (cfg.images.item3) {
        document.querySelectorAll('img[src*="IMG1"], #gallery-img-3').forEach(img => {
          img.src = cfg.images.item3;
          img.removeAttribute("srcset");
        });
      }
    }
  }

  applyNow();
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applyNow);
  }
  // Also clean up any late-injected badge elements
  window.addEventListener("load", function() {
    document.querySelectorAll('.w-webflow-badge, a[href*="webflow.com"]').forEach(b => b.remove());
  });
})();

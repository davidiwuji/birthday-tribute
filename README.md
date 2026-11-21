# Editorial Luxury Birthday Tribute Website 💖🎂

A luxury dark-mode editorial tribute website engineered with **100% bit-for-bit interaction parity** from a high-end Webflow design. Customized as a dedicated birthday celebration experience for my Day One home girl & DC fan.

---

## ✨ Features

- **Kinetic SVG Typography Sliders**:
  - `STILL MOOD`
  - `STILL LIVE`
  - `HAPPY BIRTHDAY`
  - Vector paths extracted mathematically from custom `Modern-Bold` font.
- **Anime.js Letter Reveal**: Letter-by-letter animated typography reveal on initial load.
- **Webflow IX2 3D Parallax**: 3D card tilt, perspective transformations, and multi-depth card zooms on scroll.
- **Interactive Birthday Wish Modal**: Frosted-glass backdrop blur popup containing a heartfelt tribute.
- **Zero External Dependencies**: All typography (Modern Light, Roman, Medium, Bold), SVGs, and imagery are 100% self-hosted locally.
- **Clean Editorial Branding**: Customized with `DC FAN` monogram, zero external navigation links, and stripped Webflow promotional badges.

---

## 🚀 Running Locally

You can serve this project with any local web server:

### Python
```bash
python -m http.server 8080
```
Then visit `http://localhost:8080` in your browser.

### Node / npx
```bash
npx serve .
```

---

## 🎨 Customization

All copy, names, dates, and images can be customized directly in `js/custom-config.js`:

```javascript
window.CUSTOM_CONFIG = {
  name: "QUEEN",
  pageTitle: "CELEBRATING MY HOME GIRL 💖 — The Birthday Edition",
  topBarTitle: "CELEBRATING MY HOME GIRL 💖<br/>DC FAN & FOREVER 🥂✨<br/>HAPPY BIRTHDAY 💕",
  contactButtonText: "OPEN WISHES",
  heroTitle: "CELEBRATE",
  heroSubtitle: "CHAPTER 2026 / TO MY FAVORITE HOME GIRL 💕✨",
  footerBrand: "A TRIBUTE TO MY DAY ONE & BESTIE 💕✨<br/>FOR MY HOME GIRL WHO DESERVES THE WORLD 💖🥂🎂",
  footerButtonText: "OPEN WISHES 💕",
  images: {
    item1: "assets/imagee.jpg",
    item2: "assets/imagee.jpg",
    item3: "assets/imagee.jpg"
  }
};
```

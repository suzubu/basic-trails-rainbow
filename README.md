# 🌈 Color Drift Trails

> A mouse trail effect with colorful animated circles that drift, rotate, and fade — enhanced by a shifting background gradient.

---

## 🖼 Preview

![Mouse Trail Demo](media/basic-trails-demo.gif)


---

## ⚙️ Getting Started

This project is built with plain HTML, CSS, and JavaScript using the GSAP library.

### Run locally:

```bash
# 1. Clone this repo
git clone https://github.com/suzubu/color-drift-trails.git

# 2. Open the HTML file in your browser
open Trails.html
```

> No build tools or installation required

---

## ✨ Features

- 🎨 Radial gradient trails with random bright colors
- 🌬 Trails animate with scale, drift, rotation, and fade-out
- 🌗 Dynamic background gradient animation
- 🖱 Cursor hidden for immersive visual interaction

---

## 💡 Dev Notes

- Colors are randomized from a predefined palette
- Trail elements are created dynamically and removed after animation ends
- `mix-blend-mode: lighten` is used for soft visual overlap
- `drop-shadow` and `radial-gradient` add a glowing effect
- **Note:** `"#fff00"` is likely an invalid hex and should be `"#ffff00"`

---

## 📚 Inspiration / Credits

This effect was inspired by:

- A combination of CodePen trail demos, specifically @PixelPerfectLabs
- GSAP documentation on DOM animation

---

## 🧪 Known Issues

- Trails accumulate if mouse is moved very quickly
- Visual may feel heavy on low-end devices

---

## 🔭 Roadmap / TODO

- [ ] Add sound-reactive trails
- [ ] Mobile support and touch gestures
- [ ] Trail persistence toggle

---

## 📂 Folder Structure

```bash
color-drift-trails/
├── index.js
├── style.css
├── Trails.html
├── media/
│   └── drift-preview.gif
└── README.md
```

---

## 📜 License

MIT — use, remix, enjoy!

---

## 🙋‍♀️ Author

Built with ❤️ by [suzubu](https://github.com/suzubu)

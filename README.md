<h1>Mjamaa Bank — Official Website (Still Under construction)</h1>

> **"We grow together"** — A modern, fully responsive bank website built with pure HTML, CSS, and JavaScript. No frameworks. No libraries. Just clean, handcrafted code.

![Mjamaa Bank Hero](https://i.ibb.co/PsmWm3VQ/Screenshot-2026-09-12-134809.png)

--

## 🌐 Live Demo

🔗 [mjamaabank.vercel.app](https://mjamaabank.vercel.app)

--

## 📁 Project Structure

mjamaa-bank/
- │
- ├── index.html # Home page
- ├── about-us.html # About Us page
- ├── pricing.html # Pricing / Tariffs page
- ├── contact.html # Contact page
- ├── login.html # Login page
- │
- ├── styles.css # Global stylesheet
- ├── script.js # Main JavaScript file
- │
- └── images/
- ├── LANDING-HERO-WOMAN.png
- ├── LANDING-HERO-KIDS.png
- └── LANDING-HERO-GRADUATE.png

--

## ✨ Features

- ⚡ **Zero dependencies** — No React, Vue, Angular, Bootstrap, jQuery, or any external library
- 🎠 **Hero Slideshow** — Fade transitions, autoplay, arrow navigation, dot indicators, keyboard support, and pause on hover
- 📊 **Live Currency Ticker** — Infinite scrolling bar showing real-time KES buy/sell rates against major world currencies
- 📱 **Fully Responsive** — Mobile-first design with hamburger menu and adaptive layouts
- 🎨 **Custom Design System** — CSS variables for consistent color, spacing, and typography across all pages
- 🔠 **DM Sans Typography** — Clean, tight grotesque font with intentional negative letter-spacing for a premium feel
- 🧭 **Fixed Navigation** — Sticky top nav with active page indicator and smooth hover transitions
- 🌍 **Multi-page Architecture** — Separate HTML pages for each section of the site
- ♿ **Accessibility** — ARIA labels on interactive elements, keyboard navigable slideshow, semantic HTML throughout

---

## 🛠️ Built With

| Technology | Purpose |
|---|---|
| **HTML5** | Page structure and semantics |
| **CSS3** | Styling, layout, animations, responsive design |
| **Vanilla JavaScript** | Interactivity — slideshow, hamburger menu, ticker |
| **Google Fonts (DM Sans)** | Typography |
| **Lucide Icons (SVG)** | Navigation and UI icons (inlined as SVG, no JS dependency) |
| **Vercel** | Deployment and hosting |

> ℹ️ No npm. No build step. No bundler. Open `index.html` in a browser and it works.

---

## 🎨 Design System

### Colors

| Name | Hex | Usage |
|---|---|---|
| Primary Green | `#16A34A` | Buttons, links, active states |
| Success Green | `#22C55E` | Icons, highlights |
| Dark Green | `#15803D` | Hover states, ticker bar |
| Text Primary | `#1A1A1A` | Body text |
| Text Secondary | `#6C757D` | Muted text |
| Background | `#F8F9FA` | Page background |
| Card | `#FFFFFF` | Card and nav background |
| Danger | `#DC2626` | Error states |

### Typography

```css
font-family: 'DM Sans', sans-serif;

/* Headings */
letter-spacing: -0.04em;
font-weight: 700;

/* Body */
letter-spacing: -0.02em;
font-weight: 300;
```

### Breakpoints

| Breakpoint | Width |
|---|---|
| Mobile S | `400px` |
| Mobile M | `480px` |
| Mobile L | `576px` |
| Tablet | `750px` |

---

## 📄 Pages

### 🏠 Home (`index.html`)
- Hero slideshow with 3 slides (Banking, Football Sponsorship, Scholarship)
- Currency ticker bar
- "I'm looking for..." services section

### 👥 About Us (`about-us.html`)
- Bank story and mission
- Team section

### 💰 Pricing (`pricing.html`)
- Account types and tariffs
- Loan rates and terms

### 📞 Contact (`contact.html`)
- Branch locations
- Contact form

### 🔐 Login (`login.html`)
- Internet banking login

---

## 🎠 Hero Slideshow

The slideshow cycles through three full-viewport slides with:

- **Fade transitions** via CSS `opacity`
- **Autoplay** every 5 seconds via `setInterval`
- **Arrow buttons** for manual navigation
- **Dot indicators** that reflect the active slide
- **Keyboard support** — `←` and `→` arrow keys
- **Pause on hover**

Each slide targets a specific audience:

| Slide | Image | Message |
|---|---|---|
| 1 | Woman in bank | Personal & business banking |
| 2 | Kids playing football | Football talent sponsorship |
| 3 | Graduating student | Mjamaa Scholarship Programme |

---

## 💱 Currency Ticker

A fixed bar below the navigation showing live KES exchange rates:

● USD/KES — Buy: 129.50 Sell: 130.20 ● GBP/KES — Buy: 164.30 ...


- Powered entirely by CSS `@keyframes` animation
- Duplicated content ensures seamless infinite loop
- Pauses on hover
- Sits at `position: fixed` directly below the navbar

---

## 📱 Responsive Design

The site adapts across all screen sizes with no JavaScript — purely CSS media queries:

- **Desktop** — Full nav, side-by-side layouts, large hero text
- **Tablet** — Adjusted padding and font sizes
- **Mobile** — Hamburger menu, stacked layouts, hidden arrow buttons on slideshow, touch-friendly tap targets

---

## 🚀 Getting Started

No installation required.

### Run Locally

```bash
# Clone the repo
git clone https://github.com/yourusername/mjamaa-bank.git

# Navigate into the folder
cd mjamaa-bank

# Open in browser
open index.html
# or just double-click index.html in your file explorer
```

### Deploy to Vercel

```bash
# Install Vercel CLI (only if you want CLI deploy)
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo directly on [vercel.com](https://vercel.com) for automatic deployments on every push.

---

## 🗺️ Roadmap

- [ ] Dark mode toggle
- [ ] Loan repayment calculator
- [ ] Live exchange rates via API
- [ ] Branch/ATM locator with map
- [ ] Scholarship application form
- [ ] Football sponsorship nomination form
- [ ] Mobile banking app download section
- [ ] FAQ accordion section
- [ ] Multilingual support (English / Swahili)

---

## 🤝 Contributing

This is a demo bank project but contributions are welcome.

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 📜 License

This project is licensed under the **MIT License** — feel free to use it as a reference or starting point for your own projects.

---

## 👤 Author

**Evra**
- GitHub: [@Vyronevra-dev](https://github.com/Vyronevra-dev)
- Website: [mjamaabank.vercel.app](https://mjamaabank.vercel.app)

---

> Built with 🤍 and zero dependencies.

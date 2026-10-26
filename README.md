# BitSwarmer 🚀

> **BitSwarmer** (formerly Pixel Scraper 2088) is an ultra-immersive, fully functional **CRT Cyberpunk Galaga Arcade Web Application** combining retro 8-bit game mechanics with live asynchronous web scraping and automated intelligence data extraction.

---

## ✨ Key Features & Architecture

1. **Authentic 8-Bit Pixel Matrix Renderer (`index.html`)**:
   - Custom bit-array sprite engine rendered cell-by-cell (`ctx.fillRect`) with dynamic scaling and micro-banking tilt transforms.
   - 4 customizable starfighter hull architectures: *Scout Interceptor*, *Heavy Dreadnought*, *Stealth Fighter*, and *Cyber Carrier*.

2. **Galaga Combat & Vector Tracking Engine**:
   - Smooth $V_x$, $V_y$ tracking kinematics with Lerp damping interpolation.
   - Directional, diagonal, and fan-spread projectile vector firing systems.
   - Shielded core boss aliens with live damage popups and particle explosion effects.

3. **Live Asynchronous Web Scraping & DOM Parser**:
   - Integrated Express backend CORS proxy and browser `DOMParser` to extract headings, meta telemetry, and media assets in real time.
   - Instant offline **Arcade Simulation mode** for zero-latency testing.

4. **Interactive 8-Bit Crawler Topology Node Graph**:
   - Visualizes harvested target domains orbiting around a central root intelligence node with real-time vector connectors.

5. **Data Vault & Bulk Asset Exporter (`JSZip` & `.md`)**:
   - Comprehensive artifact inspector allowing review of network headers, DOM headings, and media asset galleries.
   - **Trash All** capability to purge past session telemetry instantly.
   - **Bulk ZIP Generator** via `JSZip` and **8-Bit Markdown Combat Report Exporter**.

6. **8-Bit Quest Log & Retro Terminal Executive Summary**:
   - Automatically decodes target telemetry into a styled retro terminal ASCII briefing report.

7. **Web Audio API Chiptune BGM Synthesizer**:
   - Procedural 8-bit square and triangle wave synthesizer playing a classic arcade chip-tune melody loop with an interactive Mute/Unmute toggle.

---

## 🛠️ Tech Stack

- **Node.js & Express** (Backend Server & CORS Scraper Proxy)
- **HTML5 Canvas & 2D Context** (60 FPS Game Engine)
- **Tailwind CSS Play CDN** with Custom Cyberpunk Neon Palettes (`#050811`, `#00ff66`, `#ff007f`, `#00ffff`, `#ffd866`)
- **Web Audio API** (Procedural Laser, Explosion, Harvest, and Chiptune BGM synthesis)
- **JSZip & FileSaver.js** (Client-side archive generation)

---

## 🚀 Quick Start / Local Run

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the Express server:
   ```bash
   npm start
   ```
3. Open `http://localhost:8080` in your browser.

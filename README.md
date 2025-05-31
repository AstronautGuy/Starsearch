# 🌌 Starsearch

> A fast, minimal Spotlight-like launcher for Windows.  
> Built with Electron. No AI. No BS. Just speed, style, and scriptable power.

---

## ⚡ Features

- 🧠 **Command Launcher** — Launch apps with fuzzy search (`chrome`, `notepad`, etc.)
- 🛠️ **Custom Commands** — Map keywords to scripts, folders, or web actions
- 📁 **File Search** — Blazingly fast local search (Documents, Desktop, etc.)
- 🌗 **Dark Mode Support** — Respects system theme or manually toggle
- 🧩 **Extensible** — Add your own commands via JSON (no code needed)

---

## 🧰 Tech Stack

- **Electron** – desktop wrapper
- **React** – UI
- **Tailwind CSS** + **shadcn/ui** – styling & components
- **Framer Motion** – animations
- **Node.js** – command execution
- **Fuse.js** – fuzzy search engine

---

## 🚀 Getting Started

1. **Clone the repo**  
   ```bash
   git clone https://github.com/your-username/starsearch
   cd starsearch
````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run it locally**

   ```bash
   npm run dev
   ```

4. **Build for Windows**

   ```bash
   npm run build
   ```

---

## ⚙️ Custom Commands

Create your own command shortcuts by editing:

```
/src/config/commands.json
```

Example:

```json
{
  "yt": "https://www.youtube.com/results?search_query=",
  "gh": "https://github.com/",
  "docs": "C:/Users/you/Documents"
}
```

---

## 🧪 Status

* [x] Basic launcher UI
* [x] App and file launch support
* [x] Keyboard-first UX (`Ctrl+Space`)
* [x] Command config via JSON
* [ ] Plugin support (coming soon)
* [ ] Search preview with icons

---

## 💻 Keyboard Shortcuts

| Action         | Shortcut     |
| -------------- | ------------ |
| Open launcher  | `Ctrl+Space` |
| Close launcher | `Esc`        |
| Run command    | `Enter`      |

---

## ✨ Philosophy

No AI. No telemetry. No bloated assistants.
This is your keyboard-powered cockpit to rule the OS — lightweight, local, and lightning fast.

---

## 🛰 About

**Made by [@MrAstronaut](https://github.com/AstronautGuy)**
for builders, coders, and keyboard warriors.

---
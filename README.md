# VS Code–Inspired Developer Portfolio

A highly interactive, VS Code–style developer portfolio built with **Vite + React + Tailwind CSS**.  
Designed to be intuitive for non-developers while offering a familiar, engaging experience for engineers.

This project functions as a **virtual workspace**: files, folders, tabs, breadcrumbs, command palette, and contextual sidebars — all fully functional and mobile-friendly.

---

## ✨ Features

### Workspace Experience
- VS Code–inspired UI (Explorer, tabs, breadcrumbs, status bar)
- Dual layout modes:
  - **Dev Mode** — full workspace experience
  - **Simple Mode** — mobile-friendly, non-technical navigation
- Fully keyboard-accessible **Command Palette** (`Cmd/Ctrl + K`)
- Smart breadcrumbs with file-type hints
- Context-aware right sidebar (“Inspector”)

### Pages & Content
- `START_HERE.md` – guided entry point
- `ABOUT.md` – professional summary
- `EXPERIENCE.log` – work history
- `SKILLS.json` – skills displayed as JSON + visual badges
- `CONTACT.md` – contact & call-to-action
- **Project case studies** (long-form, scrollable, production-ready)

### Highlighted Project
**AI_Receptionist.md**
- 24/7 AI phone receptionist automation
- Handles inbound calls
- Captures structured data
- Logs call summaries
- Syncs contacts/leads into a CRM
- Triggers follow-ups (email/SMS/tasks)
- Built with modular automation architecture

### Automation & Actions
- Resume download directly from the Explorer
- Command palette actions (email, resume, mode toggle)
- Distinction between navigable files and executable actions

---

## 🧱 Tech Stack

- **Frontend:** React, Vite, Tailwind CSS
- **Routing:** React Router
- **State Management:** Local stores (lightweight)
- **Styling:** Tailwind + custom VS Code–inspired theme
- **Assets:** Static files served via Vite (`/public`)
- **Deployment:** Ready for Netlify / Vercel / Render

---

## 📁 Project Structure
```bash
src/
├── components/ # UI components (Explorer, Tabs, Palette, Sidebar)
├── layouts/ # Dev & Simple layouts
├── pages/ # About, Skills, Experience, Contact
├── projects/ # Project case-study pages
├── data/
│ └── workspace.js # Virtual file tree definition
├── assets/ # Local assets (icons, images)
└── index.css # Global styling & VS Code theme
```

---

## 🚀 Getting Started

### Install dependencies
```bash
npm install
```
### Build for production
```bash
npm run build
```

## Resume Download
The resume is exposed as a workspace action, not a route.

**Place PDF here**
```bash
public/resume.pdf
```
It can be accessed via:
- Explorer -> Resume.pdf
- Command Palette -> "Download Resume"

## Design Goals
- Feel immediately familiar to developers
- Still clear and navigable for non-technical users
- Showcase how i think, not just what I've built
- Avoid static "portfolio page" patterns
- Emphasize systems, UX, and real-world automation


## Future Enhancements
- Analytics (page & project engagement)
- Live demo integrations
- Knowledge-base ingestion for AI projects
- Error Boundary with VS Code-style diagnostics
- Project metadata auto-rendering

## Author
Bradley Boyd
Full-stack developer focused on clean UI, solid backend systems, and practical automation.

📧 Email: braddboyd5@gmail.com

🌐 Portfolio: https://bradley-b.com

## License 
MIT — feel free to explore, learn from, or adapt this project.



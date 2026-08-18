# Temur Musakulov — Portfolio

A personal portfolio site for Temur Musakulov, presented as a software engineer
actively transitioning into DevOps. Built with React + Vite, containerized
with Docker/Nginx, and structured so it's ready for Kubernetes and CI/CD.

**Live sections:** Hero · About · Skills · Experience · Projects · DevOps Journey ·
Infrastructure Architecture · Contact

---

## Tech stack

- **Frontend:** React 18 + Vite (plain CSS, no framework lock-in)
- **Web server (prod):** Nginx (Alpine)
- **Container:** Docker (multi-stage build)
- **CI:** GitHub Actions (lint → build → Docker build → optional GHCR push)
- **Future-ready:** Kubernetes manifests in `k8s/` (Deployment, Service, Ingress)

---

## Project structure

```
portfolio/
├── src/
│   ├── components/       # One component per section (Hero, About, Skills, ...)
│   ├── data/              # All editable content lives here (see below)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css          # Design tokens + all styles
├── public/
│   └── favicon.svg
├── index.html
├── package.json
├── vite.config.js
├── Dockerfile              # Multi-stage: Node build → Nginx serve
├── .dockerignore
├── nginx.conf              # SPA routing, gzip, cache headers
├── docker-compose.yml
├── .github/workflows/ci.yml
├── k8s/
│   ├── deployment.yaml
│   ├── service.yaml
│   └── ingress.yaml
├── .gitignore
└── README.md
```

### Editing content

Every piece of real-world content (name, links, skills, experience, projects,
DevOps journey stages) lives in `src/data/`, not scattered through components:

| File | What it controls |
|---|---|
| `src/data/profile.js` | Name, role, headline, about text, contact links |
| `src/data/skills.js` | Skill categories and items |
| `src/data/experience.js` | Work history |
| `src/data/projects.js` | Project cards, tech tags, GitHub/demo links |
| `src/data/journey.js` | DevOps learning-path stages and the architecture diagram |

To update the site, edit these files — no need to touch component code or CSS.

---

## Running locally (without Docker)

Requires **Node.js 20+** and npm.

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server (hot reload)
npm run dev
# → http://localhost:5173

# 3. Build the production bundle
npm run build
# → outputs to dist/

# 4. Preview the production build locally
npm run preview
# → http://localhost:4173
```

---

## Running with Docker

Requires **Docker** (and optionally Docker Compose).

### Option A — plain Docker

```bash
# 1. Build the image
docker build -t temur-portfolio .

# 2. Run the container
docker run -d -p 8080:80 --name temur-portfolio temur-portfolio

# → open http://localhost:8080
```

Stop and remove it with:

```bash
docker stop temur-portfolio && docker rm temur-portfolio
```

### Option B — Docker Compose

```bash
docker compose up --build
# → open http://localhost:8080

docker compose down
```

The Dockerfile is a **multi-stage build**: Stage 1 uses `node:20-alpine` to
install dependencies and run `vite build`; Stage 2 copies only the built
static files (`dist/`) into a lightweight `nginx:1.27-alpine` image. The final
image ships no Node.js, no source code, and no dev dependencies — just static
assets served by Nginx.

---

## CI/CD (GitHub Actions)

`.github/workflows/ci.yml` runs on every push/PR to `main`:

1. Install dependencies, lint, and build the frontend.
2. Build the Docker image (validates the Dockerfile on every change).
3. On pushes to `main`, log in to GitHub Container Registry using the
   automatically-provided `GITHUB_TOKEN` (no manually created secret needed)
   and push `ghcr.io/<owner>/temur-portfolio:latest`.

---

## Kubernetes (future-ready, not required for local use)

The `k8s/` directory contains a starting point for deploying to a cluster
(e.g. Minikube):

```bash
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
kubectl apply -f k8s/ingress.yaml
```

Before applying, update `k8s/deployment.yaml` with the image you actually
pushed (e.g. `ghcr.io/<your-username>/temur-portfolio:latest`) and update the
`host` in `k8s/ingress.yaml`. These manifests assume an Ingress controller
(e.g. `ingress-nginx`) is already installed in the cluster — they are a
foundation to build on, not a claim that this is currently deployed anywhere.

---

## Secrets

There are no secrets in this project. All contact links and content are
public-facing and live in plain JS files under `src/data/`. If you later add
something that genuinely needs a secret (an API key, a form-submission
token, etc.), use environment variables — never commit them:

```bash
cp .env.example .env   # if/when you add one
# then reference values via import.meta.env.VITE_* in Vite
```

`.env*` files are already excluded via `.gitignore` and `.dockerignore`.

---

## Assumptions made while building this

- No real GitHub/LinkedIn/Telegram URLs or email were provided — placeholders
  live in `src/data/profile.js` and `src/data/projects.js`; replace them
  before publishing.
- The **Wearable Health Monitor** project was named but no feature list or
  tech stack was provided, so its description in `src/data/projects.js` is a
  placeholder — update it with real details or remove the entry.
- Project tech-stack tags (e.g. for Macom Place, CED Hospital app) are
  reasonable placeholders based on the description given, not confirmed
  stacks — adjust them in `src/data/projects.js` to match reality.
- The Kubernetes manifests and the "Infrastructure Architecture" diagram
  describe an **intended** workflow for learning/deployment purposes, not
  infrastructure that is currently live in production.
- No color scheme, logo, or existing brand assets were provided, so the dark,
  terminal-influenced visual direction was designed from scratch to fit a
  DevOps-focused engineering portfolio.

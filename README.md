# Interview Prep Site

Static interview prep website built with MkDocs Material.

## Quick Start

```bash
# From the code_prep directory
cd ~/code/code_prep

# Install dependencies (first time only)
uv sync

# Start the dev server
uv run mkdocs serve
```

Open `http://127.0.0.1:8000` in your browser.

## Build for Deployment

```bash
uv run mkdocs build
```

Output goes to `site/`. Serve it with any static file server.

## Deploy to GitHub Pages

```bash
uv run mkdocs gh-deploy
```
# interview_prep

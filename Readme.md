# How to Not Suck at GSD — King's Call Codex

A static HTML/CSS/JS reference site for the King's Call GSD guild primer,
ready to deploy on GitHub Pages.

## Structure

index.html            main page
css/style.css          all styling
js/main.js             nav + gallery behavior
js/gallery-data.js     <- edit this file to add/remove photos
images/                 put your image files here

## Adding photos (static, code-level)

1. Copy an image file into `images/`.
2. Add one entry to the array in `js/gallery-data.js`:
   js
   { src: "images/my-photo.jpg", caption: "Whatever you want to say" }
3. Commit and push. That's it — no CMS, no upload form, no build step.

If a listed image file is missing, the gallery shows a placeholder frame
instead of a broken image, so you can plan captions before the files exist.

## Deploying to GitHub Pages

1. Create a new GitHub repo and push these files to it (they can sit at the
   repo root, or in a `/docs` folder — just match what you pick in step 3).
2. In the repo, go to **Settings → Pages**.
3. Under "Build and deployment", set **Source** to "Deploy from a branch",
   pick your branch (usually `main`) and the folder (`/ (root)` or `/docs`).
4. Save. GitHub will give you a URL like
   `https://<your-username>.github.io/<repo-name>/` — the site is live there
   within a minute or two.

No server, database, or build step is required — everything here is plain
static HTML/CSS/JS, which is exactly what GitHub Pages serves.

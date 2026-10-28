# sethschwartz.dev

Personal site of Seth Schwartz, served by GitHub Pages. Static files only: no build step, no analytics, no cookies.

| Path | Page |
|---|---|
| `index.html` | Home: about, career, featured projects, contact |
| `roxy/index.html` | Roxy, a procedural DCC: clips, the Assistant, scenes, modelling, rendering, scripting, architecture, roadmap |
| `site.css`, `site.js` | Shared styles, and the script that plays clips while they're on screen |
| `img/` | Renders, interface captures and screen recordings, all made in Roxy |
| `resume.pdf` | Résumé, without the phone number |
| `404.html`, `favicon.svg`, `CNAME` | Pages plumbing |

`roxy.sethschwartz.dev` is served by the separate `roxy.sethschwartz.dev` repo, which only redirects here to `/roxy/`.

## Preview locally

```
python3 -m http.server 8000
```

Then open http://localhost:8000/.

## Metrics on the Roxy page

Measured on Roxy's main branch, never copied from a resume or README:

- **Commands and categories:** `len(roxy.registry.commands())` and the set of their `category` values.
- **Tests:** the total from `python -m tests.run_all --list` (tests defined, not a run).
- **Commits:** `git rev-list --count main`. **Pull requests:** merged PRs on GitHub.
- **Lines:** Python lines in each package directory, tests excluded.
- **Kitchen_set import** (Apple M1 Max, median of three warm runs): wall-clock time of `roxy.scene.importUsd` on Pixar's Kitchen_set, smooth normals included.
- **Render times** (Apple M1 Max): wall-clock time of `roxy.scene.renderImage` at the stated size and sample count.

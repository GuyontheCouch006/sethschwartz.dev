# sethschwartz.dev

Personal site of Seth Schwartz, served by GitHub Pages. Static files only: no build step, no analytics, no cookies.

| Path | Page |
|---|---|
| `index.html` | Home: about, career, featured projects, contact |
| `roxy/index.html` | Roxy, a 3D content tool: samples, features, interface, architecture, metrics |
| `img/` | Renders, interface captures and timelapses, all made in Roxy |
| `404.html`, `favicon.svg`, `CNAME` | Pages plumbing |

`roxy.sethschwartz.dev` is served by the separate `roxy.sethschwartz.dev` repo, which only redirects here to `/roxy/`.

## Preview locally

```
python3 -m http.server 8000
```

Then open http://localhost:8000/.

## Metrics on the Roxy page

Measured on an Apple M1 Max, never copied from a resume or README:

- **Commands:** `len(roxy.registry.commands())` on Roxy's main branch.
- **Tests:** the count from the last full test run.
- **Kitchen_set import:** wall-clock time of `roxy.scene.importUsd` on Pixar's Kitchen_set, smooth normals included.
- **Render times:** wall-clock time of `roxy.scene.renderImage` at the stated size and sample count.

# Без Градуса · дегустационный дневник

A small static site (in Russian) walking through **twelve alcohol-free beers** — one
reader in mind. Each beer gets a story, tasting notes, and "what to look for" clues,
plus a short primer on how alcohol-free beer differs from the real thing.

The signature detail: **every beer is drawn in pure CSS** — its own liquid colour,
foam height and haze, arranged as a tasting flight. No image assets.

## Structure

| File | Purpose |
|------|---------|
| `index.html` | Shell: fonts, top bar, `#app` mount, footer |
| `styles.css` | All styling + the CSS beer-glass system |
| `app.js` | Beer data, glass builder, hash router (flight / detail / guide) |
| `favicon.svg` | Little beer glass |

Pure static — no build step. Open `index.html` or run any static server:

```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Navigation

- **Флайт** — visual list of all twelve.
- Tap any glass → **detail** (history, tasting notes, clues, serving).
- On a detail page: **← / →** keys or **swipe** move between beers; **Esc** returns to the flight.
- **Путеводитель** — the tasting primer.

## The beers

Guinness 0.0 · vandeStreek Playground IPA · Jever Fun · Estrella Free Damm ·
Clausthaler · Baladin Botanic Blanche · Baladin Botanic IPA · La Trappe Epos ·
Waterland Gulpy Glennis · vandeStreek Funhouse NEIPA · iKi Green Tea Zero ·
Bitburger 0,0 — all ≤ 0.5 % ABV.

Deployed via GitHub Pages.

# deiomo — personal website

A self-contained purple-and-black personal site with the supplied original character artwork. Plain HTML, CSS, and JavaScript; no installation or build step required.

## Publish on GitHub Pages

1. Sign in to GitHub as **deiomo** and create a repository named **deiomo.github.io**. Use a public repository for GitHub Free.
2. Extract the ZIP and upload its contents to the repository's root. `index.html` must be at the top level, alongside `styles.css`, `script.js`, `.nojekyll`, and the `assets` folder. Do not upload the ZIP itself or nest everything inside another folder.
3. In the repository, open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**. Select **main** and **/ (root)**, then save.
4. When deployment completes, visit **https://deiomo.github.io/**. Publication may take a few minutes.

Official guidance: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## Preview and customize

Open `index.html` in a browser to preview locally. All styling, artwork, and scripts are included, with no third-party font or script requests.

- **index.html** — wording, sections, and GitHub links.
- **styles.css** — palette, typography, layout, and responsive styles.
- **script.js** — keeps the footer year current; the site works without JavaScript.
- **assets/oc.png** — the supplied OC image, preserved unchanged. The portrait crops its display only; the arrow opens the full artwork.
- **assets/favicon.svg** — matching initial icon.
- **.nojekyll** — disables Jekyll processing on GitHub Pages.

The layout supports narrow screens, keyboard navigation, visible focus indicators, and reduced-motion preferences. All local links use relative paths, so the site also works from a GitHub Pages project subdirectory.

The site uses only the online identity **deiomo**. It contains no fabricated project listings, contact details, analytics, or external widgets. The supplied artwork remains the owner's asset; this package does not grant a separate license to reuse it.

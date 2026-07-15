# Kaixiang Yao — Personal Research Website

A dependency-free, responsive academic website designed for GitHub Pages.

Live site: <https://kaixiangyao.github.io/>

## Preview locally

From this folder, run either:

```powershell
python -m http.server 8000
```

or open `index.html` directly in a browser. The local server is preferable because it matches deployed browser behavior more closely.

Then visit <http://localhost:8000>.

## Files

- `index.html` — homepage and selected research.
- `cv.html` — privacy-conscious web CV.
- `assets/styles.css` — all responsive styling.
- `assets/site.js` — navigation, reveal effects, date, and email handling.
- `assets/*.{png,jpg}` — supplied research overview figures.

## Deploy to GitHub Pages

The intended repository name is:

```text
KaixiangYao.github.io
```

The repository is configured to publish from the default branch at:

```text
https://kaixiangyao.github.io/
```

No build step, framework, package manager, or secret is required.

## Updating content

- Research cards and text live in `index.html`.
- Detailed CV content lives in `cv.html`.
- Publication links should point to DOI, arXiv, OpenReview, or an official project page.
- Do not add the publisher PDF for the digital-twin paper unless redistribution rights are confirmed.
- Do not replace the web CV with the supplied PDF without removing the phone number first.

## Email privacy

The email address is converted from character codes only when a visitor clicks an email button. This reduces basic scraping but is not absolute protection against sophisticated bots. No phone number is published.

## University marks

University marks are used only to identify the institutions listed in the CV:

- SUSTech seal: [official SUSTech Visual Identity System](https://sustech.edu.cn/en/school_logo.html)
- UC Berkeley seal: [Wikimedia Commons copy based on the Berkeley brand seal](https://commons.wikimedia.org/wiki/File:Seal_of_University_of_California,_Berkeley.svg)
- Shanghai Jiao Tong University seal: [official SJTU Visual Identity System](https://vi.sjtu.edu.cn/index.php/articles/base/1)
- Tsinghua University seal: [official Tsinghua Visual Identity System](https://vi.tsinghua.edu.cn/gk/xxbz/xh.htm)

The marks remain the property or trademarks of their respective institutions and do not imply endorsement.

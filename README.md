# Ramzey: ramzeycommercial.com

"Your Property, Our Priority." Commercial contractor website. Static site with plain HTML, CSS and JS and no build step. It's hosted the same way as RighteousFriend (GitHub Pages + `CNAME`).

```
index.html        Home
services.html     Services (each service has an anchor matching its SERVICE_TYPES key: #renovation, #pressure-washing, …)
work.html         Our Work (grid + filter by type, supports ?type=painting)
project.html      Single project page (project.html?p=<slug>)
about.html        Story, values, team, licensing & insurance
estimate.html     Request an Estimate form (supports ?type=concrete to preselect)
assets/css/styles.css
assets/js/site-config.js   ← company name, phone, email, license, form endpoint
assets/js/projects.js      ← the project list ("blog posts")
assets/js/main.js          header/footer, project rendering, gallery, form logic
images/projects/<slug>/    real project photos go here
videos/                    self-hosted project videos (or use YouTube)
```

Header, footer, phone numbers and emails all come from `site-config.js`, so editing that one file updates every page.

## Run locally

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```

## Before launch: checklist

- [x] Company name (Ramzey) and slogan in `site-config.js`
- [ ] `assets/js/site-config.js`: phone, service area, hours, license #, insurance wording; confirm `info@ramzeycommercial.com` exists
- [ ] Set `formEndpoint` (see below)
- [ ] Replace placeholder photos (all `images.unsplash.com` URLs) with real ones:
      hero (`index.html`), intro photo, service images (`services.html`), team/owner (`about.html`)
- [ ] Replace the placeholder commercial projects in `projects.js` with real jobs (client is picking photos/projects)
- [ ] About page: real story, team names/roles/bios
- [ ] Add `CNAME` containing `ramzeycommercial.com` once DNS is pointed at GitHub Pages, then enable Pages

## Services

Ten categories, defined once in `SERVICE_TYPES` (`assets/js/projects.js`). Each key is used for the project filter chips, the footer links, the estimate form dropdown, the `services.html#<key>` anchor and the icon:

`renovation`, `interior`, `demolition`, `concrete`, `asphalt`, `painting` (painting & striping), `maintenance`, `pressure-washing`, `landscaping` (landscaping & site work), `general-contracting`.

If you add or rename one, also update the tile in `index.html`, the section in `services.html`, and the icon in `main.js`.

## Adding a project

1. Create `images/projects/<slug>/` and drop in photos (`01.jpg`, `02.jpg`, …). About 1600px wide, JPG, under 500 KB each is ideal.
2. In `assets/js/projects.js`, copy an existing block to the **top** of `window.PROJECTS` and fill it in:

```js
{
  slug: "driveway-replacement-pine-st",
  title: "Driveway Replacement",
  types: ["concrete", "demolition"],       // keys from SERVICE_TYPES
  location: "Pine Street",
  date: "2026-10",
  featured: false,                           // true = shows on home page
  summary: "One or two sentences for the card.",
  scope: ["Removed old asphalt", "Poured new 4\" reinforced slab", "Regraded and sodded edges"],
  body: "Optional longer paragraph.",
  images: [
    { src: "images/projects/driveway-replacement-pine-st/01.jpg", alt: "New concrete driveway", caption: "After" },
    { src: "images/projects/driveway-replacement-pine-st/02.jpg", alt: "Old cracked asphalt", caption: "Before" }
  ],
  video: { youtube: "YOUTUBE_VIDEO_ID" }          // optional; or { src: "videos/pine-st.mp4", poster: "images/…jpg" }
},
```

3. Commit and push. It appears on Our Work automatically, with filter chips, a project page and prev/next links.

Projects with a video get a "Video" badge on their card.

## Estimate form

The form POSTs `multipart/form-data` to `SITE.formEndpoint` with these fields:
`name, company, phone, email, address, type, typeLabel, description, photos (0–8 files), submittedAt, page`.

**Option A: n8n (recommended, already in use for RighteousFriend)**
1. New workflow → **Webhook** node, method `POST`, path `estimate-request`,
   *Options → Binary Property* = `photos` (n8n names them `photos0`, `photos1`, …).
   Set *Respond* to "Immediately" or add a *Respond to Webhook* node returning `{"ok":true}`.
   Allow CORS from the site's domain (Webhook → Options → Allowed Origins).
2. Add a **Send Email** / Gmail node to the owner with the fields in the body and the binaries attached.
   Optionally add a Google Sheets node to log every lead.
3. Put the production URL in `site-config.js`:
   `formEndpoint: "https://n8nbronco.com/webhook/estimate-request"`

**Option B: Formspree.** Use `https://formspree.io/f/<id>`. File uploads require a paid plan.

While `formEndpoint` is empty, submitting shows a "call or email us" message instead of failing silently.

Spam protection: a hidden honeypot field (`website`). Add Cloudflare Turnstile later if needed.

## Design notes

- Colours: navy `#142c3e`, accent `#d09500`, white, warm off-white `#f7f6f2` for alternating sections, darker navy `#0c1d2a` for the footer.
- The gold doesn't have enough contrast for text on white, so gold buttons use navy text. Small accent text on white uses a darker gold `#8a6400`.
- Fonts: Barlow Condensed (headings) + Inter (body), via Google Fonts.
- On phones: a hamburger menu plus a sticky bottom bar with **Call** and **Free Estimate** buttons.

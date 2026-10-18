(function () {
  "use strict";

  const SITE = window.SITE || {};
  const PROJECTS = window.PROJECTS || [];
  const TYPES = window.SERVICE_TYPES || {};

  /* ------------------------------------------------------------------------
     Icons (Lucide-style, stroke = currentColor)
     ------------------------------------------------------------------------ */
  const svg = (paths, extra = "") =>
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${extra}>${paths}</svg>`;

  const ICONS = {
    phone: svg('<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>'),
    mail: svg('<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>'),
    pin: svg('<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>'),
    clock: svg('<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>'),
    arrow: svg('<path d="M5 12h14M13 5l7 7-7 7"/>'),
    arrowLeft: svg('<path d="M19 12H5M11 19l-7-7 7-7"/>'),
    check: svg('<path d="M20 6 9 17l-5-5"/>'),
    shield: svg('<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>'),
    badge: svg('<circle cx="12" cy="8" r="6"/><path d="M15.5 13 17 22l-5-3-5 3 1.5-9"/>'),
    clipboard: svg('<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/>'),
    menu: svg('<path d="M4 6h16M4 12h16M4 18h16"/>', 'class="icon-open"'),
    close: svg('<path d="M18 6 6 18M6 6l12 12"/>'),
    chevL: svg('<path d="m15 18-6-6 6-6"/>'),
    chevR: svg('<path d="m9 18 6-6-6-6"/>'),
    chevDown: svg('<path d="m6 9 6 6 6-6"/>'),
    play: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
    upload: svg('<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m17 8-5-5-5 5M12 3v12"/>'),
    users: svg('<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>'),
    handshake: svg('<path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3M3 4h8"/>'),
    ruler: svg('<path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2M11.5 9.5l2-2M8.5 6.5l2-2M17.5 15.5l2-2"/>'),
    sparkle: svg('<path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/>'),

    /* Service icons */
    renovation: svg('<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="m14.5 13.5-5 5M9.5 13.5h5v5"/>'),
    interior: svg('<path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"/><path d="M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0Z"/><path d="M4 18v2M20 18v2"/>'),
    concrete: svg('<rect x="2" y="14" width="20" height="7" rx="1"/><path d="M6 14v-3M12 14V8M18 14v-3"/><path d="M4 11h4M10 8h4M16 11h4"/>'),
    asphalt: svg('<path d="M4 21 8 3M20 21 16 3"/><path d="M12 4v3M12 11v3M12 18v3"/>'),
    painting: svg('<rect x="3" y="3" width="16" height="6" rx="1.5"/><path d="M19 6h2v5h-9v3"/><rect x="10" y="14" width="4" height="7" rx="1"/>'),
    landscaping: svg('<path d="M7 20h10"/><path d="M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"/><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"/>'),
    demolition: svg('<path d="m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9"/><path d="m18 15 4-4"/><path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"/>'),
    "pressure-washing": svg('<path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"/><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"/>'),
    "general-contracting": svg('<path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z"/><path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"/><path d="M4 15v-3a6 6 0 0 1 6-6"/><path d="M14 6a6 6 0 0 1 6 6v3"/>'),
    maintenance: svg('<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>')
  };

  const LOGO = `<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M4 15 16 5l12 10" fill="none" stroke="#d09500" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 14v12h16V14" fill="none" stroke="#fff" stroke-width="2.6" stroke-linejoin="round"/><path d="M13.5 26v-6.5h5V26" fill="none" stroke="#fff" stroke-width="2.4" stroke-linejoin="round"/></svg>`;

  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const telHref = (p) => "tel:" + String(p || "").replace(/[^\d+]/g, "");
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const NAV = [
    { href: "index.html", label: "Home", key: "home" },
    { href: "about.html", label: "Who We Are", key: "about" },
    { href: "services.html", label: "Services", key: "services", sub: true },
    { href: "work.html", label: "Our Work", key: "work" },
    { href: "contact.html", label: "Contact Us", key: "contact" }
  ];
  // Services sub-menu: one link per SERVICE_TYPES entry → services.html#<key>
  const serviceLinks = () => Object.entries(TYPES).map(([k, v]) => ({ href: `services.html#${k}`, label: v }));

  const page = document.body.dataset.page || "";

  /* ------------------------------------------------------------------------
     Header, footer, mobile bar
     ------------------------------------------------------------------------ */
  function brandHTML() {
    if (SITE.logo) {
      return `<a class="brand" href="index.html"><img class="brand-logo" src="${esc(SITE.logo)}" alt="${esc(SITE.name)} home"></a>`;
    }
    return `<a class="brand" href="index.html" aria-label="${esc(SITE.name)} home">
      <span class="brand-mark">${LOGO}</span>
      <span><span class="brand-name">${esc(SITE.name)}</span><span class="brand-tag">${esc(SITE.tagline)}</span></span>
    </a>`;
  }

  /* Footer is dark: show a transparent logo in white, anything else on a white tile */
  function fitFooterLogo() {
    const img = $(".site-footer .brand-logo");
    if (!img) return;
    img.classList.add("on-tile");
    const check = () => {
      try {
        const c = document.createElement("canvas");
        c.width = c.height = 1;
        const ctx = c.getContext("2d");
        ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, 0, 0, 40, 40);
        if (ctx.getImageData(0, 0, 1, 1).data[3] < 10) img.classList.replace("on-tile", "on-dark");
      } catch (e) { /* keep the tile */ }
    };
    img.complete && img.naturalWidth ? check() : img.addEventListener("load", check, { once: true });
  }

  function setIcon() {
    if (!SITE.icon) return;
    ["icon", "apple-touch-icon"].forEach((rel) => {
      let link = document.querySelector(`link[rel="${rel}"]`);
      if (!link) { link = document.createElement("link"); link.rel = rel; document.head.appendChild(link); }
      link.removeAttribute("type");
      link.href = SITE.icon;
    });
  }

  function renderHeader() {
    const el = $("#site-header");
    if (!el) return;
    const cur = (n) => (n.key === page ? ' aria-current="page"' : "");
    const subList = (cls) => `<ul class="${cls}">${serviceLinks().map((l) => `<li><a href="${l.href}">${esc(l.label)}</a></li>`).join("")}</ul>`;

    const links = NAV.map((n) => n.sub
      ? `<li class="has-sub"><a href="${n.href}"${cur(n)}>${n.label}${ICONS.chevDown}</a>${subList("sub-menu")}</li>`
      : `<li><a href="${n.href}"${cur(n)}>${n.label}</a></li>`).join("");
    el.className = "site-header";
    el.innerHTML = `
      <div class="container header-inner">
        ${brandHTML()}
        <nav class="main-nav" aria-label="Main"><ul>${links}</ul></nav>
        <a class="header-phone" href="${telHref(SITE.phone)}">${ICONS.phone}<span>${esc(SITE.phone)}</span></a>
        <a class="btn btn-gold header-cta" href="estimate.html">Request an Estimate</a>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Open menu">
          ${ICONS.menu}${ICONS.close.replace("<svg", '<svg class="icon-close"')}
        </button>
      </div>`;

    // The mobile menu lives outside the header: the header's backdrop-filter would
    // otherwise trap this position:fixed panel inside the header's own box.
    const chev = ICONS.chevR.replace("<svg", '<svg width="22" height="22"');
    const menu = document.createElement("nav");
    menu.className = "mobile-menu";
    menu.id = "mobile-menu";
    menu.setAttribute("aria-label", "Mobile");
    menu.innerHTML = `
      <ul>${NAV.map((n) => n.sub
        ? `<li class="has-sub">
             <div class="sub-row">
               <a href="${n.href}"${cur(n)}>${n.label}</a>
               <button type="button" class="sub-toggle" aria-expanded="false" aria-controls="mobile-services" aria-label="Show all services">${ICONS.chevDown}</button>
             </div>
             <div class="mobile-sub" id="mobile-services">${subList("")}</div>
           </li>`
        : `<li><a href="${n.href}"${cur(n)}>${n.label}${chev}</a></li>`).join("")}</ul>
      <a class="btn btn-gold btn-lg" href="estimate.html">Request an Estimate</a>
      <a class="btn btn-outline btn-lg" href="${telHref(SITE.phone)}">${ICONS.phone} ${esc(SITE.phone)}</a>
      <a class="btn btn-outline btn-lg" href="mailto:${esc(SITE.email)}">${ICONS.mail} Email us</a>`;
    el.after(menu);

    const toggle = $(".menu-toggle", el);
    const setOpen = (open) => {
      document.body.classList.toggle("menu-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    };
    toggle.addEventListener("click", () => setOpen(!document.body.classList.contains("menu-open")));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && document.body.classList.contains("menu-open")) { setOpen(false); toggle.focus(); }
    });
    // Close after following a link (matters for same-page #anchors on services.html)
    menu.addEventListener("click", (e) => { if (e.target.closest("a")) setOpen(false); });
    // Back to desktop width → make sure the page isn't left scroll-locked
    matchMedia("(min-width: 901px)").addEventListener("change", (e) => { if (e.matches) setOpen(false); });

    const subBtn = $(".sub-toggle", menu);
    subBtn.addEventListener("click", () => {
      const open = subBtn.getAttribute("aria-expanded") !== "true";
      subBtn.setAttribute("aria-expanded", String(open));
      subBtn.closest(".has-sub").classList.toggle("open", open);
    });
  }

  function renderFooter() {
    const el = $("#site-footer");
    if (!el) return;
    const services = Object.entries(TYPES).map(([k, v]) => `<li><a href="services.html#${k}">${esc(v)}</a></li>`).join("");
    el.className = "site-footer";
    el.innerHTML = `
      <div class="container">
        <div class="footer-grid">
          <div>
            ${brandHTML()}
            <p>${esc(SITE.tagline)}. Commercial renovation, concrete, paving, maintenance and site work from one accountable contractor.</p>
            ${SITE.license ? `<p style="margin:0;font-size:14px;color:rgba(255,255,255,.6)">${esc(SITE.license)} · ${esc(SITE.insured)}</p>` : ""}
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              ${NAV.map((n) => `<li><a href="${n.href}">${n.label}</a></li>`).join("")}
              <li><a href="estimate.html">Request an Estimate</a></li>
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul>${services}</ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul class="footer-contact">
              <li>${ICONS.phone}<a href="${telHref(SITE.phone)}">${esc(SITE.phone)}</a></li>
              <li>${ICONS.mail}<a href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a></li>
              <li>${ICONS.pin}<span>${esc(SITE.serviceArea)}</span></li>
              <li>${ICONS.clock}<span>${esc(SITE.hours)}</span></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© ${new Date().getFullYear()} ${esc(SITE.name)}. All rights reserved.</span>
          <span>Licensed &amp; insured</span>
        </div>
      </div>`;
  }

  function renderMobileBar() {
    const bar = document.createElement("div");
    bar.className = "mobile-bar";
    bar.innerHTML = page === "estimate"
      ? `<a class="btn btn-navy" href="${telHref(SITE.phone)}">${ICONS.phone} Call</a>
         <a class="btn btn-outline" href="mailto:${esc(SITE.email)}">${ICONS.mail} Email</a>`
      : `<a class="btn btn-outline" href="${telHref(SITE.phone)}">${ICONS.phone} Call</a>
         <a class="btn btn-gold" href="estimate.html">Free Estimate</a>`;
    document.body.appendChild(bar);
  }

  /* Fill [data-site="phone|email|…"] and [data-icon] placeholders in page HTML */
  function hydrate() {
    $$("[data-site]").forEach((el) => {
      const key = el.dataset.site;
      const val = SITE[key];
      if (val == null) return;
      el.textContent = val;
      if (el.tagName === "A" && key === "phone") el.href = telHref(val);
      if (el.tagName === "A" && key === "email") el.href = "mailto:" + val;
    });
    $$("[data-site-href]").forEach((el) => {
      const key = el.dataset.siteHref;
      if (key === "phone") el.href = telHref(SITE.phone);
      if (key === "email") el.href = "mailto:" + SITE.email;
    });
    $$("[data-icon]").forEach((el) => {
      const icon = ICONS[el.dataset.icon];
      if (icon) el.innerHTML = icon;
    });
    document.title = document.title.replace("Company Name", SITE.name);
  }

  /* ------------------------------------------------------------------------
     Projects
     ------------------------------------------------------------------------ */
  const fmtDate = (ym) => {
    if (!ym) return "";
    const [y, m] = ym.split("-").map(Number);
    return new Date(y, (m || 1) - 1).toLocaleDateString("en-US", { month: "long", year: "numeric" });
  };
  const typeLabels = (p) => (p.types || []).map((t) => TYPES[t] || t);
  const hasVideo = (p) => p.video && (p.video.youtube || p.video.src);

  function projectCard(p) {
    const cover = (p.images && p.images[0]) || {};
    const labels = typeLabels(p);
    return `<a class="project-card reveal" href="project.html?p=${encodeURIComponent(p.slug)}" data-types="${esc((p.types || []).join(" "))}">
      <div class="project-thumb">
        <img src="${esc(cover.src)}" alt="${esc(cover.alt || p.title)}" loading="lazy">
        <div class="project-badges">
          <span class="chip">${esc(labels[0] || "Project")}</span>
          ${hasVideo(p) ? `<span class="chip chip-video">${ICONS.play} Video</span>` : ""}
        </div>
      </div>
      <div class="project-body">
        <div class="project-meta">${esc(labels.join(" · "))}${p.location ? " — " + esc(p.location) : ""}</div>
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.summary)}</p>
        <span class="link-arrow">View project ${ICONS.arrow}</span>
      </div>
    </a>`;
  }

  function renderFeatured() {
    const el = $("#featured-projects");
    if (!el) return;
    let list = PROJECTS.filter((p) => p.featured);
    if (list.length < 3) list = list.concat(PROJECTS.filter((p) => !p.featured)).slice(0, 3);
    el.innerHTML = list.slice(0, 3).map(projectCard).join("");
  }

  function renderWork() {
    const grid = $("#work-grid");
    if (!grid) return;
    const filters = $("#work-filters");
    const used = Object.keys(TYPES).filter((t) => PROJECTS.some((p) => (p.types || []).includes(t)));
    const initial = new URLSearchParams(location.search).get("type");
    let active = used.includes(initial) ? initial : "all";

    filters.innerHTML = [["all", "All projects"], ...used.map((t) => [t, TYPES[t]])]
      .map(([k, v]) => `<button type="button" class="filter-btn" data-filter="${k}" aria-pressed="${k === active}">${esc(v)}</button>`)
      .join("");

    function draw() {
      const list = active === "all" ? PROJECTS : PROJECTS.filter((p) => (p.types || []).includes(active));
      grid.innerHTML = list.length
        ? list.map(projectCard).join("")
        : `<p class="empty-state">No projects in this category yet — check back soon.</p>`;
      observeReveals(grid);
    }

    filters.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      active = btn.dataset.filter;
      $$(".filter-btn", filters).forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
      const url = new URL(location.href);
      active === "all" ? url.searchParams.delete("type") : url.searchParams.set("type", active);
      history.replaceState(null, "", url);
      draw();
    });

    draw();
  }

  function renderProject() {
    const root = $("#project-root");
    if (!root) return;
    const slug = new URLSearchParams(location.search).get("p");
    const idx = PROJECTS.findIndex((p) => p.slug === slug);
    const p = PROJECTS[idx];

    if (!p) {
      $("#project-title").textContent = "Project not found";
      $("#project-lead").textContent = "This project may have moved.";
      root.innerHTML = `<div class="empty-state"><p>We couldn't find that project.</p><a class="btn btn-navy" href="work.html">See all projects</a></div>`;
      return;
    }

    const labels = typeLabels(p);
    const imgs = p.images || [];
    document.title = `${p.title} | Our Work | ${SITE.name}`;
    $("#project-title").textContent = p.title;
    $("#project-lead").textContent = p.summary;
    const crumbTitle = $("#crumb-title");
    if (crumbTitle) crumbTitle.textContent = p.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", p.summary);
    if (imgs[0]) {
      const heroImg = $("#project-hero-img");
      heroImg.src = imgs[0].src;
      heroImg.alt = "";
    }

    let video = "";
    if (p.video && p.video.youtube) {
      video = `<div class="video-wrap"><h2>Project video</h2><div class="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/${esc(p.video.youtube)}" title="${esc(p.title)} video" loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe></div></div>`;
    } else if (p.video && p.video.src) {
      video = `<div class="video-wrap"><h2>Project video</h2><div class="video-frame"><video src="${esc(p.video.src)}" controls playsinline preload="metadata"${p.video.poster ? ` poster="${esc(p.video.poster)}"` : ""}></video></div></div>`;
    }

    const prev = PROJECTS[idx - 1];
    const next = PROJECTS[idx + 1];

    root.innerHTML = `
      <div class="project-layout">
        <div>
          ${imgs.length ? `
          <button class="gallery-main" type="button" aria-label="Open photo full screen">
            <img id="gallery-img" src="${esc(imgs[0].src)}" alt="${esc(imgs[0].alt || p.title)}">
          </button>
          <div class="img-caption" id="gallery-caption">${esc(imgs[0].caption || "")}</div>
          ${imgs.length > 1 ? `<div class="gallery-thumbs" role="list">${imgs.map((im, i) => `
            <button type="button" role="listitem" data-i="${i}" aria-label="Show photo ${i + 1}"${i === 0 ? ' aria-current="true"' : ""}>
              <img src="${esc(im.src.replace(/w=\d+/, "w=300"))}" alt="" loading="lazy">
            </button>`).join("")}</div>` : ""}` : ""}
          ${video}
          <div class="project-content">
            <h2>What we did</h2>
            ${p.body ? `<p>${esc(p.body)}</p>` : ""}
            ${p.scope && p.scope.length ? `<ul>${p.scope.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>` : ""}
          </div>
        </div>
        <aside class="facts" aria-label="Project details">
          <h3>Project details</h3>
          <dl>
            <div><dt>Type of work</dt><dd>${esc(labels.join(", "))}</dd></div>
            ${p.location ? `<div><dt>Location</dt><dd>${esc(p.location)}</dd></div>` : ""}
            ${p.date ? `<div><dt>Completed</dt><dd>${esc(fmtDate(p.date))}</dd></div>` : ""}
          </dl>
          <a class="btn btn-gold" href="estimate.html?type=${encodeURIComponent((p.types || [])[0] || "")}">Start a similar project</a>
          <p class="small">Free estimates · <a href="${telHref(SITE.phone)}">${esc(SITE.phone)}</a></p>
        </aside>
      </div>
      <nav class="project-nav" aria-label="More projects">
        ${prev ? `<a class="prev" href="project.html?p=${encodeURIComponent(prev.slug)}"><small>← Newer project</small><strong>${esc(prev.title)}</strong></a>` : ""}
        ${next ? `<a class="next" href="project.html?p=${encodeURIComponent(next.slug)}"><small>Older project →</small><strong>${esc(next.title)}</strong></a>` : ""}
      </nav>`;

    if (!imgs.length) return;

    let current = 0;
    const mainImg = $("#gallery-img");
    const caption = $("#gallery-caption");
    function show(i) {
      current = (i + imgs.length) % imgs.length;
      mainImg.src = imgs[current].src;
      mainImg.alt = imgs[current].alt || p.title;
      caption.textContent = imgs[current].caption || "";
      $$(".gallery-thumbs button", root).forEach((b) =>
        Number(b.dataset.i) === current ? b.setAttribute("aria-current", "true") : b.removeAttribute("aria-current"));
    }
    root.addEventListener("click", (e) => {
      const t = e.target.closest(".gallery-thumbs button");
      if (t) show(Number(t.dataset.i));
    });
    $(".gallery-main", root).addEventListener("click", () => openLightbox(imgs, current, (i) => show(i)));
  }

  /* ------------------------------------------------------------------------
     Lightbox
     ------------------------------------------------------------------------ */
  function openLightbox(imgs, start, onChange) {
    let i = start;
    let lb = $("#lightbox");
    if (!lb) {
      lb = document.createElement("div");
      lb.id = "lightbox";
      lb.className = "lightbox";
      lb.setAttribute("role", "dialog");
      lb.setAttribute("aria-modal", "true");
      lb.setAttribute("aria-label", "Photo viewer");
      lb.innerHTML = `<img alt="">
        <button class="lb-btn lb-close" type="button" aria-label="Close">${ICONS.close}</button>
        <button class="lb-btn lb-prev" type="button" aria-label="Previous photo">${ICONS.chevL}</button>
        <button class="lb-btn lb-next" type="button" aria-label="Next photo">${ICONS.chevR}</button>
        <div class="lb-count"></div>`;
      document.body.appendChild(lb);
    }
    const img = $("img", lb);
    const count = $(".lb-count", lb);
    const multi = imgs.length > 1;
    $(".lb-prev", lb).hidden = !multi;
    $(".lb-next", lb).hidden = !multi;
    const lastFocus = document.activeElement;

    function draw() {
      img.src = imgs[i].src.replace(/w=\d+/, "w=2400");
      img.alt = imgs[i].alt || "";
      count.textContent = multi ? `${i + 1} / ${imgs.length}${imgs[i].caption ? " — " + imgs[i].caption : ""}` : imgs[i].caption || "";
    }
    const go = (d) => { i = (i + d + imgs.length) % imgs.length; draw(); onChange && onChange(i); };
    function close() {
      lb.classList.remove("open");
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      lb.onclick = null;
      lastFocus && lastFocus.focus();
    }
    function onKey(e) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft" && multi) go(-1);
      if (e.key === "ArrowRight" && multi) go(1);
    }
    lb.onclick = (e) => {
      if (e.target.closest(".lb-close") || e.target === lb) close();
      else if (e.target.closest(".lb-prev")) go(-1);
      else if (e.target.closest(".lb-next")) go(1);
    };

    // Swipe on phones
    let x0 = null;
    lb.ontouchstart = (e) => { x0 = e.touches[0].clientX; };
    lb.ontouchend = (e) => {
      if (x0 == null || !multi) return;
      const dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
      x0 = null;
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    draw();
    lb.classList.add("open");
    $(".lb-close", lb).focus();
  }

  /* ------------------------------------------------------------------------
     Estimate form
     ------------------------------------------------------------------------ */
  /* Shared by the estimate form and the (shorter) contact form.
     The contact form has no type select or photo upload, so those parts are skipped. */
  function initLeadForm() {
    const form = $("#estimate-form") || $("#contact-form");
    if (!form) return;
    const isContact = form.id === "contact-form";

    // Populate type-of-work options & preselect from ?type=
    const select = $("#type", form);
    if (select) {
    select.insertAdjacentHTML("beforeend",
      Object.entries(TYPES).map(([k, v]) => `<option value="${k}">${esc(v)}</option>`).join("") +
      `<option value="multiple">Multiple / not sure</option>`);
    const pre = new URLSearchParams(location.search).get("type");
    if (pre && (TYPES[pre] || pre === "multiple")) select.value = pre;
    }

    // Photo upload with previews
    const MAX_FILES = 8;
    const MAX_MB = 10;
    const input = $("#photos", form);
    if (input) {
    const zone = $(".dropzone", form);
    const previews = $("#previews", form);
    const photoErr = $("#photos-error", form);
    let files = [];

    function syncInput() {
      const dt = new DataTransfer();
      files.forEach((f) => dt.items.add(f));
      input.files = dt.files;
    }
    function drawPreviews() {
      previews.innerHTML = "";
      files.forEach((f, i) => {
        const d = document.createElement("div");
        d.className = "preview";
        const url = URL.createObjectURL(f);
        d.innerHTML = `<img src="${url}" alt="${esc(f.name)}"><button type="button" aria-label="Remove ${esc(f.name)}" data-i="${i}">${ICONS.close}</button>`;
        $("img", d).onload = () => URL.revokeObjectURL(url);
        previews.appendChild(d);
      });
    }
    function addFiles(list) {
      const msgs = [];
      Array.from(list).forEach((f) => {
        if (!f.type.startsWith("image/")) return msgs.push(`${f.name} isn't an image.`);
        if (f.size > MAX_MB * 1024 * 1024) return msgs.push(`${f.name} is over ${MAX_MB} MB.`);
        if (files.length >= MAX_FILES) return msgs.push(`Up to ${MAX_FILES} photos.`);
        if (!files.some((x) => x.name === f.name && x.size === f.size)) files.push(f);
      });
      photoErr.textContent = [...new Set(msgs)].join(" ");
      zone.parentElement.classList.toggle("invalid", msgs.length > 0);
      syncInput();
      drawPreviews();
    }
    input.addEventListener("change", () => { const l = Array.from(input.files); addFiles(l); });
    ["dragenter", "dragover"].forEach((ev) => zone.addEventListener(ev, (e) => { e.preventDefault(); zone.classList.add("drag"); }));
    ["dragleave", "drop"].forEach((ev) => zone.addEventListener(ev, () => zone.classList.remove("drag")));
    zone.addEventListener("drop", (e) => { e.preventDefault(); addFiles(e.dataTransfer.files); });
    previews.addEventListener("click", (e) => {
      const b = e.target.closest("button[data-i]");
      if (!b) return;
      files.splice(Number(b.dataset.i), 1);
      syncInput();
      drawPreviews();
    });
    }

    // Validation
    const rules = {
      name: (v) => v.trim().length > 1 || "Please enter your name.",
      phone: (v) => v.replace(/\D/g, "").length >= 10 || "Please enter a valid phone number.",
      email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) || "Please enter a valid email.",
      address: (v) => v.trim().length > 4 || "Please enter the project address.",
      type: (v) => !!v || "Please choose a type of work.",
      description: (v) => v.trim().length > 9 || (isContact ? "Please add a short message." : "A few words about the project helps us prepare.")
    };
    function validateField(name) {
      const el = form.elements[name];
      const res = rules[name](el.value);
      const field = el.closest(".field");
      field.classList.toggle("invalid", res !== true);
      $(".field-error", field).textContent = res === true ? "" : res;
      el.setAttribute("aria-invalid", String(res !== true));
      return res === true;
    }
    Object.keys(rules).forEach((n) => { if (!form.elements[n]) delete rules[n]; });
    Object.keys(rules).forEach((n) => {
      form.elements[n].addEventListener("blur", () => { if (form.elements[n].value) validateField(n); });
      form.elements[n].addEventListener("input", () => { if (form.elements[n].closest(".invalid")) validateField(n); });
    });

    const status = $("#form-status");
    const submitBtn = $("button[type=submit]", form);

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      status.className = "form-status";
      const bad = Object.keys(rules).filter((n) => !validateField(n));
      if (bad.length) { form.elements[bad[0]].focus(); return; }
      if (form.elements.website.value) return; // honeypot

      if (!SITE.formEndpoint) {
        status.className = "form-status error";
        status.innerHTML = `The online form isn't connected yet. Please call <a href="${telHref(SITE.phone)}">${esc(SITE.phone)}</a> or email <a href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a>.`;
        console.warn("SITE.formEndpoint is empty — set it in assets/js/site-config.js");
        return;
      }

      const data = new FormData(form);
      data.delete("website");
      data.set("formType", isContact ? "contact" : "estimate");
      if (data.has("type")) data.set("typeLabel", TYPES[data.get("type")] || data.get("type"));
      data.set("submittedAt", new Date().toISOString());
      data.set("page", location.href);

      submitBtn.disabled = true;
      const label = submitBtn.innerHTML;
      submitBtn.textContent = "Sending…";
      try {
        const res = await fetch(SITE.formEndpoint, { method: "POST", body: data, headers: { Accept: "application/json" } });
        if (!res.ok) throw new Error("HTTP " + res.status);
        const first = esc(String(data.get("name")).trim().split(" ")[0]);
        $("#form-card").innerHTML = `
          <div class="form-success" role="status">
            <div class="big-tick">${ICONS.check}</div>
            <h2>Thanks, ${first}!</h2>
            <p class="lead">${isContact
              ? "We've received your message and will get back to you within one business day."
              : "We've received your request and will be in touch within one business day to set up a time to look at the project."}</p>
            <p>Need us sooner? Call <a href="${telHref(SITE.phone)}"><strong>${esc(SITE.phone)}</strong></a>.</p>
            <a class="btn btn-navy" href="work.html">Browse our work</a>
          </div>`;
        window.scrollTo({ top: $("#form-card").getBoundingClientRect().top + scrollY - 100, behavior: "smooth" });
      } catch (err) {
        status.className = "form-status error";
        status.innerHTML = `Sorry — something went wrong sending your request. Please try again, or call <a href="${telHref(SITE.phone)}">${esc(SITE.phone)}</a>.`;
        submitBtn.disabled = false;
        submitBtn.innerHTML = label;
      }
    });
  }

  /* ------------------------------------------------------------------------
     Reveal on scroll
     ------------------------------------------------------------------------ */
  let io;
  function observeReveals(root = document) {
    const els = $$(".reveal:not(.in)", root);
    if (!("IntersectionObserver" in window)) { els.forEach((el) => el.classList.add("in")); return; }
    io = io || new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    els.forEach((el) => io.observe(el));
  }

  /* ------------------------------------------------------------------------ */
  renderHeader();
  renderFooter();
  fitFooterLogo();
  setIcon();
  renderMobileBar();
  hydrate();
  renderFeatured();
  renderWork();
  renderProject();
  initLeadForm();
  observeReveals();
})();

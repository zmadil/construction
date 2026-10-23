/* ==========================================================================
   SITE SETTINGS — edit these and every page updates.
   ========================================================================== */
window.SITE = {
  name: "Ramzey",
  tagline: "Your Property, Our Priority",

  /* LOGO: to change it, replace the image files in images/logo/ (keep the
     same names), or point these at new files. Nothing else needs editing.
       logo  the main logo, shown in the header and footer. Best as a PNG with a
             transparent background, cropped tight (no empty border).
             The footer turns a transparent logo white automatically. A logo
             with a solid background is shown on a white tile instead.
       icon  square version for the browser tab and phone home screen. */
  logo: "images/logo/logo.png",
  icon: "images/logo/icon.png",
  phone: "(555) 123-4567",                    // TODO
  email: "info@ramzeycommercial.com",
  serviceArea: "Serving [City] and surrounding areas",   // TODO
  hours: "Mon–Fri 7am–6pm · Sat by appointment",         // TODO
  license: "License #000000",                 // TODO — or "" to hide
  insured: "Fully insured · General liability & workers' comp", // TODO — confirm

  /* Where the estimate form is sent (multipart/form-data, incl. photos).
     Options:
       • n8n:       "https://n8nbronco.com/webhook/estimate-request"
       • Formspree: "https://formspree.io/f/xxxxxxx" (photo uploads need a paid plan)
     Leave "" while testing — the form will show a message instead of sending. */
  formEndpoint: ""
};

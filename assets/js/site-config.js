/* ==========================================================================
   SITE SETTINGS — edit these and every page updates.
   ========================================================================== */
window.SITE = {
  name: "Company Name",                       // TODO: real company name
  tagline: "Construction & Property Services",
  phone: "(555) 123-4567",                    // TODO
  email: "info@example.com",                  // TODO
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

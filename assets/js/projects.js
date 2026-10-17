/* ==========================================================================
   OUR WORK — project list
   --------------------------------------------------------------------------
   To add a project, copy one block below, paste it at the TOP of the list,
   and fill it in. Newest first. See README.md for the full guide.

   slug        unique, lowercase-with-dashes. Becomes the page URL:
               project.html?p=<slug>
   title       project name
   types       one or more of the keys in SERVICE_TYPES below
   location    city / neighbourhood (no street address)
   date        "YYYY-MM" completion month
   featured    true = show on the home page (keep it to 3)
   summary     one or two sentences for the card
   scope       bullet list of what we did
   body        optional extra paragraph(s)
   images      first image is the cover. { src, alt, caption? }
               Put real photos in images/projects/<slug>/ and use
               "images/projects/<slug>/01.jpg" as the src.
   video       optional. { youtube: "VIDEO_ID" } or { src: "videos/file.mp4" }
   ========================================================================== */

window.SERVICE_TYPES = {
  renovation:            "Renovation & Build-Outs",
  interior:              "Interior Work",
  demolition:            "Demolition",
  concrete:              "Concrete",
  asphalt:               "Asphalt & Paving",
  painting:              "Painting & Striping",
  maintenance:           "Maintenance & Repairs",
  "pressure-washing":    "Pressure Washing",
  landscaping:           "Landscaping & Site Work",
  "general-contracting": "General Contracting"
};

// Placeholder photos until real project photos are supplied.
const ph = (id, w = 1600) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=75`;

// PLACEHOLDER PROJECTS: filler content until the client picks real jobs.
window.PROJECTS = [
  {
    slug: "office-suite-build-out",
    title: "Office Suite Build-Out",
    types: ["renovation", "interior", "painting"],
    location: "Office park",
    date: "2026-08",
    featured: true,
    summary: "Turned an empty shell space into a finished office suite with glass-front meeting rooms, open workspace and a break area.",
    scope: [
      "Metal stud framing and drywall for offices and meeting rooms",
      "Glass storefront partitions and new doors",
      "Ceiling grid, lighting and finish carpentry",
      "Prime and paint throughout, LVT flooring"
    ],
    body: "The tenant needed to move in on a fixed date. We ran the whole build-out as general contractor, coordinating every trade on one schedule so the space was ready on time.",
    images: [
      { src: ph("photo-1497366811353-6870744d04b2"), alt: "Finished office with glass walls and meeting table", caption: "Meeting room" },
      { src: ph("photo-1497366216548-37526070297c"), alt: "Finished office corridor with kitchenette", caption: "Corridor and break area" },
      { src: ph("photo-1600508774634-4e11d34730e2"), alt: "Open-plan office workspace", caption: "Open workspace" }
    ]
  },
  {
    slug: "retail-parking-lot-repave",
    title: "Retail Parking Lot Repave & Restripe",
    types: ["asphalt", "painting"],
    location: "Shopping center",
    date: "2026-07",
    featured: true,
    summary: "Milled and repaved a worn retail parking lot, then restriped stalls, ADA spaces and fire lanes.",
    scope: [
      "Milling and base repair in failed areas",
      "New asphalt surface course",
      "Full layout and line striping, including ADA stalls",
      "Phased work to keep the stores open"
    ],
    images: [
      { src: ph("photo-1506521781263-d8422e82f27a"), alt: "Aerial view of a freshly striped parking lot", caption: "Finished striping" },
      { src: ph("photo-1503708928676-1cb796a0891e"), alt: "Excavator beside newly paved asphalt", caption: "Paving in progress" }
    ]
  },
  {
    slug: "tenant-improvement-medical-office",
    title: "Medical Office Tenant Improvement",
    types: ["general-contracting", "interior", "renovation"],
    location: "Medical plaza",
    date: "2026-06",
    featured: true,
    summary: "Managed a full tenant improvement for a medical office, from framing and finishes to final inspection.",
    scope: [
      "Project management, scheduling and permitting",
      "Framing, drywall and finish carpentry",
      "Coordination of electrical and plumbing subcontractors",
      "Final punch list and inspection walkthrough"
    ],
    images: [
      { src: ph("photo-1587582423116-ec07293f0395"), alt: "Carpenter framing walls on a job site", caption: "Framing" },
      { src: ph("photo-1508450859948-4e04fabaa4ea"), alt: "Building under construction", caption: "Structure" },
      { src: ph("photo-1572025442646-866d16c84a54"), alt: "Finished interior with pendant lights", caption: "Finished space" }
    ]
  },
  {
    slug: "sidewalk-curb-replacement",
    title: "Sidewalk & Curb Replacement",
    types: ["concrete", "demolition"],
    location: "Commercial plaza",
    date: "2026-05",
    featured: false,
    summary: "Removed cracked, uneven sidewalks and curbs around a commercial plaza and poured new reinforced concrete.",
    scope: [
      "Saw-cutting and removal of damaged concrete",
      "Compacted base and new forms",
      "Reinforced sidewalk and curb pours",
      "ADA-compliant ramps at crossings"
    ],
    images: [
      { src: ph("photo-1504307651254-35680f356dfd"), alt: "Rebar set before a concrete pour", caption: "Reinforcement before the pour" },
      { src: ph("photo-1628744448840-55bdb2497bd4"), alt: "New concrete flatwork in front of a building", caption: "Finished flatwork" },
      { src: ph("photo-1531834685032-c34bf0d84c77"), alt: "Crew tying rebar on a commercial job", caption: "Crew at work" }
    ]
  },
  {
    slug: "parking-garage-cleaning-restripe",
    title: "Parking Garage Cleaning & Restripe",
    types: ["pressure-washing", "painting", "maintenance"],
    location: "Downtown",
    date: "2026-04",
    featured: false,
    summary: "Pressure washed a multi-level parking garage, repainted columns and restriped every level overnight.",
    scope: [
      "Hot-water pressure washing of all decks",
      "Column and curb painting",
      "Stall, arrow and wayfinding striping",
      "Night shifts to avoid closing the garage"
    ],
    images: [
      { src: ph("photo-1590674899484-d5640e854abe"), alt: "Parking garage with freshly painted columns and lines", caption: "Finished level" },
      { src: ph("photo-1635424710928-0544e8512eae"), alt: "Worker using a pressure hose", caption: "Pressure washing" }
    ]
  },
  {
    slug: "site-clearing-and-grading",
    title: "Demolition, Site Clearing & Grading",
    types: ["demolition", "landscaping"],
    location: "Industrial park",
    date: "2026-03",
    featured: false,
    summary: "Demolished an old structure, cleared the lot and graded it ready for new construction.",
    scope: [
      "Structure demolition and debris haul-off",
      "Clearing and grubbing",
      "Rough and finish grading",
      "Erosion control and final seeding"
    ],
    images: [
      { src: ph("photo-1580901368919-7738efb0f87e"), alt: "Excavator on a demolition site", caption: "Demolition" },
      { src: ph("photo-1517089596392-fb9a9033e05b"), alt: "Aerial view of earthwork and grading", caption: "Grading" },
      { src: ph("photo-1574958269340-fa927503f3dd"), alt: "Modern commercial building with landscaped plaza", caption: "Finished site (example)" }
    ]
  }
];

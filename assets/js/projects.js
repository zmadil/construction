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
  renovation:  "Renovation",
  interior:    "Interior",
  concrete:    "Concrete",
  asphalt:     "Asphalt",
  painting:    "Painting",
  landscaping: "Landscaping",
  property:    "Property Work"
};

// Placeholder photos until real project photos are supplied.
const ph = (id, w = 1600) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=75`;

window.PROJECTS = [
  {
    slug: "kitchen-remodel-oak-street",
    title: "Full Kitchen Remodel",
    types: ["renovation", "interior"],
    location: "Oak Street",
    date: "2026-08",
    featured: true,
    summary: "Gutted a dated kitchen and rebuilt it with new cabinets, quartz counters, tile backsplash and lighting.",
    scope: [
      "Demolition and disposal of old cabinets and flooring",
      "Electrical updates and new recessed lighting",
      "Custom cabinet install with quartz countertops",
      "Subway tile backsplash and new plumbing fixtures",
      "Drywall repair, prime and paint"
    ],
    body: "The homeowners wanted a brighter, more open kitchen without moving walls. We handled every trade in-house, from demo to the final coat of paint, so the project stayed on one schedule with one point of contact.",
    images: [
      { src: ph("photo-1556912172-45b7abe8b7e1"), alt: "Finished white kitchen with island and pendant lighting", caption: "Finished kitchen" },
      { src: ph("photo-1484154218962-a197022b5858"), alt: "Kitchen with dark backsplash and stainless appliances", caption: "Appliance wall" },
      { src: ph("photo-1600489000022-c2086d79f9d4"), alt: "Kitchen sink under window with open shelving", caption: "Sink and open shelving" }
    ]
  },
  {
    slug: "exterior-repaint-maple-ave",
    title: "Exterior Repaint",
    types: ["painting", "property"],
    location: "Maple Avenue",
    date: "2026-07",
    featured: true,
    summary: "Scraped, repaired and repainted a two-storey home, including trim, shutters and window frames.",
    scope: [
      "Pressure wash and surface prep",
      "Wood rot repair on trim and sills",
      "Prime and two coats on siding",
      "Trim, shutters and doors in contrast colour"
    ],
    images: [
      { src: ph("photo-1574359411659-15573a27fd0c"), alt: "Painters on ladders repainting a two-storey home", caption: "Work in progress" },
      { src: ph("photo-1572120360610-d971b9d7767c"), alt: "Freshly painted home with front porch", caption: "Finished front elevation" }
    ]
  },
  {
    slug: "bathroom-renovation-cedar-lane",
    title: "Primary Bathroom Renovation",
    types: ["renovation", "interior"],
    location: "Cedar Lane",
    date: "2026-06",
    featured: true,
    summary: "Turned a cramped bathroom into a walk-in shower suite with new vanity, tile and fixtures.",
    scope: [
      "Removed tub and built a curbless walk-in shower",
      "Waterproofing and full floor-to-ceiling tile",
      "New double vanity, mirror and lighting",
      "Exhaust fan upgrade"
    ],
    images: [
      { src: ph("photo-1584622650111-993a426fbf0a"), alt: "Bright bathroom with glass shower and grey vanity", caption: "Finished bathroom" },
      { src: ph("photo-1600566752355-35792bedcfea"), alt: "Modern bathroom with freestanding tub", caption: "Tub and window" },
      { src: ph("photo-1595514535415-dae8580c416c"), alt: "Wood vanity with twin vessel sinks", caption: "Vanity detail" }
    ]
  },
  {
    slug: "commercial-lot-concrete",
    title: "Commercial Site Concrete",
    types: ["concrete", "asphalt", "property"],
    location: "Industrial Park",
    date: "2026-05",
    featured: false,
    summary: "Formed and poured a reinforced slab and repaved the surrounding lot for a commercial client.",
    scope: [
      "Excavation and compacted base",
      "Rebar layout and reinforced slab pour",
      "Asphalt repaving and line striping",
      "Site clean-up"
    ],
    images: [
      { src: ph("photo-1504307651254-35680f356dfd"), alt: "Crew placing rebar before a concrete pour", caption: "Rebar before the pour" },
      { src: ph("photo-1541888946425-d81bb19240f5"), alt: "Crew reviewing a finished concrete slab", caption: "Finished slab walkthrough" }
    ]
  },
  {
    slug: "backyard-landscaping-elm-court",
    title: "Backyard Landscaping",
    types: ["landscaping"],
    location: "Elm Court",
    date: "2026-04",
    featured: false,
    summary: "Regraded a patchy yard and laid new sod, planting beds and edging.",
    scope: [
      "Grading and drainage correction",
      "Fresh topsoil and sod",
      "New planting beds with mulch",
      "Steel edging along paths"
    ],
    images: [
      { src: ph("photo-1558904541-efa843a96f01"), alt: "Freshly laid green lawn", caption: "New sod" },
      { src: ph("photo-1416879595882-3373a0480b5b"), alt: "Garden soil and trowel for planting beds", caption: "Planting bed prep" }
    ]
  },
  {
    slug: "whole-home-interior-refresh",
    title: "Whole-Home Interior Refresh",
    types: ["renovation", "interior", "painting"],
    location: "Birch Road",
    date: "2026-03",
    featured: false,
    summary: "Opened up a tired interior with new flooring, drywall repairs and a full repaint before the owners moved in.",
    scope: [
      "Selective demolition and framing repairs",
      "New engineered hardwood throughout",
      "Drywall patching and skim coat",
      "Full interior paint, doors and trim"
    ],
    images: [
      { src: ph("photo-1600210492486-724fe5c67fb0"), alt: "Bright finished living room with large windows", caption: "After" },
      { src: ph("photo-1517581177682-a085bb7ffb15"), alt: "Interior mid-renovation with exposed brick and scaffolding", caption: "Before / during" },
      { src: ph("photo-1615971677499-5467cbab01c0"), alt: "Living room painted deep navy", caption: "Feature wall colour" }
    ]
  }
];

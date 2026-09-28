const I18N = {
en: {
  "nav.services": "Services", "nav.why": "Why us", "nav.gallery": "Gallery",
  "nav.visit": "Visit us", "nav.faq": "FAQ", "nav.contact": "Contact",
  "nav.call": "(602) 880-7520",
  "hero.kicker": "Phoenix, Arizona · Collision repair &amp; auto body",
  "hero.title": "Back on the road,<br>looking like new.",
  "hero.sub": "Collision repair, paint and frame work in South Phoenix — a clear estimate before every job, and repairs you can trust.",
  "hero.cta1": "Get a free estimate", "hero.cta2": "See services",
  "promo.kicker": "In the shop", "promo.title": "Free repair estimates",
  "promo.text": "Bring your vehicle in during business hours and get a clear, no-pressure estimate — for collision damage, dents, paint and more.",
  "promo.cta": "Call for an estimate",
  "stats.hoursNum": "Mon – Fri", "stats.hours": "9:00 AM – 5:00 PM",
  "stats.makesNum": "All", "stats.makes": "makes &amp; models serviced",
  "stats.quoteNum": "Free", "stats.quote": "estimates, no pressure",
  "stats.insNum": "Insurance", "stats.ins": "claim help included",
  "services.kicker": "What we do", "services.title": "Collision and body work under one roof",
  "services.s1t": "Collision repair", "services.s1d": "From fender benders to major impacts — panels, bumpers and trim restored to pre-accident condition.",
  "services.s2t": "Dent &amp; scratch repair", "services.s2d": "Door dings, parking-lot dents and scratches smoothed out and refinished.",
  "services.s3t": "Paint &amp; refinishing", "services.s3d": "Professional booth painting with careful color matching, panels to full resprays.",
  "services.s4t": "Frame &amp; unibody work", "services.s4d": "Frame straightening and structural repair for safety after serious collisions.",
  "services.s5t": "Bumper repair &amp; replacement", "services.s5d": "Cracked, scuffed or bent bumpers repaired or replaced with quality parts.",
  "services.s6t": "Insurance claim help", "services.s6d": "We walk you through the claim and work with your insurance to get the repair approved.",
  "walkin.w1t": "Free estimates", "walkin.w1d": "Walk in during business hours",
  "walkin.w2t": "Insurance claims", "walkin.w2d": "Handled with your insurer",
  "walkin.w3t": "All makes", "walkin.w3d": "Cars, SUVs, light trucks",
  "makes.kicker": "All makes and models", "makes.title": "Your car is welcome here",
  "makes.sub": "Cars, SUVs and light trucks — we take care of everything, whatever the brand.",
  "why.kicker": "Why choose us", "why.title": "Repairs done right, explained clearly",
  "why.intro": "We believe in simple things: an honest estimate, careful work, and a vehicle that comes back looking the way it should. You leave knowing exactly what was done — and why.",
  "why.l1t": "Clear estimates", "why.l1d": "The price is explained and confirmed before any work begins.",
  "why.l2t": "Careful paint match", "why.l2d": "Booth-painted panels matched to your car's original finish.",
  "why.l3t": "Straightforward process", "why.l3d": "Estimate, repair, quality check — kept simple and transparent.",
  "why.l4t": "Easy to reach", "why.l4d": "Right off the Maricopa Freeway in South Phoenix, easy to get to.",
  "gallery.kicker": "The shop in action", "gallery.title": "A clean shop, careful work",
  "gallery.c1": "Booth-painted panels, matched to your color",
  "gallery.c2": "Frame and structural repair done properly",
  "gallery.c3": "Finished with a careful polish and detail",
  "visit.kicker": "Find us", "visit.title": "Stop by the shop",
  "visit.more": "SC Collision — 111 E Maricopa Fwy, Phoenix, AZ. Open Mon–Fri 9:00 AM – 5:00 PM. Get directions and stop in for a free estimate.",
  "faq.kicker": "Good to know", "faq.title": "Frequently asked questions",
  "faq.q1": "Do I need an appointment for an estimate?",
  "faq.a1": "No — just stop by during our business hours, Monday to Friday 9:00 AM to 5:00 PM, and we'll give you a free, no-pressure estimate.",
  "faq.q2": "Do you work with insurance companies?",
  "faq.a2": "Yes. We can help you through the claim process and work with your insurance company to get the repair approved.",
  "faq.q3": "How long does a typical repair take?",
  "faq.a3": "It depends on the damage — minor dents and paint can be quick, while major collision work takes longer. We'll give you a realistic timeline with your estimate.",
  "faq.q4": "What are your hours?",
  "faq.a4": "Monday to Friday, 9:00 AM to 5:00 PM. Closed Saturday and Sunday.",
  "contact.kicker": "Get in touch", "contact.title": "Reach out or stop by",
  "contact.addr": "Address", "contact.phone": "Phone", "contact.hours": "Hours",
  "contact.hoursVal": "Mon – Fri: 9:00 AM – 5:00 PM<br>Sat – Sun: closed",
  "contact.cta": "Call now", "contact.cta2": "Get directions",
  "footer.tag": "Collision repair &amp; auto body · Phoenix, Arizona"
}};

const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");
if (menuBtn && mainNav) {
  menuBtn.addEventListener("click", () => mainNav.classList.toggle("open"));
  mainNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mainNav.classList.remove("open")));
}

function applyLang() {
  const l = "en";
  document.documentElement.lang = l;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = I18N.en[key];
    if (val !== undefined) el.innerHTML = val;
  });
  document.title = "SC Collision — Collision Repair & Auto Body in Phoenix, AZ";
}

applyLang();

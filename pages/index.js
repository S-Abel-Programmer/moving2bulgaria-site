
import React from "react";
import { motion } from "framer-motion";

const BRAND = {
  name: "Moving2Bulgaria",
  tagline: "Clear, practical guides to make your Bulgaria move simple.",
  cta: "Start your move",
};

const DOMAIN = {
  url: "moving2bulgaria.com",
};

const CONTACT = {
  email: "hello@moving2bulgaria.com",
  phone: "+44 7394 048818",
  location: "UK • Bulgaria",
};

const YOUTUBE = {
  channelUrl: "https://youtube.com/@moving2bulgaria?si=AvR_Mvm3JnQlr-Ka",
  featuredVideoId: "oEtK0SRyock",
  embed: false, // set to true after deploy if you want inline playback
  latest: ["oEtK0SRyock", "M1IcDqGE7E8", "BaQTGaDlq24"],
};

const products = [
  {
    id: "visa-irish",
    title: "Visa & Residency (Irish/UK citizens)",
    blurb:
      "Step‑by‑step process, timelines, documents, and costs. Includes office locations and sample forms.",
    price: "£19",
    buyUrl: "#visa-checkout",
    highlights: ["Residency card steps", "Translations & apostilles", "Pitfalls to avoid"],
  },
  {
    id: "property",
    title: "House‑Hunting & Buying Guide",
    blurb:
      "Where to search, agent scripts, legal checks, and a full purchase checklist (BG & EN).",
    price: "£24",
    buyUrl: "#property-checkout",
    highlights: ["Region cheat‑sheet", "Lawyer brief", "Offer template"],
  },
  {
    id: "car-import",
    title: "UK→BG Car Import & Registration",
    blurb:
      "Transport options, customs, insurance, taxes, and re‑registration (with example costs).",
    price: "£14",
    buyUrl: "#car-checkout",
    highlights: ["Doc list", "Plates & fees", "Timeline"],
  },
  {
    id: "setup-pack",
    title: "New‑Life Setup Pack (Bundle)",
    blurb:
      "Banking, SIM, utilities, healthcare, driving licences, and local translations in one pack.",
    price: "£39",
    buyUrl: "#bundle-checkout",
    highlights: ["All starter docs", "Contact directory", "Budget templates"],
    badge: "Best value",
  },
];

const faqs = [
  { q: "How do I get the PDFs?", a: "After purchase you'll receive a secure download link by email. You can re‑download any time." },
  { q: "Can I get updates?", a: "Yes. Minor updates are free. Major editions may be offered at a discount to existing buyers." },
  { q: "What payment methods do you take?", a: "Card and Apple/Google Pay via Stripe (or your storefront provider)." },
  { q: "Do you offer refunds?", a: "If a guide is not what you expected, reply to your receipt email within 14 days and we’ll help." },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* NAV */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/75 bg-white/90 border-b">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-[#00966E]/10 grid place-items-center text-[#006B4F] font-bold">M2B</div>
            <div>
              <p className="font-semibold leading-tight">{BRAND.name}</p>
              <p className="text-xs text-gray-500">{DOMAIN.url}</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#products" className="hover:text-[#006B4F]">Guides</a>
            <a href="#youtube" className="hover:text-[#006B4F]">YouTube</a>
            <a href="#about" className="hover:text-[#006B4F]">About</a>
            <a href="#faq" className="hover:text-[#006B4F]">FAQ</a>
            <a href="#contact" className="hover:text-[#006B4F]">Contact</a>
          </nav>
          <a href="#products" className="rounded-2xl px-4 py-2 text-sm font-medium bg-[#00966E] text-white hover:bg-[#007857] shadow">
            {BRAND.cta}
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Make your move to Bulgaria <span className="text-[#006B4F]">simple</span>
            </h1>
            <p className="text-lg text-gray-600">
              Real‑world, no‑nonsense guides based on lived experience. Avoid costly mistakes, save time, and land on your feet.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#products"
                className="rounded-xl px-5 py-3 bg-[#00966E] text-white font-medium hover:bg-[#007857] shadow"
              >
                Browse Guides
              </a>
              <a
                href="#youtube"
                className="rounded-xl px-5 py-3 bg-gray-100 hover:bg-gray-200 font-medium"
              >
                Watch on YouTube
              </a>
            </div>
            <ul className="mt-4 grid grid-cols-2 gap-3 text-sm text-gray-600">
              <li className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-[#00966E] inline-block"/>Up‑to‑date checklists</li>
              <li className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-[#00966E] inline-block"/>Budget templates</li>
              <li className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-[#00966E] inline-block"/>Printable forms</li>
              <li className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-[#00966E] inline-block"/>Local office directory</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            <div className="aspect-[4/3] w-full rounded-3xl border bg-gradient-to-br from-[#EAF6F1] to-white p-6 shadow-sm">
              <div className="h-full w-full rounded-2xl border bg-white p-6 flex flex-col justify-between">
                <div>
                  <p className="text-sm uppercase tracking-wide text-[#006B4F] font-semibold">Featured Guide</p>
                  <h3 className="text-2xl font-bold mt-2">Visa & Residency — step by step</h3>
                  <p className="text-sm text-gray-600 mt-2">Everything you need to apply for and receive your Bulgarian residency card.</p>
                </div>
                <div className="flex items-center justify-between mt-6">
                  <span className="text-3xl font-extrabold">£19</span>
                  <a href="#products" className="rounded-xl px-4 py-2 bg-[#00966E] text-white font-medium hover:bg-[#007857]">See details</a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold">Guides & Downloads</h2>
            <p className="text-sm text-gray-600">Instant PDF downloads after purchase</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <div key={p.id} className="group rounded-3xl bg-white border shadow-sm hover:shadow-md transition overflow-hidden">
                {p.badge && (
                  <div className="absolute">
                    <span className="ml-4 mt-4 inline-block rounded-full bg-[#00966E] text-white text-xs px-3 py-1">{p.badge}</span>
                  </div>
                )}
                <div className="p-6">
                  <h3 className="font-bold text-lg leading-tight">{p.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{p.blurb}</p>
                  <ul className="mt-4 space-y-1 text-sm text-gray-700">
                    {p.highlights?.map((h, i) => (
                      <li key={i} className="flex gap-2 items-start"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#00966E]"/>{h}</li>
                    ))}
                  </ul>
                </div>
                <div className="px-6 pb-6 flex items-center justify-between">
                  <span className="text-xl font-extrabold">{p.price}</span>
                  <a href={p.buyUrl} className="rounded-xl px-4 py-2 bg-[#00966E] text-white text-sm font-medium hover:bg-[#007857]">Buy now</a>
                </div>
              </div>
            ))}
          </div>

          {/* Payment provider badges (optional) */}
          <div className="mt-8 text-center text-xs text-gray-500">Secure checkout via Stripe / Payhip / Gumroad</div>
        </div>
      </section>

      {/* LATEST UPLOADS */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Latest uploads</h2>
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2">
            {YOUTUBE.latest.map((vid, i) => (
              <a
                key={i}
                href={vid ? ('https://www.youtube.com/watch?v=' + vid) : YOUTUBE.channelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[280px] max-w-[320px] snap-start group rounded-2xl border overflow-hidden bg-white hover:shadow-md transition"
              >
                <div className="aspect-video w-full bg-gray-100">
                  {vid ? (
                    <img
                      src={'https://i.ytimg.com/vi/' + vid + '/hqdefault.jpg'}
                      alt="YouTube thumbnail"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="h-full w-full grid place-items-center text-gray-400">Add video ID</div>
                  )}
                </div>
                <div className="p-3 text-sm font-medium flex items-center justify-between">
                  <span className="truncate">{vid ? 'Watch video' : 'Add a video'}</span>
                  <span className="opacity-60 group-hover:opacity-100">↗</span>
                </div>
              </a>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-2">Drag sideways to browse. Edit <code>YOUTUBE.latest</code> to control which videos appear.</p>
        </div>
      </section>

      {/* YOUTUBE */}
      <section id="youtube" className="py-16">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold">Follow the journey on YouTube</h2>
            <p className="mt-3 text-gray-600">Real moves, real paperwork, real wins (and a few oops moments). Tutorials, vlogs and Q&A livestreams.</p>
            <div className="mt-6 flex gap-3">
              <a
                href={YOUTUBE.channelUrl}
                target="_blank"
                className="rounded-xl px-5 py-3 bg-gray-900 text-white font-medium hover:opacity-90"
              >
                Visit Channel
              </a>
              <a
                href={YOUTUBE.channelUrl + (YOUTUBE.channelUrl.includes('?') ? '&' : '?') + 'sub_confirmation=1'}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl px-5 py-3 bg-[#00966E] text-white font-medium hover:bg-[#007857] shadow"
              >
                Subscribe
              </a>
              <a
                href="#faq"
                className="rounded-xl px-5 py-3 bg-gray-100 hover:bg-gray-200 font-medium"
              >
                Read FAQ
              </a>
            </div>
          </div>
          <div>
            {YOUTUBE.embed && YOUTUBE.featuredVideoId ? (
              <div className="aspect-video w-full rounded-3xl overflow-hidden border shadow-sm">
                <iframe
                  className="h-full w-full"
                  src={"https://www.youtube-nocookie.com/embed/" + YOUTUBE.featuredVideoId + "?rel=0&modestbranding=1&playsinline=1&enablejsapi=0&autoplay=1&mute=1"}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <div className="w-full rounded-3xl border bg-gray-50 p-6 shadow-sm">
                <h3 className="text-lg font-bold">Watch on YouTube</h3>
                <p className="text-sm text-gray-600 mt-2">To avoid permission pop-ups in preview, we disabled the embed here. Click below to open your channel.</p>
                <a
                  href={YOUTUBE.channelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block rounded-xl px-5 py-3 bg-gray-900 text-white font-medium hover:opacity-90"
                >
                  Open channel
                </a>
              </div>
            )}
            <p className="text-xs text-gray-500 mt-2">Set <code>YOUTUBE.embed</code> to <code>true</code> and provide a <code>featuredVideoId</code> before deploying live.</p>
          </div>
        </div>
      </section>

      {/* ABOUT / TRUST */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-3xl md:text-4xl font-extrabold">Built by people actually doing it</h2>
            <p className="mt-3 text-gray-600">We’ve moved cars, pets, and full households across borders, registered vehicles, opened bank accounts, and queued at more offices than we can count. These guides codify what works — with templates, checklists, and real contact details.</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <Stat label="Downloads" value="1,200+" />
              <Stat label="YouTube subs" value="5,000+" />
              <Stat label="Avg. rating" value="4.9/5" />
              <Stat label="Years in BG" value="3+" />
            </div>
          </div>
          <div className="rounded-3xl border bg-white p-6 shadow-sm">
            <h3 className="font-bold text-lg">What buyers say</h3>
            <ul className="mt-4 space-y-4 text-sm text-gray-700">
              <li>“The residency checklist saved us weeks. Worth every penny.”</li>
              <li>“Your car import guide was spot‑on — no surprises at the desk.”</li>
              <li>“Loved the printable forms and Bulgarian translations.”</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold">Frequently asked questions</h2>
          <div className="mt-8 divide-y">
            {faqs.map((f, i) => (
              <details key={i} className="group py-4">
                <summary className="cursor-pointer list-none font-semibold flex items-center justify-between">
                  <span>{f.q}</span>
                  <span className="transition group-open:rotate-180">▾</span>
                </summary>
                <p className="mt-2 text-gray-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / FOOTER */}
      <footer id="contact" className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-bold">{BRAND.name}</h3>
            <p className="text-gray-600 mt-2">{BRAND.tagline}</p>
            <div className="mt-4 text-sm text-gray-600">
              <p><strong>Email:</strong> {CONTACT.email}</p>
              <p><strong>Phone:</strong> {CONTACT.phone}</p>
              <p><strong>Base:</strong> {CONTACT.location}</p>
            </div>
          </div>
          <div className="text-sm text-gray-600">
            <p><strong>Legal:</strong> Digital guides for general information — not legal or immigration advice. Always confirm requirements with official sources.</p>
            <div className="mt-3 flex flex-wrap gap-4">
              <a href="/terms" className="underline">Terms</a>
              <a href="/privacy" className="underline">Privacy</a>
              <a href="/refunds" className="underline">Refunds</a>
            </div>
            <p className="mt-6 text-xs">© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-2xl border bg-white p-4 shadow-sm">
      <p className="text-2xl font-extrabold">{value}</p>
      <p className="text-xs text-gray-500">{label}</p>
    </div>
  );
}

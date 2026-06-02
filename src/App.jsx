import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Car, CheckCircle2, ChevronRight, Clock3, Crown, Droplets, Gem, MapPin, Phone, ShieldCheck, Sparkles, Star } from "lucide-react";

const services = [
  {
    title: "Exterior Package",
    price: "Starts at $50",
    description: "Quick exterior refresh with size-based pricing for sedans, SUVs, and trucks.",
    bullets: ["Sedans & Coupes: $50", "Mid-size SUV: $60", "Full-size SUV & Trucks: $70", "Mobile service available"],
  },
  {
    title: "Essential Package",
    price: "Starts at $80",
    description: "Interior and exterior detail package for a solid full reset at an affordable price.",
    bullets: ["Sedans & Coupes: $80", "Mid-size SUV: $120", "Full-size SUV & Trucks: $150", "Interior + exterior"],
  },
  {
    title: "Premium Package",
    price: "Starts at $120",
    description: "Upgraded interior and exterior detail for customers who want a deeper clean and better finish.",
    bullets: ["Sedans & Coupes: $120", "Mid-size SUV: $160", "Full-size SUV & Trucks: $210", "Premium finish"],
  },
  {
    title: "Dripped Out Package",
    price: "Starts at $160",
    description: "Best value package with your top-tier detail experience for customers who want the full transformation.",
    bullets: ["Sedans & Coupes: $160", "Mid-size SUV: $210", "Full-size SUV & Trucks: $250", "Best Value"],
  },
];

const addOns = [
  {
    title: "Wax & Sealants",
    text: "2–3 months of paint protection recommended for Vegas heat. Add for $30. Options: Cherry Wax, Carnauba Wax, or SiO2 Ceramic Sealant.",
  },
  {
    title: "Interior Sanitizing",
    text: "Mat shampooing and sanitizing for $30 (4–6 mats) plus a full interior fogger and sanitizing add-on for $20.",
  },
  {
    title: "Ceramic Coating",
    text: "3–5 years of paint protection. $850 for sedans, coupes, and mid-size SUVs. $1250 for full-size SUVs and trucks. Includes Exterior Package plus one-step paint correction and polish. Add $150 for excessive water spotting and paint damage.",
  },
];

const testimonials = [
  {
    name: "Anthony R.",
    text: "Professional from start to finish. The whole experience felt premium and my car looked insane when it was done.",
  },
  {
    name: "Mia S.",
    text: "Super clean work, respectful service, and attention to detail you can actually see. Definitely a luxury experience.",
  },
  {
    name: "Jordan T.",
    text: "Fast communication, on-time arrival, and a finish that looked show-ready. Dripped really treats customers right.",
  },
];

const faqs = [
  {
    q: "Do you come to me?",
    a: "Yes. Dripped Auto Detailing is set up as a mobile detailing service for customers in Centennial Hills, Summerlin, Aliante, North Las Vegas, and Southern Hills.",
  },
  {
    q: "Do you offer quotes and booking?",
    a: "Yes. This layout supports both quote requests and direct booking so customers can choose what works best for them.",
  },
  {
    q: "Why offer wax and sealants in Las Vegas?",
    a: "Because Vegas heat is rough on paint. Your add-on section recommends 2–3 months of protection to help preserve gloss and reduce wear.",
  },
  {
    q: "Can I change prices later?",
    a: "Yes. The pricing and packages can be edited so you can update rates, add-ons, or service areas anytime.",
  },
];

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="max-w-2xl">
      <div className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-500">{eyebrow}</div>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-slate-300">{subtitle}</p>
    </div>
  );
}

function GlassCard({ children, className = "" }) {
  return <div className={`rounded-[1.5rem] border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(2,6,23,0.45)] backdrop-blur-sm ${className}`}>{children}</div>;
}

function BeforeAfterShowcase() {
  const [position, setPosition] = useState(52);

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-blue-400/20 bg-slate-950 shadow-[0_0_80px_rgba(59,130,246,0.15)]">
      <div className="grid min-h-[380px] md:grid-cols-2">
        <div className="relative flex items-end bg-[linear-gradient(135deg,#111827_0%,#1f2937_100%)] p-8">
          <div>
            <div className="mb-3 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-300">Before</div>
            <h3 className="text-2xl font-bold text-white">Dull finish, dusty trim, flat presentation</h3>
            <p className="mt-3 max-w-md text-sm leading-7 text-slate-300">Use this section later with your real before-and-after photos. For now, it gives your website the premium visual structure high-end detailing brands use.</p>
          </div>
        </div>
        <div className="relative flex items-end bg-[linear-gradient(135deg,#0f172a_0%,#2563eb_100%)] p-8">
          <div>
            <div className="mb-3 inline-flex rounded-full border border-blue-300/30 bg-blue-500/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-blue-200">After</div>
            <h3 className="text-2xl font-bold text-white">Glossy finish, premium protection, luxury presentation</h3>
            <p className="mt-3 max-w-md text-sm leading-7 text-blue-100/90">Swap in your own client photos here and this instantly becomes one of the strongest conversion sections on the page.</p>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 bg-black/55" style={{ width: `${position}%` }} />
      <div className="pointer-events-none absolute inset-y-0" style={{ left: `calc(${position}% - 1px)` }}>
        <div className="h-full w-[2px] bg-white/80 shadow-[0_0_20px_rgba(255,255,255,0.45)]" />
      </div>
      <div className="absolute bottom-6 left-1/2 w-[min(420px,80%)] -translate-x-1/2 rounded-full border border-white/10 bg-black/60 px-4 py-3 backdrop-blur">
        <input
          type="range"
          min="15"
          max="85"
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          className="w-full accent-blue-500"
          aria-label="Before and after comparison slider"
        />
      </div>
    </div>
  );
}

export default function App() {
  const [selectedService, setSelectedService] = useState(services[3].title);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    year: "",
    make: "",
    model: "",
    address: "",
    notes: "",
  });

  const smsPreview = useMemo(() => {
    if (!form.name) return "Booking confirmation text preview will appear here.";
    return `Hey ${form.name}, you're booked with Dripped Auto Detailing for ${selectedService}. We’ll text your appointment details shortly.`;
  }, [form.name, selectedService]);

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const inquiryMessage = encodeURIComponent(
    `Hi, I want a quote for ${selectedService}. Vehicle: ${form.year || "Year"} ${form.make || "Make"} ${form.model || "Model"}. Area: ${form.address || "Service area"}.`
  );

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Dripped Auto Detailing Logo" className="h-10 w-auto drop-shadow-[0_0_18px_rgba(59,130,246,0.45)]" />
            <div>
              <div className="text-xl font-black tracking-[0.18em] text-white">DRIPPED AUTO DETAILING</div>
              <div className="text-xs uppercase tracking-[0.25em] text-slate-400">Luxury Mobile Detailing • Las Vegas</div>
            </div>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            <a href="#services" className="text-sm text-slate-300 transition hover:text-blue-400">Services</a>
            <a href="#showcase" className="text-sm text-slate-300 transition hover:text-blue-400">Showcase</a>
            <a href="#reviews" className="text-sm text-slate-300 transition hover:text-blue-400">Reviews</a>
            <a href="#booking" className="text-sm text-slate-300 transition hover:text-blue-400">Book</a>
          </nav>
          <a href="#booking" className="inline-flex items-center rounded-2xl bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-500">Book Now</a>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.28),transparent_26%),linear-gradient(135deg,#000000_0%,#020617_45%,#0f172a_72%,#ffffff_160%)]" />
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 md:grid-cols-2 md:px-6 md:py-28">
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55 }}
              className="relative mb-8 w-fit"
            >
              <div className="absolute inset-0 rounded-full bg-blue-500/30 blur-2xl" />
              <img src="/logo.png" alt="Dripped Auto Detailing Logo" className="relative h-28 w-auto drop-shadow-[0_0_32px_rgba(59,130,246,0.55)] md:h-32" />
              <motion.div
                initial={{ x: -160, opacity: 0 }}
                animate={{ x: 240, opacity: [0, 0.85, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 1.5 }}
                className="pointer-events-none absolute inset-y-0 top-0 w-14 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/70 to-transparent blur-md"
              />
            </motion.div>

            <div className="w-fit rounded-full border border-blue-400/30 bg-white/10 px-4 py-1 text-xs text-blue-100 backdrop-blur">Luxury Mobile Detailing That Comes To You</div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-6 max-w-xl text-5xl font-black tracking-tight text-white md:text-6xl"
            >
              Premium detailing with a blue-chip luxury feel.
            </motion.h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Dripped Auto Detailing delivers high-end mobile detailing for clients who expect royalty-level treatment, premium presentation, and results that turn heads in Las Vegas.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#booking" className="inline-flex items-center rounded-2xl bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-500">Get A Quote</a>
              <a href="#showcase" className="inline-flex items-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-white transition hover:bg-white/10">See Results</a>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                ["White-Glove Service", Crown],
                ["Fast Booking", Calendar],
                ["Paint-Safe Products", ShieldCheck],
                ["Luxury Finish", Gem],
              ].map(([label, Icon]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[0_12px_50px_rgba(2,6,23,0.45)] backdrop-blur-sm">
                  <Icon className="h-5 w-5 text-blue-400" />
                  <div className="mt-3 text-sm font-medium text-white">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-[2rem] border border-blue-400/20 bg-white/95 p-6 text-slate-900 shadow-[0_0_80px_rgba(59,130,246,0.18)] ring-1 ring-blue-200/40"
          >
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <div className="text-sm uppercase tracking-[0.2em] text-slate-500">Signature Package</div>
                <div className="text-2xl font-bold">Dripped Out Package</div>
              </div>
              <div className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/30">Starts at $160</div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Sedans & Coupes: $160",
                "Mid-size SUV: $210",
                "Full-size SUV & Trucks: $250",
                "Interior + exterior detail",
                "Best value package",
                "Mobile service in Las Vegas",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4 text-sm text-slate-800">
                  <CheckCircle2 className="h-4 w-4 text-blue-600" />
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-slate-950 p-5 text-white">
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <Clock3 className="h-4 w-4 text-blue-400" /> Typical appointment time: 2–4 hours
              </div>
              <div className="mt-3 flex items-center gap-3 text-sm text-slate-300">
                <MapPin className="h-4 w-4 text-blue-400" /> Centennial Hills, Summerlin, Aliante, North Las Vegas, Southern Hills
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <SectionTitle
          eyebrow="Services"
          title="Built around your real packages and pricing"
          subtitle="This section reflects your real package lineup so customers can quickly compare pricing by vehicle size and choose the right service."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <GlassCard key={service.title}>
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{service.description}</p>
                  </div>
                  <Sparkles className="h-5 w-5 shrink-0 text-blue-400" />
                </div>
                <div className="mt-5 text-lg font-semibold text-blue-400">{service.price}</div>
                <div className="mt-5 space-y-3">
                  {service.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-center gap-3 text-sm text-slate-200">
                      <CheckCircle2 className="h-4 w-4 text-blue-500" />
                      {bullet}
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedService(service.title)}
                  className={`mt-6 w-full rounded-2xl px-4 py-3 text-sm font-medium transition ${selectedService === service.title ? "bg-blue-600 text-white hover:bg-blue-500" : "border border-white/15 bg-white/5 text-white hover:bg-white/10"}`}
                >
                  Select Package
                </button>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      <section id="showcase" className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <SectionTitle
          eyebrow="Showcase"
          title="Before-and-after visuals built to sell premium work"
          subtitle="This slider is already in the code so you can later swap in real vehicle photos and instantly make the site feel even more high-end."
        />
        <div className="mt-10">
          <BeforeAfterShowcase />
        </div>
      </section>

      <section id="why-us" className="bg-slate-950/80 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle
            eyebrow="Why clients book"
            title="A luxury-first brand experience from the first click"
            subtitle="This version is built to feel premium, trustworthy, and polished while still letting you update pricing, photos, services, and lead flow without touching code."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Car,
                title: "Luxury positioning",
                text: "Premium copy, elevated visuals, and a polished layout built to attract clients who value quality and service.",
              },
              {
                icon: Phone,
                title: "Concierge-style booking",
                text: "Ready for direct calls, quote requests, and a real booking integration like Calendly, Square Appointments, or GlossGenius.",
              },
              {
                icon: Droplets,
                title: "Owner-friendly control",
                text: "Structured so your site can later run on a simple editing dashboard instead of forcing you into code every time you want to update something.",
              },
            ].map((item) => (
              <GlassCard key={item.title}>
                <div className="p-6">
                  <item.icon className="h-6 w-6 text-blue-400" />
                  <h3 className="mt-4 text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <SectionTitle
          eyebrow="Add-Ons"
          title="Luxury upgrades and paint protection"
          subtitle="High-value upgrades designed to protect the finish, improve presentation, and give clients premium options that make sense in Las Vegas heat."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {addOns.map((addon) => (
            <GlassCard key={addon.title}>
              <div className="p-6">
                <div className="flex gap-1 text-blue-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300">{addon.text}</p>
                <div className="mt-6 font-semibold text-white">{addon.title}</div>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      <section id="reviews" className="bg-slate-950/80 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle
            eyebrow="Client Reviews"
            title="Detailing service that feels first class"
            subtitle="This section is ready for your real Google reviews later, but the structure already fits the luxury experience you want clients to feel."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((review) => (
              <GlassCard key={review.name}>
                <div className="p-6">
                  <div className="flex gap-1 text-blue-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-300">“{review.text}”</p>
                  <div className="mt-6 font-semibold text-white">{review.name}</div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-[1.1fr_0.9fr] md:px-6">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">Booking + Quotes</div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">Book a premium detail or request a luxury quote</h2>
            <p className="mt-4 max-w-xl text-slate-300">
              This form is structured for both direct booking and quote requests. It is ready for a real booking integration, and the current buttons already support phone and prefilled text inquiry flows.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <input placeholder="Full name" value={form.name} onChange={(e) => handleChange("name", e.target.value)} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500" />
              <input placeholder="Phone number" value={form.phone} onChange={(e) => handleChange("phone", e.target.value)} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500" />
              <input placeholder="Vehicle year" value={form.year} onChange={(e) => handleChange("year", e.target.value)} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500" />
              <input placeholder="Vehicle make" value={form.make} onChange={(e) => handleChange("make", e.target.value)} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500" />
              <input placeholder="Vehicle model" value={form.model} onChange={(e) => handleChange("model", e.target.value)} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500 sm:col-span-2" />
              <input placeholder="Service address or area" value={form.address} onChange={(e) => handleChange("address", e.target.value)} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500 sm:col-span-2" />
              <textarea placeholder="Extra notes: stains, pet hair, heavy brake dust, etc." value={form.notes} onChange={(e) => handleChange("notes", e.target.value)} className="min-h-32 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500 sm:col-span-2" />
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <a href="tel:7253067008" className="inline-flex items-center rounded-2xl bg-blue-600 px-6 py-3 text-base text-white transition hover:bg-blue-500">Book Now</a>
              <a href={`sms:7253067008?body=${inquiryMessage}`} className="inline-flex items-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-base text-white transition hover:bg-white/10">Request Quote</a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-blue-400/20 bg-slate-950 p-6 shadow-[0_0_80px_rgba(59,130,246,0.14)]">
            <div className="text-sm text-slate-400">Selected package</div>
            <div className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-500">Call or text: 725-306-7008</div>
            <div className="mt-2 text-2xl font-bold text-white">{selectedService}</div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black p-5">
              <div className="text-sm text-slate-400">Text confirmation preview</div>
              <p className="mt-3 text-sm leading-7 text-slate-200">{smsPreview}</p>
            </div>

            <div className="mt-6 space-y-4 text-sm text-slate-300">
              <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-blue-400" /> Booking and quote request options</div>
              <div className="flex items-center gap-3"><Calendar className="h-4 w-4 text-blue-400" /> Separate year, make, and model fields</div>
              <div className="flex items-center gap-3"><MapPin className="h-4 w-4 text-blue-400" /> Centennial Hills, Summerlin, Aliante, North Las Vegas, Southern Hills</div>
            </div>

            <div className="mt-8 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-5">
              <div className="text-sm uppercase tracking-[0.2em] text-blue-300">Booking integration ready</div>
              <p className="mt-3 text-sm leading-7 text-blue-100/90">
                This layout is ready to connect to a live booking service like Calendly, Square Appointments, or GlossGenius once you choose which platform you want to use.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <SectionTitle
          eyebrow="FAQ"
          title="Good for customers and good for Google"
          subtitle="FAQ sections help answer common objections and can support local SEO when they match what people actually search."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <GlassCard key={faq.q} className="shadow-[0_20px_60px_rgba(2,6,23,0.35)]">
              <div className="p-6">
                <h3 className="text-lg font-bold text-white">{faq.q}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{faq.a}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between md:px-6">
          <div>
            <div className="font-bold text-white">Dripped Auto Detailing</div>
            <div>725-306-7008 • Mobile detailing in Las Vegas</div>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="#services" className="transition hover:text-blue-400">Services</a>
            <a href="#showcase" className="transition hover:text-blue-400">Showcase</a>
            <a href="#booking" className="transition hover:text-blue-400">Book</a>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
        <a href="#booking" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-white shadow-[0_0_28px_rgba(59,130,246,0.45)] transition hover:bg-blue-500">
          Book Now
          <ChevronRight className="h-4 w-4" />
        </a>
        <a href="tel:7253067008" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/80 px-5 py-3 text-white backdrop-blur transition hover:bg-white/10">
          <Phone className="h-4 w-4" />
          Call Now
        </a>
      </div>
    </div>
  );
}

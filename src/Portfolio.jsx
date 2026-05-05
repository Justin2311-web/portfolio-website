import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  Mail,
  MousePointerClick,
  Phone,
  ShoppingBag,
  ShoppingCart,
  TrendingUp
} from "lucide-react";
import portraitImage from "./assets/jee-yao-wei.png";
import funnelCaseImage from "./assets/ecommerce-funnel-case.svg";
import metaCaseImage from "./assets/meta-roas-case.svg";
import shopeeCaseImage from "./assets/shopee-marketplace-case.svg";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
];

const platformBadges = [
  { label: "Google Ads", type: "googleAds" },
  { label: "Meta Ads", type: "meta" },
  { label: "GA4", type: "ga4" },
  { label: "Google Tag Manager", type: "gtm" },
  { label: "Shopee", type: "shopee" },
  { label: "Airtable", type: "airtable" },
  { label: "Excel", type: "excel" },
  { label: "Google Sheets", type: "sheets" }
];

const skills = ["CRM", "E-commerce", "Content Strategy", "Growth Marketing"];

const proofPoints = [
  {
    value: (
      <span className="flex items-center gap-2">
        <PlatformIcon type="ga4" />
        <PlatformIcon type="gtm" />
      </span>
    ),
    label: "analytics stack"
  },
  { value: "HK / TW / SG / MY", label: "market support" },
  { value: "CTR, CPC, CPM", label: "performance metrics" }
];

const projects = [
  {
    title: "E-commerce Platform Operations Optimization (Listing, SKU, Inventory & Order Flow Management)",
    description:
      "Supported cross-market e-commerce operations across HK, TW, SG, and MY by managing listings, SKU visibility, stock monitoring, delivery settings, order processing, and campaign execution.",
    icon: ShoppingBag,
    image: shopeeCaseImage,
    platform: "shopee",
    role: "E-commerce Support Intern, Zenyum Sdn Bhd",
    detail: "Handled marketplace updates, Airtable and Anchanto WMS coordination, invoicing support, RTV documentation, ASN workflows, and operational issue resolution."
  },
  {
    title: "Meta Ads ROAS Growth Campaign",
    description:
      "Managed and optimized paid campaigns by reviewing CTR, CPC, CPM, conversion-rate patterns, audience response, and creative performance across paid advertising channels.",
    icon: MousePointerClick,
    image: metaCaseImage,
    platform: "meta",
    role: "Marketing Executive cum Business Analyst, Distinct Media Sdn Bhd",
    detail: "Prepared performance reports, delivered actionable recommendations, aligned campaign expectations with clients, and supported continuous ROI improvement."
  },
  {
    title: "E-commerce Funnel Conversion Optimization",
    description:
      "Translated analytics and commerce data into funnel insights, campaign recommendations, and stakeholder-ready reporting for growth and revenue conversations.",
    icon: TrendingUp,
    image: funnelCaseImage,
    platform: "ga4",
    role: "Marketing Executive cum Business Analyst, Distinct Media Sdn Bhd",
    detail: "Used GA4, Google Tag Manager, and campaign KPIs to evaluate user journeys, monitor performance stability, and identify opportunities for campaign and revenue growth."
  }
];

const capabilities = [
  {
    icon: ShoppingCart,
    title: "E-commerce growth",
    text: "Marketplace operations, inventory visibility, pricing updates, campaign timing, and commerce reporting."
  },
  {
    icon: BarChart3,
    title: "Performance analytics",
    text: "GA4, Google Tag Manager, KPI analysis, and decision-ready reporting across campaign and commerce metrics."
  },
  {
    icon: BriefcaseBusiness,
    title: "Commercial operations",
    text: "Campaign coordination, order workflows, fulfillment support, and stakeholder alignment across markets."
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 }
};

function PlatformIcon({ type, className = "" }) {
  const shared = `h-8 w-8 shrink-0 ${className}`;

  if (type === "googleAds") {
    return (
      <svg className={shared} viewBox="0 0 40 40" aria-hidden="true">
        <rect width="40" height="40" rx="12" fill="#111827" />
        <path d="M12 28 22 10" stroke="#34A853" strokeWidth="7" strokeLinecap="round" />
        <path d="M22 10 32 28" stroke="#4285F4" strokeWidth="7" strokeLinecap="round" />
        <circle cx="12" cy="28" r="5" fill="#FBBC05" />
      </svg>
    );
  }

  if (type === "meta") {
    return (
      <svg className={shared} viewBox="0 0 40 40" aria-hidden="true">
        <rect width="40" height="40" rx="12" fill="#0B1020" />
        <path
          d="M10 24c3.8-7.5 7-11.2 10.2-11.2 4.2 0 5.9 11.2 10 11.2 2.8 0 4.6-3 5.8-5.6"
          stroke="#60A5FA"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M10 24c3.8 7.5 7 11.2 10.2 11.2 4.2 0 5.9-11.2 10-11.2 2.8 0 4.6 3 5.8 5.6"
          stroke="#22D3EE"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "ga4") {
    return (
      <svg className={shared} viewBox="0 0 40 40" aria-hidden="true">
        <rect width="40" height="40" rx="12" fill="#1F1300" />
        <rect x="9" y="22" width="6" height="10" rx="3" fill="#F9AB00" />
        <rect x="17" y="15" width="6" height="17" rx="3" fill="#E37400" />
        <rect x="25" y="8" width="6" height="24" rx="3" fill="#F9AB00" />
      </svg>
    );
  }

  if (type === "gtm") {
    return (
      <svg className={shared} viewBox="0 0 40 40" aria-hidden="true">
        <rect width="40" height="40" rx="12" fill="#071A33" />
        <path d="M20 7 33 20 20 33 7 20 20 7Z" fill="#246FDB" />
        <path d="M20 13 27 20 20 27 13 20 20 13Z" fill="#8AB4F8" />
      </svg>
    );
  }

  if (type === "shopee") {
    return (
      <svg className={shared} viewBox="0 0 40 40" aria-hidden="true">
        <rect width="40" height="40" rx="12" fill="#FF6B2C" />
        <path d="M13 17v-2a7 7 0 0 1 14 0v2" stroke="white" strokeWidth="3" strokeLinecap="round" />
        <rect x="10" y="16" width="20" height="17" rx="4" fill="white" />
        <path d="M17 25h6" stroke="#FF6B2C" strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "airtable") {
    return (
      <svg className={shared} viewBox="0 0 40 40" aria-hidden="true">
        <rect width="40" height="40" rx="12" fill="#101827" />
        <path d="M10 14 20 10l10 4-10 4-10-4Z" fill="#FACC15" />
        <path d="M10 17v10l9 4V21l-9-4Z" fill="#38BDF8" />
        <path d="M30 17v10l-9 4V21l9-4Z" fill="#F43F5E" />
      </svg>
    );
  }

  if (type === "excel") {
    return (
      <svg className={shared} viewBox="0 0 40 40" aria-hidden="true">
        <rect width="40" height="40" rx="12" fill="#0F5132" />
        <path d="M12 12h16v16H12V12Z" fill="#21A366" />
        <path d="m15 16 10 12M25 16 15 28" stroke="white" strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg className={shared} viewBox="0 0 40 40" aria-hidden="true">
      <rect width="40" height="40" rx="12" fill="#0F172A" />
      <path d="M12 10h16v20H12V10Z" fill="#34A853" />
      <path d="M20 10h8v8h-8V10Z" fill="#0F9D58" />
      <path d="M15 17h10M15 22h10M15 27h10" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function WhatsAppIcon({ className = "h-5 w-5" }) {
  return (
    <svg className={className} viewBox="0 0 40 40" aria-hidden="true">
      <circle cx="20" cy="20" r="18" fill="#25D366" />
      <path
        d="M12.5 29 14 24.4a10 10 0 1 1 3.9 3.5L12.5 29Z"
        fill="white"
        fillOpacity=".95"
      />
      <path
        d="M17.3 15.2c.3-.6.6-.6 1-.6h.8c.3 0 .6.1.8.7.3.7.9 2.1 1 2.3.1.2.1.5 0 .7-.2.3-.3.4-.5.7-.2.2-.4.5-.2.8.2.3.9 1.4 1.9 2.3 1.3 1.2 2.4 1.6 2.8 1.8.3.1.6.1.8-.1.2-.3.9-1.1 1.1-1.5.2-.3.5-.3.8-.2.3.1 2 .9 2.4 1.1.3.2.6.3.7.5.1.2.1 1.4-.4 2.1-.5.8-1.7 1.5-2.8 1.5-1.9 0-4.3-1-6.4-2.8-2.4-2.1-4.1-4.8-4.4-6.8-.1-.8.1-1.7.6-2.5Z"
        fill="#25D366"
      />
    </svg>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <nav className="section-shell flex h-16 items-center justify-between">
        <a href="#top" className="text-sm font-semibold tracking-[0.08em] text-white">
          JEE YAO WEI
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-white/[0.62] transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="mailto:jeeyaowei0987@gmail.com"
          className="inline-flex h-10 items-center gap-2 rounded-xl bg-white px-4 text-sm font-semibold text-slate-950 transition hover:bg-blue-100"
        >
          Contact
          <ArrowRight size={16} />
        </a>
      </nav>
    </header>
  );
}

function HeroMetric({ value, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <div className="min-h-8 text-lg font-semibold text-white">{value}</div>
      <p className="mt-1 text-sm text-white/[0.52]">{label}</p>
    </div>
  );
}

function HeroVisual() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="show"
      transition={{ duration: 0.7, delay: 0.18, ease: "easeOut" }}
      className="glass-panel relative overflow-hidden rounded-2xl p-5"
    >
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(59,130,246,0.18),transparent_38%,rgba(16,185,129,0.14))]" />
      <div className="relative rounded-2xl border border-white/10 bg-slate-950/70 p-5">
        <div className="mb-5 flex items-center justify-end">
          <span className="rounded-full bg-emerald-400/12 px-3 py-1 text-xs font-semibold text-emerald-300">
            Growth View
          </span>
        </div>
        <div className="space-y-3">
          {[
            ["Marketplace CVR", "Tracked", "w-[70%]", "bg-emerald-400"],
            ["Paid Media Efficiency", "Optimized", "w-[82%]", "bg-blue-400"],
            ["Campaign Reporting", "Delivered", "w-[62%]", "bg-cyan-300"]
          ].map(([label, value, width, color]) => (
            <div key={label} className="rounded-xl border border-white/[0.08] bg-white/[0.035] p-4">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm text-white/[0.64]">{label}</span>
                <span className="text-sm font-semibold text-white">{value}</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/[0.08]">
                <div className={`${width} h-full rounded-full ${color}`} />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 grid grid-cols-3 gap-3">
          {["CTR", "CPC", "CPM"].map((metric) => (
            <div key={metric} className="rounded-xl border border-white/[0.08] bg-white/[0.035] p-3 text-center">
              <p className="text-xs text-white/[0.42]">{metric}</p>
              <p className="mt-1 text-sm font-semibold text-white">Tracked</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">{title}</h2>
      {text ? <p className="mt-4 text-base leading-8 text-white/[0.62]">{text}</p> : null}
    </div>
  );
}

function PlatformBadge({ badge }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group flex min-h-28 flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.045] p-4 text-center transition hover:border-blue-300/40 hover:bg-blue-400/10"
      aria-label={badge.label}
      title={badge.label}
    >
      <PlatformIcon type={badge.type} className="h-11 w-11 transition group-hover:scale-110" />
      <span className="text-xs font-semibold leading-4 text-white/[0.68]">{badge.label}</span>
    </motion.div>
  );
}

function ProjectCard({ project }) {
  const Icon = project.icon;

  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="glass-panel group overflow-hidden rounded-2xl"
    >
      <div className="relative h-44 overflow-hidden">
        <img
          src={project.image}
          alt=""
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute left-5 top-5 rounded-2xl bg-slate-950/34 p-3 text-white shadow-card backdrop-blur-md">
          <Icon size={28} />
        </div>
        <div className="absolute right-5 top-5 rounded-2xl bg-slate-950/42 p-2 backdrop-blur-md">
          <PlatformIcon type={project.platform} className="h-7 w-7" />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold leading-tight text-white">{project.title}</h3>
        <p className="mt-3 text-sm font-semibold text-blue-200">{project.role}</p>
        <p className="mt-3 text-sm leading-7 text-white/60">{project.description}</p>
        <div className="mt-6 rounded-xl border border-white/[0.08] bg-white/[0.035] px-4 py-3 text-sm font-medium text-white/[0.58]">
          {project.detail}
        </div>
      </div>
    </motion.article>
  );
}

export default function Portfolio() {
  return (
    <div id="top" className="min-h-screen overflow-hidden">
      <Header />

      <main>
        <section className="section-shell grid min-h-screen items-center gap-12 pb-20 pt-28 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-base font-medium text-blue-300">E-commerce + Digital Marketing Executive</p>
            <div className="mt-5 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-7">
              <h1 className="whitespace-nowrap text-[clamp(2.4rem,8.2vw,4.5rem)] font-bold leading-[1.02] text-white">
                JEE YAO WEI
              </h1>
              <div className="relative h-36 w-36 shrink-0 overflow-hidden rounded-3xl border border-white/[0.14] bg-white/[0.04] shadow-glow sm:h-40 sm:w-40 lg:h-44 lg:w-44">
                <img
                  src={portraitImage}
                  alt="JEE YAO WEI portrait"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
            <p className="mt-6 max-w-2xl text-2xl font-semibold leading-tight text-white/[0.86] sm:text-3xl">
              Performance-driven marketing, e-commerce growth, and data analytics
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/[0.62] sm:text-lg">
              I turn campaign data, marketplace signals, and customer behavior into clear growth decisions for paid media,
              e-commerce operations, and conversion-focused teams.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-white/[0.14] bg-white/[0.04] px-6 text-sm font-semibold text-white transition hover:border-white/[0.26] hover:bg-white/[0.08]"
              >
                Contact Me
                <Mail size={18} />
              </a>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {proofPoints.map((item) => (
                <HeroMetric key={item.label} {...item} />
              ))}
            </div>
          </motion.div>

          <HeroVisual />
        </section>

        <section id="about" className="section-shell py-24">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">About</p>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
                Marketing analyst mindset with hands-on e-commerce execution.
              </h2>
            </div>
            <div className="glass-panel rounded-2xl p-7 sm:p-8">
              <p className="text-base leading-8 text-white/[0.68]">
                Detail-oriented E-commerce + Digital Marketing Executive and business analyst experienced in campaign
                performance analysis, marketplace support, and cross-market operations. My work centers on paid ads,
                e-commerce optimization, CRM workflows, and analytics, using tools like GA4 and Google Tag Manager to
                turn campaign activity into practical recommendations.
              </p>
              <div className="mt-7 grid gap-4 md:grid-cols-3">
                {capabilities.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                      <Icon className="text-blue-300" size={22} />
                      <h3 className="mt-4 text-sm font-semibold text-white">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-white/[0.52]">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section-shell py-24">
          <SectionHeading
            eyebrow="Skills"
            title="A growth stack built for measurable commerce decisions."
            text="Balanced across paid acquisition, analytics, commerce operations, CRM, content strategy, and stakeholder-ready reporting."
          />
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
            {platformBadges.map((badge) => (
              <PlatformBadge key={badge.label} badge={badge} />
            ))}
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {skills.map((skill) => (
              <motion.div
                key={skill}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-white/10 bg-white/[0.045] px-5 py-4 text-center text-sm font-semibold text-white/[0.82] transition hover:border-emerald-300/40 hover:bg-emerald-400/10"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </section>

        <section id="experience" className="section-shell py-24">
          <SectionHeading
            eyebrow="Working Experience"
            title="Hands-on roles across e-commerce operations, paid media, and analytics."
            text="A practical view of the job responsibilities I have handled: marketplace execution, campaign reporting, KPI monitoring, platform coordination, and stakeholder communication."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section id="contact" className="section-shell py-24">
          <div className="glass-panel mx-auto max-w-3xl rounded-3xl p-8 text-center sm:p-10">
            <CheckCircle2 className="mx-auto text-emerald-300" size={34} />
            <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">Let&apos;s talk growth.</h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-white/[0.62]">
              Open to e-commerce, digital marketing, performance marketing, and marketing analyst opportunities.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="mailto:jeeyaowei0987@gmail.com"
                className="inline-flex h-12 items-center gap-2 rounded-2xl bg-white px-5 text-sm font-semibold text-slate-950 transition hover:bg-blue-100"
              >
                <Mail size={18} />
                Email
              </a>
              <a
                href="tel:+60107685108"
                className="inline-flex h-12 items-center gap-2 rounded-2xl border border-white/[0.12] bg-white/[0.04] px-5 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
              >
                <Phone size={18} />
                Phone
              </a>
              <a
                href="https://wa.me/60107685108"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-2xl border border-white/[0.12] bg-white/[0.04] px-5 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
              >
                <WhatsAppIcon />
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8">
        <p className="section-shell text-center text-sm text-white/[0.42]">
          Copyright 2026 JEE YAO WEI. Built for e-commerce and digital marketing opportunities.
        </p>
      </footer>
    </div>
  );
}

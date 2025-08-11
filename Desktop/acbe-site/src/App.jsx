import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Phone,
  Mail,
  ArrowRight,
  ShieldCheck,
  Building2,
  Handshake,
  FileText,
  Globe2,
  ChevronRight,
  MessageCircle,
} from "lucide-react";

import logoIcon from "./assets/acbe-logo.png";       // icon
import logoFull from "./assets/acbe-logoFULL.png";   // full lockup

const content = {
  en: {
    brand: "ALGHUMLASI COMMERCIAL BROKERS",
    tagline: "Your Gateway to Success",
    heroLead:
      "Dubai-based commercial brokerage & corporate services boutique helping founders, investors, and SMEs set up, operate, and scale in the UAE.",
    ctas: { talk: "Talk to us", telegram: "Telegram" },
    nav: {
      about: "About",
      services: "Services",
      sectors: "Sectors",
      process: "Process",
      compliance: "Compliance",
      contact: "Contact",
    },
    aboutTitle: "About Us",
    aboutText:
      "We are a licensed UAE commercial brokerage with a hands-on approach. From company formation and corporate structuring to bank onboarding and ongoing PRO, we deliver clean execution, clear timelines, and compliant documentation.",
    highlights: [
      "Licensed in Dubai (DET)",
      "Bilingual support (EN/AR)",
      "Transparent, fixed-fee proposals",
      "Fast-track filings & concierge handling",
    ],
    servicesTitle: "What we do",
    services: [
      {
        icon: <Handshake className="h-6 w-6" />,
        title: "Commercial Brokerage",
        desc: "Introductions, mandates, and commission agreements with robust KYC and counterpart screening.",
      },
      {
        icon: <Building2 className="h-6 w-6" />,
        title: "Company Setup (Mainland & Free Zones)",
        desc: "Entity selection, name reservation, MOA drafting, and licensing end-to-end.",
      },
      {
        icon: <ShieldCheck className="h-6 w-6" />,
        title: "Bank Account & Compliance",
        desc: "Bank readiness packs, meetings, and compliance narratives tailored to your business model.",
      },
      {
        icon: <FileText className="h-6 w-6" />,
        title: "PRO & Government Services",
        desc: "Visas, attestations, NOCs, document legalization, and renewals without friction.",
      },
    ],
    sectorsTitle: "Sectors we serve",
    sectors: [
      { title: "Oil & refined products intermediation" },
      { title: "General trading & distribution" },
      { title: "Consulting & professional services" },
      { title: "Tech, e-commerce, and startups" },
    ],
    processTitle: "How we work",
    steps: [
      { title: "Discovery", desc: "We map your objectives, timelines, and compliance profile." },
      { title: "Proposal", desc: "You get a clear scope, fixed fees, and a step-by-step plan." },
      { title: "Execution", desc: "We prepare forms, book appointments, and file digitally." },
      { title: "Go-Live", desc: "Banking, VAT, and PRO handled; you focus on the business." },
    ],
    complianceText:
      "We align with DET, FZAs, and bank AML/KYC frameworks. All engagements include identity verification, source-of-funds checks where applicable, and documented service agreements.",
    contactTitle: "Let's build in the UAE",
    contactText:
      "Tell us about your project. We'll revert with a same-day plan and next steps.",
    licenseNote:
      "Licensed commercial broker in Dubai. License No. 1361265 — Documents available upon request.",
    footer:
      "© " +
      new Date().getFullYear() +
      " ALGHUMLASI COMMERCIAL BROKERS. All rights reserved.",
  },
  ar: {
    brand: "مؤسسة الغملسي للوساطة التجارية",
    tagline: "بوابتك نحو النجاح",
    heroLead:
      "شركة وساطة وخدمات شركات مقرها دبي نساند رواد الأعمال والمستثمرين والشركات الصغيرة لتأسيس أعمالهم وتشغيلها والتوسع في دولة الإمارات.",
    ctas: { talk: "تواصل معنا", telegram: "تيليجرام" },
    nav: {
      about: "من نحن",
      services: "الخدمات",
      sectors: "القطاعات",
      process: "الآلية",
      compliance: "الامتثال",
      contact: "التواصل",
    },
    aboutTitle: "من نحن",
    aboutText:
      "نحن وسيط تجاري مرخّص في دبي بنهج عملي. من تأسيس الشركات وهيكلة الكيانات إلى فتح الحسابات البنكية والخدمات الحكومية، نقدّم تنفيذاً واضحاً ووثائق متوافقة ومواعيد محددة.",
    highlights: [
      "مرخّص في دبي",
      "دعم باللغتين العربية والإنجليزية",
      "عروض أسعار واضحة وثابتة",
      "تسريع المعاملات بإدارة شاملة",
    ],
    servicesTitle: "ماذا نقدم",
    services: [
      {
        icon: <Handshake className="h-6 w-6" />,
        title: "وساطة تجارية",
        desc: "تعريفات واتفاقيات عمولة مع تدقيق KYC وفحص الأطراف.",
      },
      {
        icon: <Building2 className="h-6 w-6" />,
        title: "تأسيس الشركات (سوق محلي ومناطق حرة)",
        desc: "اختيار الكيان وحجز الاسم وصياغة العقود وإصدار الرخصة بشكل متكامل.",
      },
      {
        icon: <ShieldCheck className="h-6 w-6" />,
        title: "الحسابات البنكية والامتثال",
        desc: "حزم جاهزية للبنوك واجتماعات وسرد امتثال مناسب للنشاط.",
      },
      {
        icon: <FileText className="h-6 w-6" />,
        title: "الخدمات الحكومية (PRO)",
        desc: "تأشيرات وتصديقات وخطابات عدم ممانعة وتجديدات بسهولة.",
      },
    ],
    sectorsTitle: "القطاعات التي نخدمها",
    sectors: [
      { title: "وساطة منتجات النفط" },
      { title: "التجارة العامة والتوزيع" },
      { title: "الاستشارات والخدمات المهنية" },
      { title: "التقنية والتجارة الإلكترونية" },
    ],
    processTitle: "آلية العمل",
    steps: [
      { title: "التشخيص", desc: "نحدّد الأهداف والجداول ومتطلبات الامتثال." },
      { title: "العرض", desc: "نشاركك نطاق العمل والرسوم وخطة تفصيلية." },
      { title: "التنفيذ", desc: "نجهّز النماذج ونحجز المواعيد ونقدّم الطلبات إلكترونياً." },
      { title: "الانطلاق", desc: "البنوك والضريبة والخدمات الحكومية — وتركّز أنت على العمل." },
    ],
    complianceText:
      "نلتزم بأطر مكافحة غسل الأموال ومعايير KYC لدى الدائرة والجهات التنظيمية والبنوك. جميع التعاملات تشمل التحقق من الهوية وعلى حسب الطلب مصدر الأموال واتفاقيات خدمة موثّقة.",
    contactTitle: "لننطلق في الإمارات",
    contactText:
      "شاركنا فكرتك وسنعود إليك بخطة وخطوات عملية في نفس اليوم.",
    licenseNote:
      "وسيط تجاري مرخّص في دبي. رقم الرخصة 1361265 — الوثائق متاحة عند الطلب.",
    footer:
      "© " +
      new Date().getFullYear() +
      " مؤسسة الغملسي للوساطة التجارية. جميع الحقوق محفوظة.",
  },
};

export default function App() {
  const [lang, setLang] = useState("en");
  const t = content[lang];

  const officeAddress =
    lang === "ar"
      ? "مكتب M73، مركز اليلايس للمعاملات الحكومية، مجمع دبي للاستثمار 2، دبي، الإمارات العربية المتحدة (مكاني 19035 62882)"
      : "Office M73, Al Yalayis Governmental Transaction Center, Dubai Investment Park 2, Dubai, UAE (Makani 19035 62882)";

  const Pill = ({ children }) => (
    <span className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-3 py-1">
      {children}
    </span>
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* icon on mobile, full logo on md+ */}
            <img src={logoIcon} alt="ACBE Icon" className="h-9 w-9 object-contain sm:hidden" />
            <img src={logoFull} alt="ALGHUMLASI COMMERCIAL BROKERS" className="hidden sm:block h-8 w-auto object-contain" />
            <div className="font-semibold">
              <span className="hidden sm:inline">{t.brand}</span>
              <span className="sm:hidden">ALGHUMLASI</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#about" className="hover:text-sky-700">{t.nav.about}</a>
            <a href="#services" className="hover:text-sky-700">{t.nav.services}</a>
            <a href="#sectors" className="hover:text-sky-700">{t.nav.sectors}</a>
            <a href="#process" className="hover:text-sky-700">{t.nav.process}</a>
            <a href="#compliance" className="hover:text-sky-700">{t.nav.compliance}</a>
            <a href="#contact" className="hover:text-sky-700">{t.nav.contact}</a>
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              className="px-3 py-1 text-xs rounded-full border border-slate-300 hover:bg-slate-100"
            >
              {lang === "en" ? "العربية" : "EN"}
            </button>
            <a
              href="tel:+971581888639"
              className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm bg-sky-600 text-white hover:bg-sky-700"
            >
              <Phone className="h-4 w-4" /> Call UAE
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-50 via-white to-indigo-50" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid md:grid-cols-2 items-center gap-12">
            <div className={lang === "ar" ? "text-right" : "text-left"}>
              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-5xl font-extrabold tracking-tight"
              >
                {t.brand}
              </motion.h1>
              <p className="mt-2 text-sky-700 font-medium">{t.tagline}</p>
              <p className="mt-6 text-slate-600 leading-relaxed">{t.heroLead}</p>

              <div
                className={`mt-8 flex ${
                  lang === "ar" ? "justify-end" : "justify-start"
                } gap-3`}
              >
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-slate-900 text-white hover:bg-slate-800"
                >
                  {t.ctas.talk} <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="https://t.me/Acb3st"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-white border border-slate-300 hover:bg-slate-100"
                >
                  <MessageCircle className="h-4 w-4" /> {t.ctas.telegram}
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-600">
                {t.highlights.map((h, i) => (
                  <Pill key={i}>
                    <CheckCircle2 className="h-4 w-4 text-sky-600" /> {h}
                  </Pill>
                ))}
              </div>
            </div>

            <div className="md:pl-8">
              <div className="rounded-3xl border border-slate-200 bg-white shadow-sm p-6 sm:p-8">
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-900 to-slate-700 flex items-center justify-center text-white">
                  <div className="text-center">
                    <img
                      src={logoFull}
                      alt="ACBE Full Logo"
                      className="mx-auto mb-3 h-14 object-contain"
                    />
                    <div className="text-lg font-semibold">{t.brand}</div>
                    <div className="text-slate-300">{t.tagline}</div>
                  </div>
                </div>
                <div className="mt-4 text-xs text-slate-500">
                  <FileText className="h-4 w-4 inline mr-1" /> Trade license: available upon request
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <h2 className="text-2xl sm:text-3xl font-bold">{t.aboutTitle}</h2>
            </div>
            <div
              className={`md:col-span-2 text-slate-600 ${
                lang === "ar" ? "text-right" : "text-left"
              }`}
            >
              <p className="leading-relaxed">{t.aboutText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-10">{t.servicesTitle}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.services.map((s, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-200 p-6 bg-slate-50 hover:bg-slate-100 transition"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-slate-200">
                  {s.icon}
                </div>
                <div className="font-semibold">{s.title}</div>
                <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm text-sky-700">
                  <span>Learn more</span> <ChevronRight className="h-4 w-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section id="sectors" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-10">{t.sectorsTitle}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.sectors.map((x, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 p-6 bg-white">
                <Globe2 className="h-6 w-6 mb-3" />
                <div className="font-medium">{x.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-16 sm:py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-10">How we work</h2>
          <ol className="grid md:grid-cols-4 gap-6">
            {t.steps.map((st, i) => (
              <li key={i} className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="text-sm text-slate-500">Step {i + 1}</div>
                <div className="font-semibold mt-1">{st.title}</div>
                <p className="text-sm text-slate-600 mt-2">{st.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Compliance */}
      <section id="compliance" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <h2 className="text-2xl sm:text-3xl font-bold">UAE Compliance</h2>
            </div>
            <div
              className={`md:col-span-2 text-slate-600 ${
                lang === "ar" ? "text-right" : "text-left"
              }`}
            >
              <p className="leading-relaxed">{t.complianceText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold">{t.contactTitle}</h2>
              <p className="mt-4 text-slate-600">{t.contactText}</p>
              <ul className="mt-6 space-y-3 text-slate-700">
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-sky-700" />
                  <a href="tel:+971581888639" className="hover:underline">
                    +971581888639
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-sky-700" />
                  <a href="mailto:info@acbe.ae" className="hover:underline">
                    info@acbe.ae
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Building2 className="h-5 w-5 text-sky-700" />
                  <span>{officeAddress}</span>
                </li>
              </ul>
              <p className="mt-6 text-xs text-slate-500">{t.licenseNote}</p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6 bg-slate-50">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium">Name</label>
                  <input
                    className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-600"
                    placeholder="Your name"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium">Email</label>
                    <input
                      type="email"
                      className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-600"
                      placeholder="you@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Phone</label>
                    <input
                      className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-600"
                      placeholder="+971 ••• ••••"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium">Message</label>
                  <textarea
                    className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-600"
                    rows={4}
                    placeholder="Tell us what you need…"
                  />
                </div>
                <button className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-white hover:bg-slate-800">
                  Send <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>{t.footer}</div>
          <div className="flex items-center gap-4">
            <a className="hover:underline" href="#">Privacy</a>
            <a className="hover:underline" href="#">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

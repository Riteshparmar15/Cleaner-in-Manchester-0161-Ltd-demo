import React from "react";
import { Link } from "react-router-dom";
import { Phone, ShieldCheck, Zap } from "lucide-react";

import { servicesData } from "../data/servicesData";
import { businessInfo } from "../data/businessInfo";
import { ServiceCard } from "../components/ServiceCard";
import { ConversionBanner } from "../components/ConversionBanner";
import { FAQSection } from "../components/FAQSection";

export const ServicesPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-12 lg:py-16 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#14355F]/30 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-teal-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>Time-Saving Cleaning Solutions</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-3">
            Our Cleaning Services
          </h1>
          <p className="max-w-xl mx-auto text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
            Compare services at a glance with upfront pricing, certified DBS-checked cleaners, and supplies included.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/quote"
              className="px-6 py-3 rounded-xl bg-[#14355F] hover:bg-[#0E2543] text-white text-xs font-black shadow-md shadow-slate-900/20 transition-all mac-btn"
            >
              Instant 60-Second Calculator
            </Link>
            <a
              href={businessInfo.phoneHref}
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-colors inline-flex items-center gap-2 border border-slate-700"
            >
              <Phone className="w-3.5 h-3.5 text-teal-400" />
              <span>Call {businessInfo.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </section>

      {/* QUICK TRUST BAR */}
      <div className="bg-white py-4 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4 text-xs font-bold text-slate-700">
          <span className="flex items-center gap-1.5 text-emerald-700">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            DBS Vetted Cleaners
          </span>
          <span>&bull;</span>
          <span className="text-slate-800">£2,000,000 Insured</span>
          <span>&bull;</span>
          <span className="text-slate-800">100% Free Re-Clean Guarantee</span>
          <span>&bull;</span>
          <span className="text-[#0D9488]">Eco-Supplies & Commercial Vacuums Provided</span>
        </div>
      </div>

      {/* Services Grid: TIME SAVING, NO PARAGRAPH ESSAYS */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Select Your Clean & Book
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Click any service below to customize bedrooms and frequency in under 60 seconds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Services FAQ */}
      <FAQSection />

      {/* Conversion Banner */}
      <ConversionBanner />
    </div>
  );
};

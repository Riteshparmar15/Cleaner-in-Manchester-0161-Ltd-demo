import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  ClipboardList,
  ShieldCheck
} from "lucide-react";

import { servicesData } from "../data/servicesData";
import { businessInfo } from "../data/businessInfo";
import { FAQSection } from "../components/FAQSection";
import { ConversionBanner } from "../components/ConversionBanner";

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Service Hero Header */}
      <section className="bg-slate-900 text-white pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#14355F]/30 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-xs font-semibold text-slate-400">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-teal-400 font-bold">{service.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Header Copy */}
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-teal-400 text-xs font-bold uppercase tracking-wider mb-4">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                <span>Manchester Professional Cleaning</span>
              </span>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4 leading-tight">
                {service.title} in Manchester
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
                {service.heroDescription}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to={`/quote?service=${encodeURIComponent(service.title)}`}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#14355F] hover:bg-[#0E2543] text-white text-sm font-bold shadow-md shadow-slate-900/30 transition-all mac-btn"
                >
                  <span>Request Instant Estimate</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={businessInfo.phoneHref}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-sm font-bold transition-colors border border-slate-700"
                >
                  <Phone className="w-4 h-4 text-teal-400" />
                  <span>Call {businessInfo.phoneFormatted}</span>
                </a>
              </div>
            </div>

            {/* Right Visual showing cleaner in action */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 aspect-[4/3] group">
                <img
                  src={service.image}
                  alt={`${service.title} standard in Manchester`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-3 left-3 right-3 px-3 py-2 rounded-xl bg-slate-900/80 backdrop-blur-md text-white text-xs flex items-center justify-between border border-white/20">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>DBS Checked Cleaners</span>
                  </span>
                  <span className="text-teal-300 font-semibold">Eco-Supplies Included</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview & Audience */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4">
                Service Overview
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-6">
                {service.overview}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {service.highlights.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-800 font-medium leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Audience Card */}
            <div className="lg:col-span-4 bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">
                Ideal For
              </h3>
              <ul className="space-y-2.5 mb-6">
                {service.targetAudience.map((aud, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#14355F]"></div>
                    <span>{aud}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-slate-200">
                <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                  Have unique requirements or questions regarding your property layout?
                </p>
                <Link
                  to={`/quote?service=${encodeURIComponent(service.title)}`}
                  className="block w-full py-3 rounded-xl bg-[#14355F] hover:bg-[#0E2543] text-white text-xs font-bold text-center transition-colors shadow-sm"
                >
                  Calculate Instant Price
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Cleaning Checklist */}
      <section className="py-20 bg-slate-50" aria-labelledby="checklist-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-[#14355F]/10 text-[#14355F] text-xs font-black uppercase tracking-wider mb-3">
              Standard Specifications
            </span>
            <h2 id="checklist-title" className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              What Is Included In This Clean
            </h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              We follow a thorough room-by-room checklist to ensure consistent quality on every visit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.checklist.map((section, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col hover:border-[#14355F]/30 transition-all"
              >
                <div className="flex items-center gap-2.5 pb-4 mb-6 border-b border-slate-100">
                  <ClipboardList className="w-5 h-5 text-[#14355F]" />
                  <h3 className="text-lg font-bold text-slate-900">
                    {section.category}
                  </h3>
                </div>

                <ul className="space-y-3.5 flex-1">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Benefits */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-[#14355F]/10 text-[#14355F] text-xs font-black uppercase tracking-wider mb-3">
              Practical Value
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Why Book {service.title}?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.practicalBenefits.map((benefit, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service-Specific FAQs */}
      <FAQSection
        customTitle={`Frequently Asked Questions: ${service.title}`}
        items={service.faqs}
      />

      {/* Conversion Banner */}
      <ConversionBanner
        title={`Ready to Book ${service.title}?`}
        subtitle="Share your property details with our Manchester team and receive an instant estimate tailored to your schedule."
      />
    </div>
  );
};

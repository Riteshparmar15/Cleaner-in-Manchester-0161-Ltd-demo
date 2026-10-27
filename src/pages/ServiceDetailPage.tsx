import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  ClipboardList
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
    <div className="flex flex-col min-h-screen">
      {/* Service Hero Header */}
      <section className="bg-[#142B3B] text-white pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-[#1D3D52]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <span className="text-[#43A66B]">{service.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Header Copy */}
            <div className="lg:col-span-7">
              <span className="inline-block px-3 py-1 rounded-full bg-[#1B384D] border border-[#234761] text-[#43A66B] text-xs font-bold uppercase tracking-wider mb-4">
                Manchester Cleaning Service
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
                {service.title} in Manchester
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
                {service.heroDescription}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to={`/quote?service=${encodeURIComponent(service.title)}`}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#43A66B] hover:bg-[#348655] text-white text-sm font-bold shadow-sm transition-all"
                >
                  <span>Request a Quote for This Service</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={businessInfo.phoneHref}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#1B384D] hover:bg-[#234761] text-white text-sm font-bold transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#43A66B]" />
                  <span>Call {businessInfo.phoneFormatted}</span>
                </a>
              </div>
            </div>

            {/* Right Visual */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 aspect-[4/3]">
                <img
                  src={service.image}
                  alt={`${service.title} service standard in Manchester`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview & Audience */}
      <section className="py-16 bg-white border-b border-[#E5E9ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#142B3B] mb-4">
                Service Overview
              </h2>
              <p className="text-base text-[#65727E] leading-relaxed mb-6">
                {service.overview}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {service.highlights.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#F7F9FA] border border-[#E5E9ED] flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#43A66B] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#202A33] font-medium leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Audience Card */}
            <div className="lg:col-span-4 bg-[#F7F9FA] rounded-2xl p-6 border border-[#E5E9ED]">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#142B3B] mb-3">
                Ideal For
              </h3>
              <ul className="space-y-2.5 mb-6">
                {service.targetAudience.map((aud, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-[#65727E]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#43A66B]"></div>
                    <span>{aud}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-[#E5E9ED]">
                <p className="text-xs text-[#65727E] mb-4 leading-relaxed">
                  Have unique requirements or questions regarding your property layout?
                </p>
                <Link
                  to={`/quote?service=${encodeURIComponent(service.title)}`}
                  className="block w-full py-2.5 rounded-lg bg-[#142B3B] text-white text-xs font-bold text-center hover:bg-[#1D3D52] transition-colors"
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Cleaning Checklist */}
      <section className="py-20 bg-[#F7F9FA]" aria-labelledby="checklist-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-[#EDF7F1] text-[#43A66B] text-xs font-extrabold uppercase tracking-wider mb-3">
              Standard Specifications
            </span>
            <h2 id="checklist-title" className="text-3xl sm:text-4xl font-extrabold text-[#142B3B] tracking-tight">
              What Is Included In This Clean
            </h2>
            <p className="mt-3 text-sm text-[#65727E] leading-relaxed">
              We follow a thorough, room-by-room checklist to ensure consistent quality on every visit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.checklist.map((section, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E5E9ED] shadow-xs flex flex-col"
              >
                <div className="flex items-center gap-2.5 pb-4 mb-6 border-b border-[#E5E9ED]">
                  <ClipboardList className="w-5 h-5 text-[#43A66B]" />
                  <h3 className="text-lg font-bold text-[#142B3B]">
                    {section.category}
                  </h3>
                </div>

                <ul className="space-y-3.5 flex-1">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[#202A33]">
                      <CheckCircle2 className="w-4 h-4 text-[#43A66B] shrink-0 mt-0.5" />
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
      <section className="py-20 bg-white border-t border-[#E5E9ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-[#EDF7F1] text-[#43A66B] text-xs font-extrabold uppercase tracking-wider mb-3">
              Practical Value
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142B3B] tracking-tight">
              Why Book {service.title}?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.practicalBenefits.map((benefit, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#F7F9FA] border border-[#E5E9ED]">
                <h3 className="text-lg font-bold text-[#142B3B] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#65727E] leading-relaxed">
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
        subtitle="Share your property details with our Manchester team and receive an honest quote tailored to your schedule."
      />
    </div>
  );
};

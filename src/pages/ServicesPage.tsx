import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";

import { servicesData } from "../data/servicesData";
import { businessInfo } from "../data/businessInfo";
import { ConversionBanner } from "../components/ConversionBanner";
import { FAQSection } from "../components/FAQSection";

export const ServicesPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="bg-[#142B3B] text-white py-16 lg:py-20 border-b border-[#1D3D52]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-[#1B384D] border border-[#234761] text-[#43A66B] text-xs font-bold uppercase tracking-wider mb-4">
            Manchester Cleaning Specialists
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Professional Cleaning Services in Manchester
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
            Tailored housekeeping, deep sanitation, tenancy handovers, and office cleaning designed for Manchester properties.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/quote"
              className="px-6 py-3 rounded-lg bg-[#43A66B] hover:bg-[#348655] text-white text-sm font-bold shadow-sm transition-all"
            >
              Request a Free Quote
            </Link>
            <a
              href={businessInfo.phoneHref}
              className="px-6 py-3 rounded-lg bg-[#1B384D] hover:bg-[#234761] text-white text-sm font-bold transition-colors inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#43A66B]" />
              <span>Call {businessInfo.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Services List / Detailed Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {servicesData.map((service, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <div
                key={service.slug}
                id={service.slug}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                  isReversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Visual Image */}
                <div className={`lg:col-span-6 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="relative rounded-3xl overflow-hidden shadow-lg border border-[#E5E9ED] aspect-[4/3] bg-slate-100">
                    <img
                      src={service.image}
                      alt={`Manchester ${service.title}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-bold text-[#142B3B] shadow-xs">
                      {service.targetAudience.slice(0, 2).join(" • ")}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`lg:col-span-6 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#43A66B]">
                    Service {index + 1} of {servicesData.length}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#142B3B] mt-1 mb-3">
                    {service.title}
                  </h2>
                  <p className="text-base text-[#65727E] leading-relaxed mb-6">
                    {service.overview}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2.5 mb-8">
                    {service.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-3 text-sm text-[#202A33]">
                        <CheckCircle2 className="w-5 h-5 text-[#43A66B] shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-4">
                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#142B3B] hover:bg-[#1D3D52] text-white text-xs font-bold transition-colors"
                    >
                      <span>View Full Checklist & Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      to={`/quote?service=${encodeURIComponent(service.title)}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#43A66B] hover:bg-[#348655] text-white text-xs font-bold transition-colors"
                    >
                      <span>Request Quote for {service.title}</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Services FAQ */}
      <FAQSection />

      {/* Conversion Banner */}
      <ConversionBanner />
    </div>
  );
};

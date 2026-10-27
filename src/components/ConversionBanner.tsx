import React from "react";
import { Link } from "react-router-dom";
import { Phone, ArrowRight, Sparkles } from "lucide-react";
import { businessInfo } from "../data/businessInfo";

interface ConversionBannerProps {
  title?: string;
  subtitle?: string;
}

export const ConversionBanner: React.FC<ConversionBannerProps> = ({
  title = "Ready for a Fresher Space?",
  subtitle = "Tell us about your cleaning needs and take the next step towards a cleaner property."
}) => {
  return (
    <section className="py-20 bg-[#142B3B] text-white relative overflow-hidden" aria-label="Quote Call to Action">
      {/* Editorial geometric background accents */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 rounded-full bg-[#1B384D] opacity-40 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-80 h-80 rounded-full bg-[#43A66B] opacity-15 blur-3xl pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B384D] border border-[#234761] text-xs font-bold text-[#43A66B] mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Tailored Cleaning Across Manchester</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          {title}
        </h2>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 mb-10 leading-relaxed">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/quote"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#43A66B] hover:bg-[#348655] text-white text-base font-bold shadow-md transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#43A66B] focus:ring-offset-2 focus:ring-offset-[#142B3B]"
          >
            <span>Request a Free Quote</span>
            <ArrowRight className="w-5 h-5" />
          </Link>

          <a
            href={businessInfo.phoneHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#1B384D] hover:bg-[#234761] border border-[#234761] text-white text-base font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-300"
          >
            <Phone className="w-5 h-5 text-[#43A66B]" />
            <span>Call Our Team: {businessInfo.phoneFormatted}</span>
          </a>
        </div>

        <div className="mt-8 text-xs text-slate-400">
          <span>No automated obligation &bull; Direct quote review by our local team &bull; Manchester-based</span>
        </div>
      </div>
    </section>
  );
};

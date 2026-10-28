import React from "react";
import { Link } from "react-router-dom";
import { Phone, ArrowRight, ShieldCheck, Clock } from "lucide-react";
import { businessInfo } from "../data/businessInfo";

interface ConversionBannerProps {
  title?: string;
  subtitle?: string;
}

export const ConversionBanner: React.FC<ConversionBannerProps> = ({
  title = "Ready for a Spotless, Pristine Space?",
  subtitle = "Reclaim your weekends. Get your customized quote in 60 seconds or give our friendly Manchester team a call."
}) => {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden" aria-label="Quote Call to Action">
      {/* Background accents */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 rounded-full bg-[#14355F]/30 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-80 h-80 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-xs font-bold text-teal-400 mb-6 shadow-sm">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Greater Manchester &bull; DBS Checked &bull; £2M Insured</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-6 leading-tight">
          {title}
        </h2>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 mb-10 leading-relaxed">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/quote"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#14355F] hover:bg-[#1E4B82] border border-teal-500/30 text-white text-base font-bold shadow-lg shadow-slate-950 transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-slate-900 cursor-pointer"
          >
            <span>Book in 60 Seconds</span>
            <ArrowRight className="w-5 h-5" />
          </Link>

          <a
            href={businessInfo.phoneHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white text-base font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-400 cursor-pointer"
          >
            <Phone className="w-5 h-5 text-teal-400" />
            <span>Call Our Team: {businessInfo.phoneFormatted}</span>
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-emerald-400" />
            Instant quote & no obligation
          </span>
          <span>&bull;</span>
          <span>100% Satisfaction Guarantee</span>
          <span>&bull;</span>
          <span>Supplies & Vacuums Provided</span>
        </div>
      </div>
    </section>
  );
};

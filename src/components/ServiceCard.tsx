import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, ShieldCheck, Zap } from "lucide-react";
import type { ServiceDetail } from "../data/servicesData";
import { OptimizedImage } from "./OptimizedImage";

interface ServiceCardProps {
  service: ServiceDetail;
}

// Starting price map for instant visibility
const servicePrices: Record<string, string> = {
  "regular-home-cleaning": "From £35",
  "apartment-cleaning": "From £42",
  "deep-cleaning": "From £89",
  "end-of-tenancy-cleaning": "From £120",
  "office-cleaning": "From £49",
  "end-of-construction-cleaning": "From £135"
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const priceTag = servicePrices[service.slug] || "From £45";

  return (
    <article className="mac-card flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:border-[#14355F]/40 hover:shadow-lg transition-all group">
      {/* Clean Visual with Cleaner in Action */}
      <div className="relative h-52 w-full overflow-hidden bg-slate-100">
        <OptimizedImage
          src={service.image}
          alt={`Professional cleaner performing ${service.title} in Manchester`}
          wrapperClassName="w-full h-full"
          className="transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none"></div>

        {/* Starting Price Pill */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-900/90 text-white font-black text-xs shadow-md border border-white/20">
            <Zap className="w-3 h-3 text-amber-400 fill-amber-400" />
            <span>{priceTag}</span>
          </span>
        </div>

        {/* Trust Badge */}
        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-600/90 text-white font-bold text-[11px] shadow-md">
            <ShieldCheck className="w-3 h-3" />
            <span>DBS Vetted</span>
          </span>
        </div>

        {/* Quick Audience Tag */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
          <span className="inline-block px-2.5 py-0.5 rounded-md bg-white/95 text-[11px] font-bold text-slate-800 shadow-xs">
            {service.targetAudience[0] || "Manchester"}
          </span>
          <span className="text-[11px] font-semibold text-white/90">
            Eco-Supplies Incl.
          </span>
        </div>
      </div>

      {/* Card Content - TIME SAVING, NO DESCRIPTIVE TEXT WALL */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-lg font-black text-slate-900 group-hover:text-[#14355F] transition-colors mb-3">
          {service.title}
        </h3>

        {/* 3 Quick Visual Trust Checkmarks - NO LONG DESCRIPTIONS */}
        <div className="space-y-2 mb-5 flex-1">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
            <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <Check className="w-2.5 h-2.5 stroke-[3]" />
            </div>
            <span>DBS Checked, Insured & Vetted Cleaner</span>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
            <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <Check className="w-2.5 h-2.5 stroke-[3]" />
            </div>
            <span>All Cleaning Products & Vacuum Provided</span>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
            <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <Check className="w-2.5 h-2.5 stroke-[3]" />
            </div>
            <span>100% Free Re-Clean If Anything Missed</span>
          </div>
        </div>

        {/* Fast Action Buttons */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
          <span className="text-xs font-black text-slate-900">
            {priceTag}
          </span>

          <Link
            to={`/quote?service=${encodeURIComponent(service.title)}`}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#14355F] hover:bg-[#0E2543] text-white text-xs font-black shadow-md shadow-slate-900/15 mac-btn cursor-pointer"
          >
            <span>Book in 60s</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
};

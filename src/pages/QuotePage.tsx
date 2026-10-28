import React from "react";
import { Phone, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

import { QuoteForm } from "../components/QuoteForm";
import { businessInfo } from "../data/businessInfo";

export const QuotePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-12 lg:py-16 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-teal-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5 text-teal-400" />
            <span>Time-Saving Manchester Enquiry</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-3">
            Request Your Cleaning Quote
          </h1>
          <p className="max-w-xl mx-auto text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
            Tell us about your property size and schedule. We provide instant, transparent pricing with eco-supplies included.
          </p>

          <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-300 bg-slate-800/80 px-4 py-2 rounded-full border border-slate-700">
            <span>Prefer to chat with us now?</span>
            <a
              href={businessInfo.phoneHref}
              className="font-bold text-teal-400 hover:text-white transition-colors inline-flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{businessInfo.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-12 sm:py-16 flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Trust Guarantees Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Zero-obligation estimate</span>
            </div>
            <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>£2M Insured & DBS Vetted</span>
            </div>
            <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>100% Free Re-Clean Guarantee</span>
            </div>
          </div>

          {/* Form */}
          <QuoteForm />
        </div>
      </section>
    </div>
  );
};

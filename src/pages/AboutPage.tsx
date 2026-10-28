import React from "react";
import { Link } from "react-router-dom";
import { Award, ShieldCheck, Clock, CheckCircle2, Phone } from "lucide-react";
import { ConversionBanner } from "../components/ConversionBanner";
import { OptimizedImage } from "../components/OptimizedImage";
import { businessInfo } from "../data/businessInfo";

export const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-16 lg:py-20 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#14355F]/30 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-teal-400 text-xs font-bold uppercase tracking-wider mb-4">
            Our Story & Values
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            About Cleaner in Manchester (0161) Ltd
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
            Professional, friendly, and detail-oriented cleaning services rooted right here in Greater Manchester.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/quote"
              className="px-6 py-3 rounded-xl bg-[#14355F] hover:bg-[#0E2543] text-white text-sm font-bold shadow-md shadow-slate-900/20 transition-all mac-btn"
            >
              Get Instant Estimate
            </Link>
            <a
              href={businessInfo.phoneHref}
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white text-sm font-bold transition-colors inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-teal-400" />
              <span>Call 0161 710 4789</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Narrative & Values with Real Cleaner In Action Photo */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0D9488]">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Dedicated Cleaning Specialists for Manchester Properties
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Cleaner in Manchester (0161) Ltd was founded with a straightforward goal: to give home and business owners across Greater Manchester a dependable, pristine cleaning service they can trust week after week.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Whether you live in a modern apartment in Ancoats or Deansgate, manage an office in the City Centre, or own a family home in Didsbury, our approach remains the same: thorough attention to detail, eco-friendly supplies, and flexible scheduling tailored to your busy schedule.
              </p>

              {/* Core Pillars */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 mb-2 font-bold text-slate-900 text-sm">
                    <Award className="w-4 h-4 text-emerald-600" />
                    <span>Meticulous Standards</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Structured room-by-room checklists ensure no surface, skirting board, or chrome fixture is overlooked.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 mb-2 font-bold text-slate-900 text-sm">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>DBS Checked & Vetted</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Polite, certified professionals who respect your privacy, keys, and home environment with £2M insurance.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Visual: Real Cleaner Specialist Photo */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
                <OptimizedImage
                  src="/images/cleaner_team_friendly.jpg"
                  alt="Friendly professional cleaner in uniform holding eco-friendly cleaning supplies in modern kitchen"
                  wrapperClassName="w-full h-full"
                  priority={true}
                />
                <div className="absolute bottom-3 left-3 right-3 px-3 py-2 rounded-xl bg-slate-900/80 backdrop-blur-md text-white text-xs flex items-center justify-between border border-white/20">
                  <span className="font-semibold">Vetted Professional Staff</span>
                  <span className="text-amber-400 font-bold">★ 4.9 Rated</span>
                </div>
              </div>
              <p className="mt-3 text-xs text-center text-slate-500">
                Eco-friendly products, professional equipment, and genuine pride in clean spaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-[#14355F]/10 text-[#14355F] text-xs font-black uppercase tracking-wider mb-3">
              Our Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              What You Can Always Count On
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs hover:border-[#14355F]/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#14355F]/10 text-[#14355F] flex items-center justify-center mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Transparent & Time-Saving
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                No hidden fees or unexpected charges. Calculate your instant estimate in 60 seconds with simple, transparent per-visit rates.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs hover:border-[#14355F]/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                100% Free Re-Clean Guarantee
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Your satisfaction is guaranteed. If any area does not meet our high standards, we return within 24 hours to re-clean it free of charge.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs hover:border-[#14355F]/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#14355F]/10 text-[#14355F] flex items-center justify-center mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Local Manchester Team
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Direct communication with real people based in Manchester. Call 0161 710 4789 anytime to arrange or adjust your cleaning routine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Banner */}
      <ConversionBanner />
    </div>
  );
};

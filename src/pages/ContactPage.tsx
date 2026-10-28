import { Link } from "react-router-dom";
import { Phone, MapPin, Globe, Clock, ArrowRight, CheckCircle2, Zap } from "lucide-react";

import { businessInfo } from "../data/businessInfo";
import { FAQSection } from "../components/FAQSection";

export const ContactPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-slate-900 text-white py-16 lg:py-20 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#14355F]/30 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-teal-400 text-xs font-bold uppercase tracking-wider mb-4">
            Manchester Contact
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Contact Cleaner in Manchester (0161) Ltd
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
            Speak directly with our Manchester team to arrange cleaning visits or discuss your property requirements.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Contact Methods (5 cols on lg) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0D9488]">
                  Direct Assistance
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1 mb-4">
                  Get in Touch Today
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We are here to help you organise dependable, spotless clean arrangements for your house, apartment, or commercial office.
                </p>
              </div>

              {/* Verified Contact Card */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-5">
                {/* Telephone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#14355F]/10 text-[#14355F] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Telephone
                    </h3>
                    <a
                      href={businessInfo.phoneHref}
                      className="text-lg font-black text-slate-900 hover:text-[#14355F] transition-colors"
                    >
                      {businessInfo.phoneFormatted}
                    </a>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Direct line for Manchester enquiries & bookings
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 pt-4 border-t border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-[#14355F]/10 text-[#14355F] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Service Coverage
                    </h3>
                    <p className="text-sm font-bold text-slate-900">
                      {businessInfo.location}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Covering City Centre & all Greater Manchester districts (M1–M50)
                    </p>
                  </div>
                </div>

                {/* Domain */}
                <div className="flex items-start gap-4 pt-4 border-t border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-[#14355F]/10 text-[#14355F] flex items-center justify-center shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Official Website
                    </h3>
                    <p className="text-sm font-bold text-slate-900">
                      {businessInfo.domain}
                    </p>
                  </div>
                </div>

                {/* Operating Notice */}
                <div className="flex items-start gap-4 pt-4 border-t border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-[#14355F]/10 text-[#14355F] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Availability
                    </h3>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {businessInfo.operatingHoursNotice}
                    </p>
                  </div>
                </div>
              </div>

              {/* Note about unverified claims / email */}
              <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-700">
                <p>
                  <strong>Quick Note:</strong> All enquiries are reviewed directly by our local Manchester operations staff to ensure prompt cleaner assignment.
                </p>
              </div>
            </div>

            {/* Right Action: Request Quote Highlight */}
            <div className="lg:col-span-7 bg-slate-900 text-white p-8 sm:p-12 rounded-3xl relative overflow-hidden shadow-xl border border-slate-800">
              <div className="relative z-10 space-y-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-teal-400 text-xs font-bold uppercase tracking-wider">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Time-Saving Fast-Track</span>
                </span>

                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  Get Your Instant Estimate & Book Online
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  Our 60-second quote calculator gathers your Manchester postcode and bedroom count to give you an exact price with no obligation.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Takes under 60 seconds to complete</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Transparent pricing & eco-supplies included</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>100% Satisfaction Guarantee</span>
                  </div>
                </div>

                <div className="pt-6">
                  <Link
                    to="/quote"
                    className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 rounded-xl bg-[#14355F] hover:bg-[#0E2543] text-white font-bold text-sm shadow-md shadow-slate-900/30 transition-all mac-btn"
                  >
                    <span>Instant Quote Calculator</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <FAQSection />
    </div>
  );
};

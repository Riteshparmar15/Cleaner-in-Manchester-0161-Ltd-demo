import { Link } from "react-router-dom";
import { Phone, MapPin, Globe, Clock, ArrowRight, CheckCircle2 } from "lucide-react";

import { businessInfo } from "../data/businessInfo";
import { FAQSection } from "../components/FAQSection";

export const ContactPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-[#142B3B] text-white py-16 lg:py-20 border-b border-[#1D3D52]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-[#1B384D] border border-[#234761] text-[#43A66B] text-xs font-bold uppercase tracking-wider mb-4">
            Manchester Contact
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Contact Cleaner in Manchester (0161) Ltd
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
            Speak directly with our Manchester cleaning team to arrange services or discuss your property requirements.
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
                <span className="text-xs font-bold uppercase tracking-wider text-[#43A66B]">
                  Direct Verification
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#142B3B] mt-1 mb-4">
                  Get in Touch
                </h2>
                <p className="text-sm text-[#65727E] leading-relaxed">
                  We are here to help you organise dependable cleaning arrangements for your home, rental apartment, or office.
                </p>
              </div>

              {/* Verified Contact Card */}
              <div className="p-6 rounded-2xl bg-[#F7F9FA] border border-[#E5E9ED] space-y-5">
                {/* Telephone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EDF7F1] text-[#43A66B] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#65727E]">
                      Telephone
                    </h3>
                    <a
                      href={businessInfo.phoneHref}
                      className="text-lg font-extrabold text-[#142B3B] hover:text-[#43A66B] transition-colors"
                    >
                      {businessInfo.phoneFormatted}
                    </a>
                    <p className="text-xs text-[#65727E] mt-0.5">
                      Direct line for Manchester enquiries & bookings
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 pt-4 border-t border-[#E5E9ED]">
                  <div className="w-10 h-10 rounded-xl bg-[#EDF7F1] text-[#43A66B] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#65727E]">
                      Service Location
                    </h3>
                    <p className="text-sm font-bold text-[#142B3B]">
                      {businessInfo.location}
                    </p>
                    <p className="text-xs text-[#65727E] mt-0.5">
                      Covering City Centre & Greater Manchester districts
                    </p>
                  </div>
                </div>

                {/* Domain */}
                <div className="flex items-start gap-4 pt-4 border-t border-[#E5E9ED]">
                  <div className="w-10 h-10 rounded-xl bg-[#EDF7F1] text-[#43A66B] flex items-center justify-center shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#65727E]">
                      Official Website
                    </h3>
                    <p className="text-sm font-bold text-[#142B3B]">
                      {businessInfo.domain}
                    </p>
                  </div>
                </div>

                {/* Operating Notice */}
                <div className="flex items-start gap-4 pt-4 border-t border-[#E5E9ED]">
                  <div className="w-10 h-10 rounded-xl bg-[#EDF7F1] text-[#43A66B] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#65727E]">
                      Availability
                    </h3>
                    <p className="text-xs text-[#202A33] leading-relaxed">
                      {businessInfo.operatingHoursNotice}
                    </p>
                  </div>
                </div>
              </div>

              {/* Note about unverified claims / email */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
                <p>
                  <strong>Customer Note:</strong> To ensure prompt handling and prevent missed messages, all new cleaning enquiries are processed via phone or our verified online quote request form.
                </p>
              </div>
            </div>

            {/* Right Action: Request Quote Highlight (7 cols on lg) */}
            <div className="lg:col-span-7 bg-[#142B3B] text-white p-8 sm:p-12 rounded-3xl relative overflow-hidden shadow-xl">
              <div className="relative z-10 space-y-6">
                <span className="inline-block px-3 py-1 rounded-full bg-[#1B384D] border border-[#234761] text-[#43A66B] text-xs font-bold uppercase tracking-wider">
                  Fastest Route to Pricing
                </span>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Looking for a Cleaning Quote?
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  Our comprehensive Request a Quote form collects your specific property type, Manchester postcode, and room count to generate an accurate estimate.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#43A66B] shrink-0" />
                    <span>Takes under 2 minutes to submit</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#43A66B] shrink-0" />
                    <span>No obligation or automated spam</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#43A66B] shrink-0" />
                    <span>Direct review by local Manchester staff</span>
                  </div>
                </div>

                <div className="pt-6">
                  <Link
                    to="/quote"
                    className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 rounded-xl bg-[#43A66B] hover:bg-[#348655] text-white font-bold text-sm shadow-md transition-all"
                  >
                    <span>Go to Free Quote Form</span>
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

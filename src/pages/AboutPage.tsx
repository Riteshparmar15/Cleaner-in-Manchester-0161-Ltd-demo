import { Link } from "react-router-dom";
import { HeartHandshake, Sparkles } from "lucide-react";
import { ConversionBanner } from "../components/ConversionBanner";
import { getAssetUrl } from "../utils/assets";


export const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Header */}
      <section className="bg-[#142B3B] text-white py-16 lg:py-20 border-b border-[#1D3D52]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-[#1B384D] border border-[#234761] text-[#43A66B] text-xs font-bold uppercase tracking-wider mb-4">
            Our Story & Values
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            About Cleaner in Manchester (0161) Ltd
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
            Professional, friendly, and detail-oriented cleaning services rooted in Manchester.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              to="/quote"
              className="px-6 py-3 rounded-lg bg-[#43A66B] hover:bg-[#348655] text-white text-sm font-bold shadow-sm transition-all"
            >
              Get a Free Quote
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-lg bg-[#1B384D] hover:bg-[#234761] text-white text-sm font-bold transition-colors"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Main Narrative & Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#43A66B]">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142B3B] tracking-tight">
                Dedicated Housekeeping & Cleaning for Manchester Properties
              </h2>
              <p className="text-base text-[#65727E] leading-relaxed">
                Cleaner in Manchester (0161) Ltd was founded to offer home and business owners across Greater Manchester a dependable, high-standard cleaning service they can rely on week after week.
              </p>
              <p className="text-base text-[#65727E] leading-relaxed">
                Whether you live in a modern city apartment in Ancoats, manage an office on Deansgate, or own a family home in Didsbury, our approach remains the same: thorough attention to detail, transparent communication, and flexible scheduling tailored to your actual routines.
              </p>

              {/* Core Pillars */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#F7F9FA] border border-[#E5E9ED]">
                  <div className="flex items-center gap-2 mb-2 font-bold text-[#142B3B] text-sm">
                    <Sparkles className="w-4 h-4 text-[#43A66B]" />
                    <span>Meticulous Standards</span>
                  </div>
                  <p className="text-xs text-[#65727E]">
                    Structured room-by-room checklists ensure no surface or sanitary touchpoint is overlooked.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F7F9FA] border border-[#E5E9ED]">
                  <div className="flex items-center gap-2 mb-2 font-bold text-[#142B3B] text-sm">
                    <HeartHandshake className="w-4 h-4 text-[#43A66B]" />
                    <span>Friendly & Respectful</span>
                  </div>
                  <p className="text-xs text-[#65727E]">
                    Polite, vetted professionals who respect your privacy, personal property, and home environment.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#E5E9ED] aspect-[4/3]">
                <img
                  src={getAssetUrl("/images/about_supplies.jpg")}
                  alt="High quality eco-friendly cleaning supplies and caddy"
                  className="w-full h-full object-cover"
                />

              </div>
              <p className="mt-3 text-xs text-center text-[#65727E]">
                Quality materials, methodical care, and pride in clean living spaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 bg-[#F7F9FA] border-t border-[#E5E9ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-[#EDF7F1] text-[#43A66B] text-xs font-extrabold uppercase tracking-wider mb-3">
              Our Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142B3B] tracking-tight">
              What You Can Always Expect
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E5E9ED] shadow-xs">
              <h3 className="text-lg font-bold text-[#142B3B] mb-3">
                Transparent Estimates
              </h3>
              <p className="text-sm text-[#65727E] leading-relaxed">
                No hidden surprises. We review your property scope beforehand so you receive an honest, straightforward quote based on your actual cleaning needs.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E5E9ED] shadow-xs">
              <h3 className="text-lg font-bold text-[#142B3B] mb-3">
                Flexible Frequency
              </h3>
              <p className="text-sm text-[#65727E] leading-relaxed">
                Life changes. Whether you need to pause during holidays or add extra hours for special occasions, our team accommodates your schedule.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E5E9ED] shadow-xs">
              <h3 className="text-lg font-bold text-[#142B3B] mb-3">
                Direct Manchester Team
              </h3>
              <p className="text-sm text-[#65727E] leading-relaxed">
                We are proud to serve Manchester. Call us directly on 0161 710 4789 to discuss your cleaning arrangements with a real local person.
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

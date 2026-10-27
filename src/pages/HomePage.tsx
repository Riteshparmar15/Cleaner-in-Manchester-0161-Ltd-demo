import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, CheckCircle2, MapPin } from "lucide-react";
import { motion } from "framer-motion";

import { servicesData } from "../data/servicesData";
import { TrustSection } from "../components/TrustSection";
import { ServiceCard } from "../components/ServiceCard";
import { HowItWorks } from "../components/HowItWorks";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { ReviewsSection } from "../components/ReviewsSection";
import { ServiceAreaSection } from "../components/ServiceAreaSection";
import { FAQSection } from "../components/FAQSection";
import { ConversionBanner } from "../components/ConversionBanner";
import {
  SmoothFadeIn,
  StaggerContainer,
  StaggerItem,
  SmoothHeadline
} from "../components/MotionWrappers";
import { appleEase } from "../data/motionConfig";


export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-white via-[#F7F9FA] to-[#F7F9FA] pt-8 pb-16 lg:pt-16 lg:pb-24 border-b border-[#E5E9ED]/60 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Hero Content (7 cols on lg) */}
            <div className="lg:col-span-7 flex flex-col items-start z-10">
              {/* Location Badge with Mac Shimmer */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: appleEase }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mac-shimmer-badge text-[#142B3B] text-xs sm:text-sm font-bold tracking-wide mb-6 border border-[#D2EEDE] shadow-xs"
              >
                <MapPin className="w-4 h-4 text-[#43A66B] shrink-0" />
                <span>Manchester &bull; Professional Cleaning Services</span>
              </motion.div>

              {/* Exact Requested Headline with Apple-Style Smooth Masked Reveal */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#142B3B] tracking-tight leading-[1.12] mb-6">
                <SmoothHeadline text="A Cleaner Home." highlightText="A Fresher Start." />
              </h1>

              {/* Exact Requested Supporting Copy with Smooth Fade */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: appleEase }}
                className="text-lg sm:text-xl text-[#65727E] leading-relaxed max-w-xl mb-8"
              >
                Professional cleaning services in Manchester, tailored to your property, schedule, and cleaning needs.
              </motion.p>

              {/* Call to Actions with Mac Spring Physics */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: appleEase }}
                className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10"
              >
                <Link
                  to="/quote"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#43A66B] hover:bg-[#348655] text-white text-base font-bold shadow-md mac-btn focus:outline-none focus:ring-2 focus:ring-[#43A66B] focus:ring-offset-2"
                >
                  <span>Get My Free Quote</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white hover:bg-[#F7F9FA] text-[#142B3B] border border-[#E5E9ED] text-base font-bold mac-btn focus:outline-none focus:ring-2 focus:ring-[#142B3B]"
                >
                  <span>Explore Our Services</span>
                </Link>
              </motion.div>

              {/* Verified Trust Strip */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.45 }}
                className="pt-6 border-t border-[#E5E9ED] w-full grid grid-cols-2 sm:grid-cols-3 gap-4"
              >
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#202A33] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#43A66B] shrink-0" />
                  <span>Flexible schedules</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#202A33] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#43A66B] shrink-0" />
                  <span>Detail-oriented care</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#202A33] font-medium col-span-2 sm:col-span-1">
                  <CheckCircle2 className="w-4 h-4 text-[#43A66B] shrink-0" />
                  <span>Direct quote review</span>
                </div>
              </motion.div>
            </div>

            {/* Right Hero Visual (5 cols on lg) */}
            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.15, ease: appleEase }}
                className="relative mx-auto max-w-md lg:max-w-none"
              >
                {/* Decorative Frame */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] sm:aspect-[16/11]">
                  <img
                    src="/images/hero_clean_home.jpg"
                    alt="Pristine and sunlit modern Manchester townhouse living space"
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out hover:scale-105"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#142B3B]/40 via-transparent to-transparent"></div>
                </div>

                {/* Floating Reassurance Card with Mac Floating Animation */}
                <div className="absolute -bottom-6 -left-4 sm:-left-6 mac-glass p-4 sm:p-5 rounded-2xl border border-white/60 shadow-[0_20px_40px_rgba(20,43,59,0.12)] max-w-xs animate-mac-float">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-xl bg-[#EDF7F1] text-[#43A66B] flex items-center justify-center font-bold shadow-xs">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#142B3B]">
                        Cleaner in Manchester
                      </p>
                      <p className="text-[11px] text-[#65727E]">
                        (0161) Ltd &bull; 0161 710 4789
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-[#202A33] leading-tight">
                    Houses, apartments, and offices throughout Greater Manchester.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Reassurance Section */}
      <SmoothFadeIn>
        <TrustSection />
      </SmoothFadeIn>

      {/* Services Section with Staggered Cards */}
      <section className="py-20 bg-white" aria-labelledby="services-section-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SmoothFadeIn className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 rounded-full bg-[#EDF7F1] text-[#43A66B] text-xs font-extrabold uppercase tracking-wider mb-3">
                Tailored Cleaning Solutions
              </span>
              <h2 id="services-section-title" className="text-3xl sm:text-4xl font-extrabold text-[#142B3B] tracking-tight">
                Our Cleaning Services
              </h2>
              <p className="mt-3 text-base text-[#65727E] leading-relaxed">
                Whether you need regular domestic housekeeping, an intensive one-off deep clean, or commercial office care, we provide dedicated solutions.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#E5E9ED] text-sm font-bold text-[#142B3B] hover:bg-[#F7F9FA] transition-all mac-btn"
              >
                <span>Compare All 6 Services</span>
                <ArrowRight className="w-4 h-4 text-[#43A66B]" />
              </Link>
            </div>
          </SmoothFadeIn>

          {/* Staggered Service Cards Grid */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <StaggerItem key={service.slug}>
                <ServiceCard service={service} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* How It Works (3 Steps) */}
      <SmoothFadeIn>
        <HowItWorks />
      </SmoothFadeIn>

      {/* Why Choose Us */}
      <SmoothFadeIn>
        <WhyChooseUs />
      </SmoothFadeIn>

      {/* Service Area Section */}
      <SmoothFadeIn>
        <ServiceAreaSection />
      </SmoothFadeIn>

      {/* Customer Reviews Section */}
      <SmoothFadeIn>
        <ReviewsSection />
      </SmoothFadeIn>

      {/* Frequently Asked Questions */}
      <SmoothFadeIn>
        <FAQSection />
      </SmoothFadeIn>

      {/* Final Conversion Section */}
      <SmoothFadeIn>
        <ConversionBanner />
      </SmoothFadeIn>
    </div>
  );
};

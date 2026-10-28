import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, MapPin, Phone, Star, ShieldCheck, Award, Clock } from "lucide-react";
import { motion } from "framer-motion";

import { servicesData } from "../data/servicesData";
import { businessInfo } from "../data/businessInfo";
import { ServiceCard } from "../components/ServiceCard";
import { HowItWorks } from "../components/HowItWorks";
import { ReviewsSection } from "../components/ReviewsSection";
import { ServiceAreaSection } from "../components/ServiceAreaSection";
import { FAQSection } from "../components/FAQSection";
import { ConversionBanner } from "../components/ConversionBanner";
import { TimeSavingBookingWidget } from "../components/TimeSavingBookingWidget";
import { OptimizedImage } from "../components/OptimizedImage";
import {
  SmoothFadeIn,
  StaggerContainer,
  StaggerItem
} from "../components/MotionWrappers";
import { appleEase } from "../data/motionConfig";

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* TIME-SAVING HERO: Headline & Trust on Left, Instant 60-Second Booking Calculator on Right */}
      <section className="relative bg-gradient-to-b from-slate-100/70 via-white to-slate-50 pt-8 pb-14 lg:pt-12 lg:pb-20 border-b border-slate-200/80 overflow-hidden">
        {/* Subtle decorative tone */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#14355F]/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Hero: Quick Trust, Real Cleaner Thumbnail, & Punchy Value */}
            <div className="lg:col-span-5 flex flex-col items-start">
              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: appleEase }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-slate-800 text-xs font-bold mb-4 border border-slate-200 shadow-xs"
              >
                <MapPin className="w-3.5 h-3.5 text-[#14355F] shrink-0" />
                <span>Manchester &bull; DBS Checked</span>
                <span className="text-slate-300">|</span>
                <span className="flex items-center gap-1 text-amber-500 font-extrabold">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  4.9 (184+ Reviews)
                </span>
              </motion.div>

              {/* Punchy, Short Headline - Professional Solid Colors */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.12] mb-4">
                Manchester's Vetted Cleaners.{" "}
                <span className="text-[#0D9488]">
                  Book in 60 Seconds.
                </span>
              </h1>

              {/* Time-Saving Subtitle */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                Save 4–6 hours this week. Certified professionals, eco-friendly supplies provided, and 100% satisfaction guaranteed.
              </p>

              {/* Visual Cleaner Thumbnail with Trust Proof */}
              <div className="w-full p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm mb-6 flex items-center gap-4">
                <OptimizedImage
                  src="/images/hero_cleaner_action.jpg"
                  alt="Professional Manchester cleaner in uniform wiping kitchen worktop"
                  wrapperClassName="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-slate-100 shadow-xs"
                  priority={true}
                  width={64}
                  height={64}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>DBS Checked & £2M Insured</span>
                  </div>
                  <p className="text-[11px] text-slate-500 truncate mt-0.5">
                    Uniformed specialists &bull; All equipment provided
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-[11px] font-semibold text-emerald-700">Cleaners Available This Week</span>
                  </div>
                </div>
              </div>

              {/* Quick Call Button for immediate assistance */}
              <div className="w-full flex items-center justify-between gap-3 p-3 rounded-xl bg-slate-100/80 border border-slate-200">
                <span className="text-xs font-semibold text-slate-700">Prefer to book by phone?</span>
                <a
                  href={businessInfo.phoneHref}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#14355F] hover:bg-[#0E2543] text-white font-bold text-xs shadow-xs transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{businessInfo.phoneFormatted}</span>
                </a>
              </div>
            </div>

            {/* Right Hero: Instant 60-Second Time-Saving Calculator (Above The Fold) */}
            <div className="lg:col-span-7">
              <TimeSavingBookingWidget />
            </div>
          </div>
        </div>
      </section>

      {/* QUICK TRUST BAR - 4 Visual Trust Badges (No long reading required) */}
      <section className="bg-white py-6 border-b border-slate-200 shadow-xs" aria-label="Trust guarantees">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-3 p-2">
              <div className="w-10 h-10 rounded-xl bg-[#14355F]/10 text-[#14355F] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="block font-black text-slate-900 text-xs sm:text-sm">DBS Checked Staff</span>
                <span className="text-[11px] text-slate-500">100% Background Vetted</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <span className="block font-black text-slate-900 text-xs sm:text-sm">£2,000,000 Insured</span>
                <span className="text-[11px] text-slate-500">Full Public Liability</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <span className="block font-black text-slate-900 text-xs sm:text-sm">Free Re-Clean</span>
                <span className="text-[11px] text-slate-500">100% Satisfaction Guarantee</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="block font-black text-slate-900 text-xs sm:text-sm">Supplies Provided</span>
                <span className="text-[11px] text-slate-500">Eco-Friendly Products & Kit</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION: VISUAL, TIME-SAVING, NO TEXT WALLS */}
      <section className="py-16 bg-slate-50" aria-labelledby="services-section-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-[#14355F]/10 text-[#14355F] text-xs font-black uppercase tracking-wider mb-2">
                Our Services
              </span>
              <h2 id="services-section-title" className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                Select Your Service & Book in 60s
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                Professional, vetted cleaning specialists with all supplies included. Click &ldquo;Book in 60s&rdquo; to reserve your clean.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                to="/quote"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#14355F] hover:bg-[#0E2543] text-white text-xs font-black shadow-xs transition-all mac-btn"
              >
                <span>Instant Quote Calculator</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Service Cards Grid - Visual, Trust-Packed, NO LONG DESCRIPTIONS */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service) => (
              <StaggerItem key={service.slug}>
                <ServiceCard service={service} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* REAL GOOGLE REVIEWS SECTION: MOTION MARQUEE (ALL UNDER 1 YEAR) */}
      <SmoothFadeIn>
        <ReviewsSection />
      </SmoothFadeIn>

      {/* STRAIGHTFORWARD 3-STEP PROCESS: SIMPLE, TIME-SAVING */}
      <SmoothFadeIn>
        <HowItWorks />
      </SmoothFadeIn>

      {/* SERVICE AREA POSTCODE CHECKER */}
      <SmoothFadeIn>
        <ServiceAreaSection />
      </SmoothFadeIn>

      {/* COMPACT FAQ SECTION (COLLAPSED BY DEFAULT - ZERO CLUTTER) */}
      <SmoothFadeIn>
        <FAQSection />
      </SmoothFadeIn>

      {/* FINAL INSTANT BOOKING BANNER */}
      <SmoothFadeIn>
        <ConversionBanner />
      </SmoothFadeIn>
    </div>
  );
};

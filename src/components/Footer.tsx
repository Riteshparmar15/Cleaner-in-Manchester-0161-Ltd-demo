import React from "react";
import { Link } from "react-router-dom";
import { Phone, MapPin, Globe, ArrowRight, ShieldCheck, Star } from "lucide-react";
import { businessInfo } from "../data/businessInfo";
import { servicesData } from "../data/servicesData";
import { getAssetUrl } from "../utils/assets";

const CURRENT_YEAR = 2026;

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-12 border-t border-slate-800" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand & Mission (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <picture className="w-11 h-11 shrink-0">
                <source srcSet={getAssetUrl(businessInfo.logoWhiteEmblemNavWebp)} type="image/webp" />
                <img
                  src={getAssetUrl(businessInfo.logoWhiteEmblemNav)}
                  alt="Cleaner in Manchester (0161) Ltd Logo"
                  className="w-full h-full object-contain drop-shadow-sm"
                  width={44}
                  height={44}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              <div>
                <span className="text-xl font-black tracking-tight text-white block">
                  Cleaner in Manchester
                </span>
                <span className="text-xs text-teal-400 font-semibold uppercase tracking-wider">
                  (0161) Ltd &bull; Greater Manchester, UK
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              Professional, friendly, and detail-oriented cleaning services in Manchester.
              DBS-checked cleaners, eco-friendly supplies, and 100% satisfaction guaranteed.
            </p>

            {/* Google Rating in footer */}
            <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-900 border border-slate-800 max-w-xs">
              <div className="flex items-center gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-bold text-slate-200">4.9 / 5.0 Google Rating</span>
            </div>

            <div className="pt-2 space-y-2.5">
              <div className="flex items-center gap-3 text-slate-300 text-sm">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0" />
                <span>{businessInfo.location}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300 text-sm">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a
                  href={businessInfo.phoneHref}
                  className="font-bold text-white hover:text-teal-400 transition-colors"
                >
                  {businessInfo.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-3 text-slate-300 text-sm">
                <Globe className="w-4 h-4 text-teal-400 shrink-0" />
                <span>{businessInfo.domain}</span>
              </div>
            </div>
          </div>

          {/* Cleaning Services Column */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold tracking-wider uppercase text-slate-200">
              Cleaning Services
            </h3>
            <ul className="space-y-2">
              {servicesData.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-sm text-slate-400 hover:text-teal-400 transition-colors inline-block"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold tracking-wider uppercase text-slate-200">
              Company & Enquiries
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link to="/" className="hover:text-teal-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-teal-400 transition-colors">
                  All Services Overview
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-teal-400 transition-colors">
                  About Our Cleaners
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-teal-400 transition-colors">
                  Contact Manchester Team
                </Link>
              </li>
              <li>
                <Link to="/quote" className="hover:text-teal-300 transition-colors font-semibold text-teal-400">
                  Instant Quote & Booking
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-teal-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Quote & Contact Highlight */}
          <div className="space-y-4 bg-slate-900 p-5 rounded-2xl border border-slate-800">
            <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              <span>Get Your Free Quote</span>
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Calculate your cleaning price in 60 seconds with our time-saving estimator.
            </p>
            <Link
              to="/quote"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#14355F] hover:bg-[#1E4B82] border border-teal-500/30 text-white text-xs font-bold transition-all shadow-md shadow-slate-950"
            >
              <span>Instant Estimate</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <div className="pt-1 text-center">
              <span className="text-[11px] text-slate-400">
                Direct phone:{" "}
                <a
                  href={businessInfo.phoneHref}
                  className="font-bold text-teal-400 hover:underline"
                >
                  {businessInfo.phoneFormatted}
                </a>
              </span>
            </div>
          </div>
        </div>

        {/* Business Credentials Notice */}
        <div className="my-8 p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-400 leading-relaxed flex items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
          <p>
            <strong className="text-slate-200">Insured & Certified:</strong> {businessInfo.disclaimer}
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {CURRENT_YEAR} {businessInfo.name}. All rights reserved. Registered in the United Kingdom.
          </p>

          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:text-slate-300 transition-colors">
              Contact
            </Link>
            <a href="#top" className="hover:text-teal-400 transition-colors">
              Back to top &uarr;
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

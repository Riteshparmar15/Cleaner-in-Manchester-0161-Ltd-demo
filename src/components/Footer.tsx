import { Link } from "react-router-dom";
import { Phone, MapPin, Globe, ArrowRight } from "lucide-react";

import { businessInfo } from "../data/businessInfo";
import { servicesData } from "../data/servicesData";

const CURRENT_YEAR = 2026;

export const Footer: React.FC = () => {


  return (
    <footer className="bg-[#142B3B] text-white pt-16 pb-12 border-t border-[#1D3D52]" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#1D3D52]">
          {/* Brand & Mission (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#43A66B] text-white flex items-center justify-center font-bold text-lg">
                <span className="font-extrabold text-[#142B3B]">01</span>
                <span>61</span>
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight text-white block">
                  Cleaner in Manchester
                </span>
                <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                  (0161) Ltd &bull; Manchester, UK
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              Friendly, professional, and detail-oriented cleaning services in Manchester.
              Tailored arrangements for homes, apartments, tenancies, and commercial workspaces.
            </p>

            <div className="pt-2 space-y-2.5">
              <div className="flex items-center gap-3 text-slate-300 text-sm">
                <MapPin className="w-4 h-4 text-[#43A66B] shrink-0" />
                <span>{businessInfo.location}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300 text-sm">
                <Phone className="w-4 h-4 text-[#43A66B] shrink-0" />
                <a
                  href={businessInfo.phoneHref}
                  className="font-bold text-white hover:text-[#43A66B] transition-colors"
                >
                  {businessInfo.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-3 text-slate-300 text-sm">
                <Globe className="w-4 h-4 text-[#43A66B] shrink-0" />
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
                    className="text-sm text-slate-300 hover:text-[#43A66B] transition-colors inline-block"
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
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link to="/" className="hover:text-[#43A66B] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#43A66B] transition-colors">
                  All Services Overview
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#43A66B] transition-colors">
                  About Our Approach
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#43A66B] transition-colors">
                  Contact Manchester Team
                </Link>
              </li>
              <li>
                <Link to="/quote" className="hover:text-[#43A66B] transition-colors font-semibold text-[#43A66B]">
                  Request a Free Quote
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-[#43A66B] transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Quote & Contact Highlight */}
          <div className="space-y-4 bg-[#1B384D]/50 p-5 rounded-2xl border border-[#234761]">
            <h3 className="text-sm font-bold text-white">
              Get Your Free Estimate
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Tell us about your property size and cleaning requirements for a straightforward quote.
            </p>
            <Link
              to="/quote"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-[#43A66B] hover:bg-[#348655] text-white text-xs font-bold transition-all shadow-sm"
            >
              <span>Get Started</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <div className="pt-1 text-center">
              <span className="text-[11px] text-slate-400">
                Or telephone:{" "}
                <a
                  href={businessInfo.phoneHref}
                  className="font-bold text-white hover:underline"
                >
                  {businessInfo.phoneFormatted}
                </a>
              </span>
            </div>
          </div>
        </div>

        {/* Independent Website Concept Disclaimer Box (Required by project brief) */}
        <div className="my-8 p-4 rounded-xl bg-[#1B384D]/30 border border-[#234761]/60 text-xs text-slate-400 leading-relaxed">
          <p>
            <strong className="text-slate-200">Demonstration Notice:</strong>{" "}
            {businessInfo.disclaimer}
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {CURRENT_YEAR} {businessInfo.name}. All rights reserved. Registered in the United Kingdom.
          </p>

          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-slate-200 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:text-slate-200 transition-colors">
              Contact
            </Link>
            <a href="#top" className="hover:text-[#43A66B] transition-colors">
              Back to top &uarr;
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

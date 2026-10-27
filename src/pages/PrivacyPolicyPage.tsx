import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { businessInfo } from "../data/businessInfo";

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <section className="bg-[#142B3B] text-white py-12 lg:py-16 border-b border-[#1D3D52]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-300">
            Last updated: October 2026 &bull; Cleaner in Manchester (0161) Ltd
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate max-w-none text-sm text-[#202A33] leading-relaxed space-y-8">
          <div className="p-4 rounded-xl bg-[#F7F9FA] border border-[#E5E9ED]">
            <p className="font-semibold text-[#142B3B] m-0">
              Cleaner in Manchester (0161) Ltd is committed to protecting your privacy and handling personal data in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#142B3B] mb-3">1. Information We Collect</h2>
            <p className="text-[#65727E]">
              When you submit a quote enquiry or contact us directly, we may collect the following information:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[#65727E] mt-2">
              <li>Full name and preferred title</li>
              <li>Contact telephone number</li>
              <li>Email address</li>
              <li>Property address or postcode in Greater Manchester</li>
              <li>Property specifications (property type, room count, specific cleaning notes)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#142B3B] mb-3">2. How We Use Your Information</h2>
            <p className="text-[#65727E]">
              We only use your personal data for legitimate business purposes, specifically:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[#65727E] mt-2">
              <li>Assessing your property cleaning requirements and preparing an accurate quote</li>
              <li>Communicating with you regarding scheduling, access, and service specifications</li>
              <li>Fulfilling contracted domestic or commercial cleaning appointments</li>
              <li>Complying with statutory accounting and tax obligations in the United Kingdom</li>
            </ul>
            <p className="text-[#65727E] mt-3">
              We never sell, rent, or trade customer contact details to third-party marketing companies.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#142B3B] mb-3">3. Cookies and Analytics</h2>
            <p className="text-[#65727E]">
              Our website uses strictly necessary technical cookies to ensure safe navigation, session stability, and form submission security. We do not place advertising tracking cookies on your device without prior consent.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#142B3B] mb-3">4. Data Retention and Security</h2>
            <p className="text-[#65727E]">
              We retain customer enquiry records only for as long as necessary to provide quotes, fulfill services, or meet legal recordkeeping requirements. We maintain appropriate technical and organizational measures to safeguard against unauthorized access or accidental loss.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#142B3B] mb-3">5. Your Data Rights</h2>
            <p className="text-[#65727E]">
              Under UK data protection laws, you have the right to request access to the personal data we hold about you, request corrections to inaccurate records, or request deletion where retention is no longer required.
            </p>
            <p className="text-[#65727E] mt-2">
              To exercise these rights, please contact our team by calling{" "}
              <a href={businessInfo.phoneHref} className="font-bold text-[#142B3B] hover:underline">
                {businessInfo.phoneFormatted}
              </a>
              .
            </p>
          </div>

          <div className="pt-6 border-t border-[#E5E9ED]">
            <p className="text-xs text-slate-400">
              Cleaner in Manchester (0161) Ltd &bull; Location: {businessInfo.location} &bull; Website: {businessInfo.domain}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
